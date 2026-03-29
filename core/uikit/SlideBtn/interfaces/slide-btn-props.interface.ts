import { ViewStyle } from 'react-native';

export interface ISlideBtnProps {
  title: string;
  customStyles?: ViewStyle | ViewStyle[];
  thumbColor?: string;
  checked?: boolean;
  onValueChange?: (value: boolean) => void;
  description?: string;
}