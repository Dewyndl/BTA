export type EmailVerificationStep =
  | 'initial'
  | 'error_invalid'
  | 'link_sent'
  | 'link_expired'
  | 'connected';

export interface ISubscriptionEmailVerificationProps {
  step: EmailVerificationStep;
  email: string;
  onEmailChange: (value: string) => void;
  onConfirm: () => void;
  onSave: () => void;
  onResendEmail: () => void;
}
