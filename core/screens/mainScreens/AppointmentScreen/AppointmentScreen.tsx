import React from 'react'
import { FlatList } from 'react-native'
import { ScreenProps } from '../types'
import { AppointmentTypesEnum, useListPatientsQuery, useListVisitsQuery } from '../../../../features'
import { CustomText, FontsFamilyEnum, FontStyleEnum, FontWeightEnum } from '../../../uikit'
import { AppointmentItem } from '../../../components/AppointmentItem'
import { MainWrapper } from '../../../wrappers'

const visitTypeToEnum = (type?: string): AppointmentTypesEnum => {
  if (type === 'followup') return AppointmentTypesEnum.CHECKUP;
  if (type === 'repeat') return AppointmentTypesEnum.REPEAT;
  return AppointmentTypesEnum.PRIMARY;
};

export const AppointmentScreen = ({ navigation }: ScreenProps<'Appointment'>) => {
  const { data, isLoading } = useListVisitsQuery({});
  const { data: patients = [] } = useListPatientsQuery({});

  const patientNameMap: Record<string, string> = {};
  patients.forEach((p) => { patientNameMap[p.u_id] = p.u_name; });

  const visits = (data ?? [])
    .filter((visit) => visit.b_completed === null && visit.b_cancel_reason === null)
    .map((visit) => ({
      id: visit.b_id,
      patientName: patientNameMap[visit.u_id] ?? visit.u_id,
    type: visitTypeToEnum(visit.b_options?.type),
    date: new Date(visit.b_start_datetime),
    time: new Date(visit.b_start_datetime).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
  }));

  return (
    <MainWrapper title='Приёмы' back={() => navigation.goBack()} noScroll>
      {isLoading ? (
        <CustomText
          value='Загрузка...'
          textStyles={{
            fontStyle: FontStyleEnum.NORMAL,
            fontWeight: FontWeightEnum.MEDIUM,
            fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
            fontSize: 14,
            color: '#222221',
          }}
        />
      ) : (
        <FlatList
          data={visits}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <AppointmentItem
              {...item}
              onPress={() => navigation.navigate('ApointmentDetail', { id: item.id })}
            />
          )}
        />
      )}
    </MainWrapper>
  );
}
