import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { CustomText } from '../../uikit';
import { FontsFamilyEnum, FontStyleEnum, FontWeightEnum } from '../../uikit/CustomText';
import SlideBtn from '../../uikit/SlideBtn/SlideBtn';
import { emailNotificationSettingsStyles as styles } from './styles';

const SECTION_TITLE = 'Настройка Email уведомлений';

export const EmailNotificationSettings = () => {
  const [enableAll, setEnableAll] = useState(false);
  const [systemNews, setSystemNews] = useState(false);
  const [appointments, setAppointments] = useState(true);
  const [eventsNotes, setEventsNotes] = useState(true);
  const [notify24_7, setNotify24_7] = useState(true);

  useEffect(() => {
    AsyncStorage.multiGet(['notif_email_all', 'notif_email_system', 'notif_email_appointments', 'notif_email_events', 'notif_email_allday']).then(pairs => {
      const all = pairs[0][1];
      const sys = pairs[1][1];
      const appt = pairs[2][1];
      const events = pairs[3][1];
      const allday = pairs[4][1];
      if (all !== null) setEnableAll(all === 'true');
      if (sys !== null) setSystemNews(sys === 'true');
      if (appt !== null) setAppointments(appt === 'true');
      if (events !== null) setEventsNotes(events === 'true');
      if (allday !== null) setNotify24_7(allday === 'true');
    });
  }, []);

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.sectionTitle}>
        <CustomText
          value={SECTION_TITLE}
          textStyles={{
            fontStyle: FontStyleEnum.NORMAL,
            fontWeight: FontWeightEnum.MEDIUM,
            fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
            fontSize: 14,
            color: '#424242',
            textAlign: 'center',
          }}
        />
      </View>

      <View style={styles.section}>
        <SlideBtn
          title="Включить все"
          checked={enableAll}
          onValueChange={(v) => { setEnableAll(v); AsyncStorage.setItem('notif_email_all', String(v)); }}
        />
        <View style={styles.divider} />
        <SlideBtn
          title="Системные / новости"
          checked={systemNews}
          onValueChange={(v) => { setSystemNews(v); AsyncStorage.setItem('notif_email_system', String(v)); }}
        />
        <View style={styles.divider} />
        <SlideBtn
          title="Приемы"
          checked={appointments}
          onValueChange={(v) => { setAppointments(v); AsyncStorage.setItem('notif_email_appointments', String(v)); }}
        />
        <View style={styles.divider} />
        <SlideBtn
          title="Мероприятия / заметки"
          checked={eventsNotes}
          onValueChange={(v) => { setEventsNotes(v); AsyncStorage.setItem('notif_email_events', String(v)); }}
        />
      </View>

      <View style={styles.divider} />

      <View style={styles.section}>
        <SlideBtn
          title="Получать уведомления круглосуточно"
          checked={notify24_7}
          onValueChange={(v) => { setNotify24_7(v); AsyncStorage.setItem('notif_email_allday', String(v)); }}
        />
      </View>
    </ScrollView>
  );
};
