import React from 'react';
import { Alert } from 'react-native';
import { MainWrapper } from '../../../wrappers';
import { AppointmentDetail } from '../../../components/AppointmentDetail';
import { AppointmentTypesEnum, useGetVisitQuery, useListPatientsQuery, useSendReminderMutation, useVisitActionMutation } from '../../../../features';
import { appointmentTypesFaker } from '../../../../features/store/entities/appointment/faker';
import { ScreenProps } from '../types';
import { MainStackParamList } from '../../../../app/navigations/MainNavigator/types/main-stack-param-list.type';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const visitTypeToEnum = (type?: string | null): AppointmentTypesEnum => {
  if (type === 'followup') return AppointmentTypesEnum.CHECKUP;
  if (type === 'repeat') return AppointmentTypesEnum.REPEAT;
  return AppointmentTypesEnum.PRIMARY;
};

export const ApointmentDetailScreen = ({
  route,
  navigation,
}: ScreenProps<'ApointmentDetail'>) => {
  const { id } = route.params;
  const nav = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const { data: visit } = useGetVisitQuery(id);
  const [visitAction] = useVisitActionMutation();
  const [sendReminder] = useSendReminderMutation();
  const { data: patients = [] } = useListPatientsQuery({});
  const patientNameMap: Record<string, string> = {};
  patients.forEach((p) => { patientNameMap[p.u_id] = p.u_name; });

  const visitType = visitTypeToEnum(visit?.b_options?.type);
  const procedure = appointmentTypesFaker[visitType];

  const handleStart = () => {
    if (visitType === AppointmentTypesEnum.PRIMARY) {
      nav.navigate('InspectionCreate', { id });
    } else {
      nav.navigate('FollowUpAppointmentCreate', { id });
    }
  };

  const handleCancel = async () => {
    if (visit) {
      await visitAction({ b_id: id, action: 'set_cancel_state' });
    }
    navigation.goBack();
  };

  const handleSendReminder = () => {
    if (visit?.u_id) {
      sendReminder({ patient_id: visit.u_id, template_type: 'reminder_followup' });
    }
  };

  const handlePatientCard = () => {
    nav.navigate('Cards');
  };

  const handleEdit = () => {
    Alert.alert('В разработке');
  };

  return (
    <MainWrapper title="BTA Assist" back={() => navigation.goBack()}>
      <AppointmentDetail
        patientName={visit ? (patientNameMap[visit.u_id] ?? visit.u_id) : 'Пациент'}
        patientImageUrl={require('../../../../assets/user-img.png')}
        procedure={procedure}
        scheduledAt={visit ? new Date(visit.b_start_datetime) : new Date()}
        onPatientCardPress={handlePatientCard}
        onSendReminderPress={handleSendReminder}
        onEditPress={handleEdit}
        onStartPress={handleStart}
        onCancelPress={handleCancel}
      />
    </MainWrapper>
  );
};
