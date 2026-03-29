import type { ISubscriptionPlan } from '../../../components/SubscriptionPurchase';
import { IMAGES } from '../../../../../assets/images';

export const SUBSCRIPTION_PLANS: ISubscriptionPlan[] = [
  {
    id: '1m',
    price: 600,
    months: 1,
    icon: IMAGES.SILVER,
  },
  {
    id: '3m',
    price: 1200,
    months: 3,
    badge: 'Экономия 200 руб. за месяц',
    icon: IMAGES.SILVER,
  },
  {
    id: '12m',
    price: 1900,
    months: 12,
    badge: 'Экономия 400 руб. за месяц',
    icon: IMAGES.GOLD,
  },
];
