import type { StyleProp, TextStyle } from 'react-native';
import type { FontPresetKey } from '../presets';
import type { TextAlignType } from '../types';
import type { ITextStyles } from './text-styles.interface';

type CustomTextPropsWithPreset = {
  value: string;
  numberOfLines?: number;
  textStyles?: never;
  variant: FontPresetKey;
  fontSize: number;
  color: string;
  textAlign?: TextAlignType;
  customTextStyle?: StyleProp<TextStyle>;
};

type CustomTextPropsWithFullStyles = {
  value: string;
  numberOfLines?: number;
  textStyles: ITextStyles;
  variant?: never;
  fontSize?: never;
  color?: never;
  textAlign?: never;
  customTextStyle?: StyleProp<TextStyle>;
};

export type ICustomTextProps = CustomTextPropsWithPreset | CustomTextPropsWithFullStyles;
