import React from 'react';
import { Alert } from 'react-native';
import { MainWrapper } from '../../../wrappers';
import { FollowUpAppointmentCreate } from '../../../components/FollowUpAppointmentCreate';
import { useGetVisitQuery, useListPatientsQuery, useVisitActionMutation } from '../../../../features';
import type { BodyType } from '../../../../common';
import { ScreenProps } from '../types';

export const FollowUpAppointmentCreateScreen = ({
  route,
  navigation,
}: ScreenProps<'FollowUpAppointmentCreate'>) => {
  const { id } = route.params;
  const { data: visit } = useGetVisitQuery(id);
  const [visitAction] = useVisitActionMutation();
  const { data: patients = [] } = useListPatientsQuery({});
  const patientNameMap: Record<string, string> = {};
  patients.forEach((p) => { patientNameMap[p.u_id] = p.u_name; });

  const initialBody: BodyType = visit ? { patientName: patientNameMap[visit.u_id] ?? visit.u_id } : {};

  const handleComplete = async (finalBody: BodyType) => {
    const actionResult = await visitAction({
      b_id: id,
      action: 'complete_followup',
      data: JSON.stringify({
        results: (finalBody.results as unknown as Record<string, string>) ?? {},
        send_collage_to_patient: Boolean(finalBody.sendCollage),
        schedule_repeat: Boolean(finalBody.scheduleExamination),
        repeat_interval_months: 1,
      }),
    });
    if ('error' in actionResult || actionResult.data === null) {
      Alert.alert('Ошибка', 'Не удалось завершить повторный прием');
      return;
    }
    navigation.replace('Home');
  };

  return (
    <MainWrapper title="Повторный прием" back={() => navigation.goBack()}>
      <FollowUpAppointmentCreate initialBody={initialBody} onComplete={handleComplete} />
    </MainWrapper>
  );
};
