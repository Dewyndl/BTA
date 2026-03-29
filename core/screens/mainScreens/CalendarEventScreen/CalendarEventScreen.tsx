import React from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CalendarEvent } from '../../../components';
import { MainWrapper } from '../../../wrappers';
import type { MainStackParamList } from '../../../../app';

export const CalendarEventScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  return (
    <MainWrapper title="Мероприятие" back={() => navigation.goBack()}>
      <CalendarEvent />
    </MainWrapper>
  );
};
