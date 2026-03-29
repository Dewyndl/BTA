import React from 'react';
import { FollowUpAppointment } from '../../../components';
import { MainWrapper } from '../../../wrappers';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { MainStackParamList } from '../../../../app/navigations/MainNavigator/types/main-stack-param-list.type';
import { View } from 'react-native';

export const FollowUpAppointmentScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  return (
    <MainWrapper title="Повторный приём" back={() => navigation.goBack()}>
      <FollowUpAppointment />
    </MainWrapper>
  );
};
