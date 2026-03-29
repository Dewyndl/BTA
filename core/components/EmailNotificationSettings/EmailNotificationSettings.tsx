import React, { useState } from 'react';
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
          onValueChange={setEnableAll}
        />
        <View style={styles.divider} />
        <SlideBtn
          title="Системные / новости"
          checked={systemNews}
          onValueChange={setSystemNews}
        />
        <View style={styles.divider} />
        <SlideBtn
          title="Приемы"
          checked={appointments}
          onValueChange={setAppointments}
        />
        <View style={styles.divider} />
        <SlideBtn
          title="Мероприятия / заметки"
          checked={eventsNotes}
          onValueChange={setEventsNotes}
        />
      </View>

      <View style={styles.divider} />

      <View style={styles.section}>
        <SlideBtn
          title="Получать уведомления круглосуточно"
          checked={notify24_7}
          onValueChange={setNotify24_7}
        />
      </View>
    </ScrollView>
  );
};
