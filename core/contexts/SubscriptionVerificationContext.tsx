import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@bta/subscription_verification_completed';

type SubscriptionVerificationContextValue = {
  verificationCompleted: boolean;
  setVerificationCompleted: (value: boolean) => void;
};

const SubscriptionVerificationContext = createContext<
  SubscriptionVerificationContextValue | undefined
>(undefined);

export const SubscriptionVerificationProvider = ({
  children,
}: { children: React.ReactNode }) => {
  const [verificationCompleted, setVerificationCompletedState] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((value) => {
      setVerificationCompletedState(value === 'true');
      setIsHydrated(true);
    });
  }, []);

  const setVerificationCompleted = useCallback((value: boolean) => {
    setVerificationCompletedState(value);
    AsyncStorage.setItem(STORAGE_KEY, value ? 'true' : 'false');
  }, []);

  const value =
    isHydrated
      ? { verificationCompleted, setVerificationCompleted }
      : { verificationCompleted: false, setVerificationCompleted };

  return (
    <SubscriptionVerificationContext.Provider value={value}>
      {children}
    </SubscriptionVerificationContext.Provider>
  );
};

export const useSubscriptionVerification = (): SubscriptionVerificationContextValue => {
  const ctx = useContext(SubscriptionVerificationContext);
  if (ctx === undefined) {
    throw new Error(
      'useSubscriptionVerification must be used within SubscriptionVerificationProvider'
    );
  }
  return ctx;
};
