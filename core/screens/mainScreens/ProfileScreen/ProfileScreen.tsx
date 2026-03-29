import React from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Profile } from '../../../components';
import { MainWrapper } from '../../../wrappers';
import { useSubscriptionVerification } from '../../../contexts';
import type { MainStackParamList } from '../../../../app';

export const ProfileScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const { verificationCompleted } = useSubscriptionVerification();

  const handleBuySubscription = (phone: string) => {
    if (verificationCompleted) {
      navigation.navigate('SubscriptionPurchase');
    } else {
      navigation.navigate('BuySubscription', { phone });
    }
  };

  return (
    <MainWrapper title="Мой профиль" back={() => navigation.goBack()}>
      <Profile onBuySubscription={handleBuySubscription} />
    </MainWrapper>
  );
};
