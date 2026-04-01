import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { AboutCompany } from '../../../components';
import { MainWrapper } from '../../../wrappers';
import type { MainStackParamList } from '../../../../app';
import { ABOUT_COMPANY_TITLE, ABOUT_COMPANY_BODY } from '../../../components/AboutCompany/constants';

export const AboutCompanyScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const route = useRoute<NativeStackScreenProps<MainStackParamList, 'AboutCompany'>['route']>();
  const params = route.params;

  const title = params?.title ?? ABOUT_COMPANY_TITLE;
  const body = params?.body ?? ABOUT_COMPANY_BODY;

  return (
    <MainWrapper
      title={title}
      back={() => navigation.goBack()}
    >
      <AboutCompany body={body} />
    </MainWrapper>
  );
};
