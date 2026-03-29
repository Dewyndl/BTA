import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SubscriptionPurchase } from '../../../components';
import type { ISubscriptionPlan, SubscriptionPurchaseStep } from '../../../components';
import { MainWrapper } from '../../../wrappers';
import type { MainStackParamList } from '../../../../app';
import { SUBSCRIPTION_PLANS } from './constants';

const MOCK_EXTENDED_UNTIL = '12.10.26';

export const SubscriptionPurchaseScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const [step, setStep] = useState<SubscriptionPurchaseStep>('plan_selection');
  const [selectedPlan, setSelectedPlan] = useState<ISubscriptionPlan | null>(null);

  const handleSelectPlan = useCallback((plan: ISubscriptionPlan) => {
    setSelectedPlan(plan);
    setStep('payment_method');
  }, []);

  const handlePay = useCallback(() => {
    if (step === 'payment_error') return;
    // Mock: 70% success, 30% error
    const success = Math.random() > 0.3;
    setStep(success ? 'payment_success' : 'payment_error');
  }, [step]);

  const handleOkSuccess = useCallback(() => {
    navigation.navigate('Profile');
  }, [navigation]);

  const handleBack = useCallback(() => {
    if (step === 'plan_selection') {
      navigation.goBack();
      return;
    }
    if (step === 'payment_method' || step === 'payment_error') {
      setStep('plan_selection');
      setSelectedPlan(null);
      return;
    }
    if (step === 'payment_success') {
      navigation.navigate('Profile');
    }
  }, [step, navigation]);

  return (
    <MainWrapper title="Мой профиль" back={handleBack}>
      <SubscriptionPurchase
        plans={SUBSCRIPTION_PLANS}
        step={step}
        selectedPlan={selectedPlan}
        subscriptionExtendedUntil={MOCK_EXTENDED_UNTIL}
        onSelectPlan={handleSelectPlan}
        onPay={handlePay}
        onOkSuccess={handleOkSuccess}
      />
    </MainWrapper>
  );
};
