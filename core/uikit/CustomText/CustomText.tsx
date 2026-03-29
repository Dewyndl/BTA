import { Text } from 'react-native';
import type { ICustomTextProps } from './interfaces';
import { fontPresets } from './presets';
import { generateTextStyles } from './styles';

export const CustomText = ({
  value,
  numberOfLines,
  textStyles: rawTextStyles,
  variant,
  fontSize,
  color,
  textAlign,
  customTextStyle,
}: ICustomTextProps) => {
  const textStyles =
    rawTextStyles ??
    (variant && fontSize !== undefined && color
      ? {
          ...fontPresets[variant],
          fontSize,
          color,
          textAlign,
        }
      : undefined);

  if (!textStyles) {
    throw new Error(
      'CustomText: pass either textStyles (full) or variant + fontSize + color'
    );
  }

  const baseStyle = generateTextStyles(textStyles).text;

  return (
    <Text
      style={customTextStyle ? [baseStyle, customTextStyle] : baseStyle}
      numberOfLines={numberOfLines}
    >
      {value}
    </Text>
  );
};

export default CustomText;
