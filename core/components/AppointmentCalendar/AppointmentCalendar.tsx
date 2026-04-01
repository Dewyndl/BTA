import { useState } from 'react';
import { CustomModal, CustomText, CustomCalendar, FontsFamilyEnum, FontStyleEnum, FontWeightEnum } from '../../uikit';
import { SelectModal } from "../SelectModal";
import { SelectOption } from "../../../common";
import { MainStackParamList } from "../../../app";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Search } from "../Search";
import { ScrollView, TouchableHighlight, View } from "react-native";
import { flexbox } from "../../design";
import { AddPatientIcon } from "../../../assets";
import { AppointmentItem } from "../AppointmentItem";
import { AppointmentTypesEnum, useListPatientsQuery, useListVisitsQuery } from "../../../features";
import { appointmentCalendarPageStyles } from './styles/appointment-calendar.style';



const todayString = () => {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
};

export const AppointmentCalendar = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const [isVisibleActions, setIsVisibleActions] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>(todayString());
  const { data: visitsData } = useListVisitsQuery({});
  const { data: patients = [] } = useListPatientsQuery({});

  const patientNameMap: Record<string, string> = {};
  patients.forEach((p) => { patientNameMap[p.u_id] = p.u_name; });

  const todayVisits = (visitsData ?? [])
    .filter((v) => {
      if (v.b_completed !== null || v.b_cancel_reason !== null) return false;
      const visitDate = v.b_start_datetime.slice(0, 10);
      return visitDate === selectedDate;
    })
    .map((visit) => {
      const options = visit.b_options;
      const type = options?.type === 'followup' ? AppointmentTypesEnum.CHECKUP
        : options?.type === 'repeat' ? AppointmentTypesEnum.REPEAT
        : AppointmentTypesEnum.PRIMARY;
      return {
        id: visit.b_id,
        patientName: patientNameMap[visit.u_id] ?? visit.u_id,
        type,
        date: new Date(visit.b_start_datetime),
        time: new Date(visit.b_start_datetime).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
      };
    });
  const [actions, setActions] = useState<Array<SelectOption<number>>>([
    {
      label: 'Запланировать мероприятие',
      value: 0
    },
    {
      label: 'Помощь',
      value: 1
    },
  ])
  return (
    <View style={appointmentCalendarPageStyles.container}>
      <CustomModal
        isVisible={isVisibleActions}
        setIsVisible={setIsVisibleActions}
        children={<SelectModal options={actions} directions={{
          top: 160,
          left: 50
        }}
          onPress={(value) => {
            if (value === 0) {
              navigation.navigate('CalendarEvent')
            }
            setIsVisibleActions(false)
          }}
        />}
      />
      {
        isSearch ? (<Search setModalState={setIsSearch} />) : (
          <View>
            <CustomCalendar setModalState={setIsSearch} setIsVisible={setIsVisibleActions} selectedDate={selectedDate} onDayPress={setSelectedDate} />
            <View style={appointmentCalendarPageStyles.bottomContainer}>
              <CustomText
                value={selectedDate === todayString() ? `Сегодня ${new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}:` : `${new Date(selectedDate + 'T00:00:00').toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}:`}
                textStyles={{
                  fontStyle: FontStyleEnum.NORMAL,
                  fontWeight: FontWeightEnum.MEDIUM,
                  fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
                  fontSize: 18,
                  color: '#222221'
                }}
              />
            </View>
            <ScrollView style={appointmentCalendarPageStyles.usersContainer}>
              {todayVisits.map((visit, i) => (
                <AppointmentItem
                  key={i}
                  {...visit}
                  onPress={() => { }}
                />
              ))}
            </ScrollView>
            <View style={[flexbox.basic, flexbox.directionRow, flexbox.alignCenter, flexbox.justifyCenter]}>
              <TouchableHighlight onPress={() => navigation.navigate('AppointmentCreate')}>
                <AddPatientIcon />
              </TouchableHighlight>
            </View>
          </View>
        )
      }
    </View>
  );
};
