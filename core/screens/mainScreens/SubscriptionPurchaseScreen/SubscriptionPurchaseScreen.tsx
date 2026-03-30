import React, { useCallback, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SubscriptionPurchase } from '../../../components';
import type { ISubscriptionPlan, SubscriptionPurchaseStep } from '../../../components';
import { MainWrapper } from '../../../wrappers';
import type { MainStackParamList } from '../../../../app';
import { SUBSCRIPTION_PLANS } from './constants';
import { useGetSubscriptionQuery, useCreateSubscriptionMutation } from '../../../../features/store/entities/subscription';
import { useSelector } from 'react-redux';
import { selectUsers } from '../../../../features/store/entities/user';

const formatEndDate = (timestamp: string): string => {
  const ts = Number(timestamp);
  if (!ts || ts < 100000) return '';
  const date = new Date(ts * 1000);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear()).slice(2);
  return `${day}.${month}.${year}`;
};

export const SubscriptionPurchaseScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const { currentUser } = useSelector(selectUsers);

  const [step, setStep] = useState<SubscriptionPurchaseStep>('plan_selection');
  const [selectedPlan, setSelectedPlan] = useState<ISubscriptionPlan | null>(null);

  const { data: subscriptions = [] } = useGetSubscriptionQuery();
  const [createSubscription] = useCreateSubscriptionMutation();

  const activeSubscription = useMemo(() => {
    if (!currentUser) return null;
    return subscriptions.find(
      (s) => s.u_id === currentUser.u_id && s.paid && s.subs_status === '1',
    ) ?? null;
  }, [subscriptions, currentUser]);

  const subscriptionEndDate = useMemo(() => {
    if (!activeSubscription) return '';
    return formatEndDate(activeSubscription.end_date);
  }, [activeSubscription]);

  const handleSelectPlan = useCallback((plan: ISubscriptionPlan) => {
    setSelectedPlan(plan);
    setStep('payment_method');
  }, []);

  const handlePay = useCallback(async () => {
    if (step === 'payment_error' || !selectedPlan) return;
    try {
      await createSubscription({ tariff: selectedPlan.tariffId }).unwrap();
      setStep('payment_success');
    } catch {
      setStep('payment_error');
    }
  }, [step, selectedPlan, createSubscription]);

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
        subscriptionExtendedUntil={subscriptionEndDate}
        onSelectPlan={handleSelectPlan}
        onPay={handlePay}
        onOkSuccess={handleOkSuccess}
      />
    </MainWrapper>
  );
};
