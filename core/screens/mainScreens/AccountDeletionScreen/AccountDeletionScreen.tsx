import React from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AccountDeletion } from '../../../components';
import { MainWrapper } from '../../../wrappers';
import { palette } from '../../../design';
import type { MainStackParamList } from '../../../../app';

export const AccountDeletionScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const handleDelete = () => {
    // TODO: call API to delete account, then e.g. navigate to Auth
    navigation.getParent()?.goBack();
  };

  return (
    <MainWrapper
      title="Удаление аккаунта"
      back={() => navigation.goBack()}
      titleColor={palette.error}
    >
      <AccountDeletion onDelete={handleDelete} />
    </MainWrapper>
  );
};
