import type { ReactNode } from 'react';

export interface IOptionCardProps {
  icon: ReactNode;
  label: string;
  isSelected?: boolean;
  onPress: () => void;
}
