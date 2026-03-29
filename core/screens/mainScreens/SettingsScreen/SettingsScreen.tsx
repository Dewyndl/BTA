import React from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Settings } from '../../../components';
import { MainWrapper } from '../../../wrappers';
import { clearCurrentUser } from '../../../../features/store/entities/user/user.slice';
import type { MainStackParamList } from '../../../../app';

type SettingsScreenName =
  | 'NotificationSettings'
  | 'ReminderIntervals'
  | 'ConfirmationCode'
  | 'Support'
  | 'Feedback'
  | 'About';

export const SettingsScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const handleNavigate = (screen: string) => {
    const name = screen as SettingsScreenName;
    if (name === 'NotificationSettings') navigation.navigate('NotificationSettings');
    else if (name === 'ReminderIntervals') navigation.navigate('ReminderIntervals');
    else if (name === 'ConfirmationCode') navigation.navigate('ConfirmationCode');
    else if (name === 'Support') navigation.navigate('Support');
    else if (name === 'About') navigation.navigate('About');
    // Feedback: no route yet, could add later
  };

  const handleLogoutConfirm = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('u_hash');
    await AsyncStorage.removeItem('u_a_role');
    dispatch(clearCurrentUser());
  };

  const handleDeleteAccount = () => {
    navigation.navigate('AccountDeletion');
  };

  return (
    <MainWrapper title="Настройки" back={() => navigation.goBack()}>
      <Settings
        onNavigate={handleNavigate}
        onLogoutConfirm={handleLogoutConfirm}
        onDeleteAccount={handleDeleteAccount}
      />
    </MainWrapper>
  );
};
