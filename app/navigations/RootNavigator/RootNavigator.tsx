import { useEffect, useRef, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from './types';
import { AuthNavigator } from '../AuthNavigator';
import { MainNavigator } from '../MainNavigator';
import { useSelector } from 'react-redux';
import { selectUsers, useGetStoragedUserMutation } from '../../../features';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SplashScreen } from '../../../core';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const { currentUser, pendingToken } = useSelector(selectUsers);
  const [isInitializing, setIsInitializing] = useState(true);
  const [getStoragedUser] = useGetStoragedUserMutation();
  const initDoneRef = useRef(false);

  useEffect(() => {
    if (initDoneRef.current) return;
    initDoneRef.current = true;

    const init = async () => {
      const token = await AsyncStorage.getItem('token');
      const u_hash = await AsyncStorage.getItem('u_hash');

      if (token && u_hash) {
        try {
          await getStoragedUser();
        } catch {
          // ignore – will fall through to Auth screen
        }
      }
      setIsInitializing(false);
    };

    init();
  }, []);

  if (isInitializing) {
    return <SplashScreen />;
  }

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {(currentUser && !pendingToken) ? <RootStack.Screen name="Main" component={MainNavigator} /> : <RootStack.Screen name="Auth" component={AuthNavigator} />}
    </RootStack.Navigator>
  );
};