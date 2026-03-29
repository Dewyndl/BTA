import type { ISubscriptionPlan } from './subscription-plan.interface';

export type SubscriptionPurchaseStep =
  | 'plan_selection'
  | 'payment_method'
  | 'payment_error'
  | 'payment_success';

export interface ISubscriptionPurchaseProps {
  plans: ISubscriptionPlan[];
  step: SubscriptionPurchaseStep;
  selectedPlan: ISubscriptionPlan | null;
  subscriptionExtendedUntil: string;
  onSelectPlan: (plan: ISubscriptionPlan) => void;
  onPay: () => void;
  onOkSuccess: () => void;
}
