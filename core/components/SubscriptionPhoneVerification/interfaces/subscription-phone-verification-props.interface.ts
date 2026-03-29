export type SubscriptionVerificationStep = 'confirm_phone' | 'enter_code';

export interface ISubscriptionPhoneVerificationProps {
  phone: string;
  step: SubscriptionVerificationStep;
  code: string;
  onCodeChange: (value: string) => void;
  onConfirmPhone: () => void;
  onCancel: () => void;
  onConfirmCode: () => void;
  onEnterAnotherNumber: () => void;
  onCodeNotReceived: () => void;
}
