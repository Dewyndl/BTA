import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveMockUser } from '../../../../../common';
import { createFakeUser } from '../fakers';
import type { IUser } from '../interfaces';
import { fillUser } from '../user.slice';

const LOGIN_DELAY_MS = 2000;

export type LoginStep = 'phone' | 'code';

export type UseLoginReturn = {
  step: LoginStep;
  isSuccess: boolean;
  generatedUser: IUser | null;
  handlePhoneSubmit: () => void;
  handleCodeSubmit: () => void;
  handleBackToPhone: () => void;
  setStep: (step: LoginStep) => void;
  setIsSuccess: (value: boolean) => void;
};

export const useLogin = (): UseLoginReturn => {
  const [step, setStep] = useState<LoginStep>('phone');
  const [isSuccess, setIsSuccess] = useState(false);
  const [generatedUser, setGeneratedUser] = useState<IUser | null>(null);
  const dispatch = useDispatch();

  const handlePhoneSubmit = useCallback(() => {
    setStep('code');
  }, []);

  const handleCodeSubmit = useCallback(async () => {
    const user = createFakeUser();
    try {
      await saveMockUser(user);
      setGeneratedUser(user);
      setTimeout(() => {
        dispatch(fillUser(user));
        setIsSuccess(true);
      }, LOGIN_DELAY_MS);
    } catch {
      // Handle error if needed
    }
  }, [dispatch]);

  const handleBackToPhone = useCallback(() => {
    setStep('phone');
  }, []);

  return {
    step,
    isSuccess,
    generatedUser,
    handlePhoneSubmit,
    handleCodeSubmit,
    handleBackToPhone,
    setStep,
    setIsSuccess,
  };
};
