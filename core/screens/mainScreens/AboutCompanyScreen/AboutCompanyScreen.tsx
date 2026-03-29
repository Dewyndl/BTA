import React from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AboutCompany } from '../../../components';
import { MainWrapper } from '../../../wrappers';
import type { MainStackParamList } from '../../../../app';
import { ABOUT_COMPANY_TITLE } from '../../../components/AboutCompany/constants';

export const AboutCompanyScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  return (
    <MainWrapper
      title="О приложении"
      subtitle={ABOUT_COMPANY_TITLE}
      back={() => navigation.goBack()}
    >
      <AboutCompany />
    </MainWrapper>
  );
};
