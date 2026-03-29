import React from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { EmailNotificationSettings } from '../../../components';
import { MainWrapper } from '../../../wrappers';
import type { MainStackParamList } from '../../../../app';

export const EmailNotificationSettingsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  return (
    <MainWrapper
      title="Настройки уведомлений"
      back={() => navigation.goBack()}
    >
      <EmailNotificationSettings />
    </MainWrapper>
  );
};
