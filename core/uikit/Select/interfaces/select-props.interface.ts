import { ViewStyle } from 'react-native';
import { ISelectOption } from './select-option.interface';

export interface ISelectProps {
  options: ISelectOption[];
  value: string;
  onChange: (value: string, name?: string) => void;
  selectName?: string;
  placeholder?: string;
  error?: string;
  containerStyle?: ViewStyle | ViewStyle[];
}
