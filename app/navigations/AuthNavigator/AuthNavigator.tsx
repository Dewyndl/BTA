import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from './types';
import {
  AuthMainScreen,
  LoginHelpScreen,
  LoginScreen,
  RegistrationScreen,
} from '../../../core';

const RootStack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => (
  <RootStack.Navigator screenOptions={{ headerShown: false }}>
    <RootStack.Screen name="AuthMain" component={AuthMainScreen} />
    <RootStack.Screen name="Login" component={LoginScreen} />
    <RootStack.Screen name="LoginHelp" component={LoginHelpScreen} />
    <RootStack.Screen name="Registration" component={RegistrationScreen} />
  </RootStack.Navigator>
);