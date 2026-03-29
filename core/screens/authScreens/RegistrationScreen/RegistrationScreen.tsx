import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { pageStyle } from '../../../design';
import { Header, Registration } from '../../../components';
import type { IRegistrationScreenProps } from './interfaces';

export const RegistrationScreen = ({ navigation }: IRegistrationScreenProps) => {
  return (
    <SafeAreaView style={pageStyle.page} edges={['top', 'left', 'right', 'bottom']}>
      <Header
        backClick={() => navigation.goBack()}
        title="Регистрация"
      />
      <View style={pageStyle.flex1}>
        <Registration />
      </View>
    </SafeAreaView>
  );
};
