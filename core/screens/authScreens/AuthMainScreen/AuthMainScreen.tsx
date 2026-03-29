import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { pageStyle } from '../../../design';
import { AutMain } from '../../../components';
import type { IAuthMainScreenProps } from './interfaces';

export const AuthMainScreen = ({ navigation }: IAuthMainScreenProps) => {
  return (
    <SafeAreaView style={pageStyle.page} edges={['top', 'left', 'right', 'bottom']}>
      <View style={pageStyle.flex1}>
        <AutMain
          pressLogin={() => navigation.navigate('Login')}
          pressRegister={() => navigation.navigate('Registration')}
          pressHelp={() => navigation.navigate('LoginHelp')}
        />
      </View>
    </SafeAreaView>
  );
};
