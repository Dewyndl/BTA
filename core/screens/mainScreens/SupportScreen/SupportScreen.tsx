import React from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Support } from '../../../components';
import { MainWrapper } from '../../../wrappers';
import type { MainStackParamList } from '../../../../app';

export const SupportScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  return (
    <MainWrapper title="Техподдержка" back={() => navigation.goBack()}>
      <Support onFaqPress={(questionId) => navigation.navigate('FaqDetail', { questionId })} />
    </MainWrapper>
  );
};
