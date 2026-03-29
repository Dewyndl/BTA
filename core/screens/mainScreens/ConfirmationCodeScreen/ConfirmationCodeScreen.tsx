import React from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ConfirmationCodeSettings } from '../../../components';
import { MainWrapper } from '../../../wrappers';
import type { MainStackParamList } from '../../../../app';

export const ConfirmationCodeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  return (
    <MainWrapper title="Код подтверждения" back={() => navigation.goBack()}>
      <ConfirmationCodeSettings />
    </MainWrapper>
  );
};
