import React from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ReminderIntervals } from '../../../components';
import { MainWrapper } from '../../../wrappers';
import type { MainStackParamList } from '../../../../app';

export const ReminderIntervalsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  return (
    <MainWrapper
      title="Интервалы напоминания"
      back={() => navigation.goBack()}
    >
      <ReminderIntervals />
    </MainWrapper>
  );
};
