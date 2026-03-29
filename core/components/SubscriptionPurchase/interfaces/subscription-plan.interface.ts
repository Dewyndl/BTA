import type { ImageSourcePropType } from 'react-native';

export interface ISubscriptionPlan {
  id: string;
  price: number;
  months: number;
  badge?: string; // e.g. "Экономия 200 руб. за месяц"
  icon: ImageSourcePropType;
}
