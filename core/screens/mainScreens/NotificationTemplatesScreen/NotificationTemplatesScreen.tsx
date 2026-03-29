import React from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TextNotificationTemplates } from '../../../components';
import { MainWrapper } from '../../../wrappers';
import type { MainStackParamList } from '../../../../app';

export const NotificationTemplatesScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  return (
    <MainWrapper
      title="Настройки уведомлений"
      subtitle="Текстовые шаблоны уведомлений"
      back={() => navigation.goBack()}
    >
      <TextNotificationTemplates />
    </MainWrapper>
  );
};
