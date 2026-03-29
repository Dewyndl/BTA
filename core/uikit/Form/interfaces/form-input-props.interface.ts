import type { Mask } from 'react-native-mask-input';
import type { InputTextTypesEnum } from '../../InputText/enums';

export interface IFormInputProps {
  name: string;
  defaultValue?: string;
  placeholder?: string;
  textInputType: InputTextTypesEnum;
  mask?: Mask;
  centerText?: boolean;
  filter?: (text: string) => string;
}
