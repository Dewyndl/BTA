import React from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NotificationSettings } from '../../../components';
import { MainWrapper } from '../../../wrappers';
import type { MainStackParamList } from '../../../../app';

export const NotificationSettingsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const handleTemplatesPress = () => {
    navigation.navigate('NotificationTemplates');
  };

  const handleEmailSettingsPress = () => {
    navigation.navigate('EmailNotificationSettings');
  };

  return (
    <MainWrapper
      title="Настройки уведомлений"
      back={() => navigation.goBack()}
    >
      <NotificationSettings
        onNavigateTemplates={handleTemplatesPress}
        onNavigateEmailSettings={handleEmailSettingsPress}
      />
    </MainWrapper>
  );
};
