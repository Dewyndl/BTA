import React, { useCallback, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import { SubscriptionEmailVerification } from '../../../components';
import type { EmailVerificationStep } from '../../../components';
import { MainWrapper } from '../../../wrappers';
import { useSubscriptionVerification } from '../../../contexts';
import type { MainStackParamList } from '../../../../app';
import { validateEmail } from '../../../components/SubscriptionEmailVerification/helpers';

export const SubscriptionEmailScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const route = useRoute<RouteProp<MainStackParamList, 'SubscriptionEmail'>>();
  const { setVerificationCompleted } = useSubscriptionVerification();
  const verifiedEmail = route.params?.verifiedEmail;

  const [step, setStep] = useState<EmailVerificationStep>(
    verifiedEmail ? 'connected' : 'initial'
  );
  const [email, setEmail] = useState(verifiedEmail ?? '');

  const handleConfirm = useCallback(() => {
    const trimmed = email.trim();
    if (!validateEmail(trimmed)) {
      setStep('error_invalid');
      return;
    }
    setEmail(trimmed);
    setStep('link_sent');
    setVerificationCompleted(true);
  }, [email, setVerificationCompleted]);

  const handleSave = useCallback(() => {
    navigation.navigate('Profile');
  }, [navigation]);

  const handleResendEmail = useCallback(() => {
    if (step === 'link_sent') {
      setStep('link_expired');
      setEmail('');
    }
    // TODO: resend activation email when on link_expired
  }, [step]);

  const handleBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <MainWrapper
      title="Мой профиль"
      subtitle="Email аккаунта"
      back={handleBack}
    >
      <SubscriptionEmailVerification
        step={step}
        email={email}
        onEmailChange={(value) => {
          setEmail(value);
          if (step === 'error_invalid') setStep('initial');
        }}
        onConfirm={handleConfirm}
        onSave={handleSave}
        onResendEmail={handleResendEmail}
      />
    </MainWrapper>
  );
};
