import type { ImageSourcePropType } from 'react-native';

export interface ISubscriptionPlan {
  id: string;
  tariffId: string;
  price: number;
  months: number;
  badge?: string;
  icon: ImageSourcePropType;
}
