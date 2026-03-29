import React, { useCallback, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import { SubscriptionPhoneVerification } from '../../../components';
import type { SubscriptionVerificationStep } from '../../../components';
import { MainWrapper } from '../../../wrappers';
import type { MainStackParamList } from '../../../../app';

export const BuySubscriptionScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const route = useRoute<RouteProp<MainStackParamList, 'BuySubscription'>>();
  const phone = route.params?.phone ?? '+7 (988) 700-00-00';

  const [step, setStep] = useState<SubscriptionVerificationStep>('confirm_phone');
  const [code, setCode] = useState('');

  const handleConfirmPhone = useCallback(() => {
    setStep('enter_code');
    setCode('');
  }, []);

  const handleCancel = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleEnterAnotherNumber = useCallback(() => {
    setStep('confirm_phone');
    setCode('');
  }, []);

  const handleConfirmCode = useCallback(() => {
    navigation.navigate('SubscriptionEmail');
  }, [navigation]);

  const handleCodeNotReceived = useCallback(() => {
    // TODO: resend SMS
  }, []);

  return (
    <MainWrapper title="Мой профиль" back={handleCancel}>
      <SubscriptionPhoneVerification
        phone={phone}
        step={step}
        code={code}
        onCodeChange={setCode}
        onConfirmPhone={handleConfirmPhone}
        onCancel={handleCancel}
        onConfirmCode={handleConfirmCode}
        onEnterAnotherNumber={handleEnterAnotherNumber}
        onCodeNotReceived={handleCodeNotReceived}
      />
    </MainWrapper>
  );
};
