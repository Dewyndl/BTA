import React from 'react';
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { About } from '../../../components';
import { MainWrapper } from '../../../wrappers';
import type { MainStackParamList } from '../../../../app';
import type { AboutLinkId } from '../../../components';

export const AboutScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const handleLinkPress = (linkId: AboutLinkId) => {
    if (linkId === 'company') {
      navigation.navigate('AboutCompany');
    } else if (linkId === 'offer') {
      Linking.openURL('https://geoblinker.ru/oferta');
    } else if (linkId === 'privacy') {
      Linking.openURL('https://geoblinker.ru/privacy');
    }
  };

  return (
    <MainWrapper title="О приложении" back={() => navigation.goBack()}>
      <About onLinkPress={handleLinkPress} />
    </MainWrapper>
  );
};
