import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { pageStyle } from '../../../design';
import { Header, Login } from '../../../components';
import type { ILoginScreenProps } from './interfaces';

export const LoginScreen = ({ navigation }: ILoginScreenProps) => {
  return (
    <SafeAreaView style={pageStyle.page} edges={['top', 'left', 'right', 'bottom']}>
      <Header
        backClick={() => navigation.goBack()}
        title="Авторизация"
      />
      <View style={pageStyle.flex1}>
        <Login onHelpPress={() => navigation.navigate('LoginHelp')} />
      </View>
    </SafeAreaView>
  );
};