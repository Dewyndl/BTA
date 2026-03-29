import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Alert, Pressable, ScrollView, View } from 'react-native';
import { CustomText } from '../../uikit';
import { FontsFamilyEnum, FontStyleEnum, FontWeightEnum } from '../../uikit/CustomText';
import SlideBtn from '../../uikit/SlideBtn/SlideBtn';
import { notificationSettingsStyles } from './styles';

type NotificationSettingsProps = {
  onNavigateTemplates?: () => void;
  onNavigateEmailSettings?: () => void;
};

const TIME_OPTIONS = ['06:00', '07:00', '08:00', '09:00', '10:00', '18:00', '20:00', '21:00', '22:00', '23:00'];

export const NotificationSettings = ({
  onNavigateTemplates,
  onNavigateEmailSettings,
}: NotificationSettingsProps) => {
  const [silentMode, setSilentMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [notifFrom, setNotifFrom] = useState('08:00');
  const [notifTo, setNotifTo] = useState('22:00');
  const [popupNotifications, setPopupNotifications] = useState(true);

  useEffect(() => {
    AsyncStorage.multiGet(['notif_from', 'notif_to']).then(pairs => {
      const from = pairs[0][1];
      const to = pairs[1][1];
      if (from) setNotifFrom(from);
      if (to) setNotifTo(to);
    });
  }, []);

  const handleFromPress = () => {
    Alert.alert('Выберите время', undefined, [
      ...TIME_OPTIONS.map(t => ({
        text: t,
        onPress: () => {
          setNotifFrom(t);
          AsyncStorage.setItem('notif_from', t);
        },
      })),
      { text: 'Отмена', style: 'cancel' },
    ]);
  };

  const handleToPress = () => {
    Alert.alert('Выберите время', undefined, [
      ...TIME_OPTIONS.map(t => ({
        text: t,
        onPress: () => {
          setNotifTo(t);
          AsyncStorage.setItem('notif_to', t);
        },
      })),
      { text: 'Отмена', style: 'cancel' },
    ]);
  };

  return (
    <ScrollView
      style={notificationSettingsStyles.scrollView}
      contentContainerStyle={notificationSettingsStyles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={notificationSettingsStyles.section}>
        <View style={notificationSettingsStyles.slideWrapper}>
          <SlideBtn
            title="Тихий режим"
            description="Звуковые уведомления будут заменены на вибрацию"
            checked={silentMode}
            onValueChange={setSilentMode}
          />
        </View>
        <View style={notificationSettingsStyles.divider} />
        <View style={notificationSettingsStyles.slideWrapper}>
          <SlideBtn
            title="Уведомления по Email"
            description="Выбрать какие уведомления будут приходить на ваш Email"
            checked={emailNotifications}
            onValueChange={setEmailNotifications}
          />
        </View>
        <View style={notificationSettingsStyles.divider} />
        <View style={notificationSettingsStyles.slideWrapper}>
          <View style={notificationSettingsStyles.timeRangeRow}>
            <CustomText
              value="Получать уведомления с "
              textStyles={{
                fontStyle: FontStyleEnum.NORMAL,
                fontWeight: FontWeightEnum.MEDIUM,
                fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
                fontSize: 14,
                color: '#2D2D2D',
              }}
            />
            <Pressable onPress={handleFromPress}>
              <CustomText
                value={notifFrom}
                textStyles={{
                  fontStyle: FontStyleEnum.NORMAL,
                  fontWeight: FontWeightEnum.MEDIUM,
                  fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
                  fontSize: 14,
                  color: '#0E7C7B',
                }}
              />
            </Pressable>
            <CustomText
              value=" до "
              textStyles={{
                fontStyle: FontStyleEnum.NORMAL,
                fontWeight: FontWeightEnum.MEDIUM,
                fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
                fontSize: 14,
                color: '#2D2D2D',
              }}
            />
            <Pressable onPress={handleToPress}>
              <CustomText
                value={notifTo}
                textStyles={{
                  fontStyle: FontStyleEnum.NORMAL,
                  fontWeight: FontWeightEnum.MEDIUM,
                  fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
                  fontSize: 14,
                  color: '#0E7C7B',
                }}
              />
            </Pressable>
          </View>
        </View>
        <View style={notificationSettingsStyles.divider} />
        <View style={notificationSettingsStyles.slideWrapper}>
          <SlideBtn
            title="Всплывающие уведомления"
            checked={popupNotifications}
            onValueChange={setPopupNotifications}
          />
        </View>
      </View>

      <View style={notificationSettingsStyles.sectionSeparator} />

      <View style={notificationSettingsStyles.templateSection}>
        <Pressable
          style={notificationSettingsStyles.templateLink}
          onPress={onNavigateTemplates}
        >
          <CustomText
            value="Текстовые шаблоны уведомлений..."
            textStyles={{
              fontStyle: FontStyleEnum.NORMAL,
              fontWeight: FontWeightEnum.MEDIUM,
              fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
              fontSize: 14,
              color: '#0E7C7B',
            }}
          />
          <CustomText
            value="Настройте текстовые шаблоны уведомлений для ваших пациентов"
            textStyles={{
              fontStyle: FontStyleEnum.NORMAL,
              fontWeight: FontWeightEnum.MEDIUM,
              fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
              fontSize: 12,
              color: '#838383',
            }}
          />
        </Pressable>
        {emailNotifications && (
          <Pressable
            style={notificationSettingsStyles.templateLink}
            onPress={onNavigateEmailSettings}
          >
            <CustomText
              value="Настроить Email уведомления..."
              textStyles={{
                fontStyle: FontStyleEnum.NORMAL,
                fontWeight: FontWeightEnum.MEDIUM,
                fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
                fontSize: 14,
                color: '#0E7C7B',
              }}
            />
            <CustomText
              value="Выбрать какие уведомления будут приходить на ваш Email"
              textStyles={{
                fontStyle: FontStyleEnum.NORMAL,
                fontWeight: FontWeightEnum.MEDIUM,
                fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
                fontSize: 12,
                color: '#838383',
              }}
            />
          </Pressable>
        )}
      </View>
    </ScrollView>
  );
};
