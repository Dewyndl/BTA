import React from 'react'
import { View } from 'react-native'
import { AppointmentItem } from '../AppointmentItem'
import { Button, CustomText, FontsFamilyEnum, FontStyleEnum, FontWeightEnum } from '../../uikit'
import { IAppointmentListProps } from './interfaces'
import { ArchiveIcon } from '../../../assets'
import { flexbox } from '../../design'
import { appointmentListStyles } from './styles'
import { MainStackParamList } from '../../../app/navigations/MainNavigator/types/main-stack-param-list.type'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { AppointmentTypesEnum, useListPatientsQuery, useListVisitsQuery } from '../../../features'

const visitTypeToEnum = (type?: string): AppointmentTypesEnum => {
  if (type === 'followup') return AppointmentTypesEnum.CHECKUP;
  if (type === 'repeat') return AppointmentTypesEnum.REPEAT;
  return AppointmentTypesEnum.PRIMARY;
};

export const AppointmentsList = ({
  title,
  isArchive,
  showArchived = false,
  limit,
  onItemPress,
}: IAppointmentListProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const { data } = useListVisitsQuery({});
  const { data: patients = [] } = useListPatientsQuery({});

  const patientNameMap: Record<string, string> = {};
  patients.forEach((p) => { patientNameMap[p.u_id] = p.u_name; });

  const visits = (data ?? [])
    .filter((visit) =>
      showArchived
        ? visit.b_completed !== null || visit.b_cancel_reason !== null
        : visit.b_completed === null && visit.b_cancel_reason === null
    )
    .slice(0, limit)
    .map((visit) => ({
      id: visit.b_id,
      patientName: patientNameMap[visit.u_id] ?? visit.u_id,
      type: visitTypeToEnum(visit.b_options?.type),
      date: new Date(visit.b_start_datetime),
      time: new Date(visit.b_start_datetime).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
    }));

    return (
        <View style={appointmentListStyles.container}>
            <View style={[flexbox.justifyBetween, flexbox.directionRow, flexbox.alignCenter]}>
                {title && <CustomText
                    value={title}
                    textStyles={{
                        fontStyle: FontStyleEnum.NORMAL,
                        fontWeight: FontWeightEnum.SEMI_BOLD,
                        fontFamily: FontsFamilyEnum.MONTSERRAT_SEMIBOLD,
                        fontSize: 14,
                        color: "#222221",
                    }}
                />}
                {
                    isArchive && <Button
                        Icon={<ArchiveIcon />}
                        label='Архив'
                        onPress={() => {
                            navigation.navigate('AppointmentArchive')
                        }}
                    />
                }
            </View>
            <View style={appointmentListStyles.listContainer}>
                {
                    visits.map((el) => (
                      <AppointmentItem
                        key={el.id}
                        {...el}
                        onPress={onItemPress ? () => onItemPress(el) : undefined}
                      />
                    ))
                }
            </View>
        </View>
    )
}
