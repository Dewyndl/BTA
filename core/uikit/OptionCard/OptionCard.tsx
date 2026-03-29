import React from 'react';
import { Pressable, View } from 'react-native';
import { palette } from '../../design';
import { CustomText } from '../CustomText';
import type { IOptionCardProps } from './interfaces';
import { optionCardStyles } from './styles';

export const OptionCard = ({
  icon,
  label,
  isSelected = false,
  onPress,
}: IOptionCardProps) => {
  return (
    <Pressable
      style={[
        optionCardStyles.container,
        isSelected && optionCardStyles.containerSelected,
      ]}
      onPress={onPress}
    >
      <View style={optionCardStyles.iconWrapper}>{icon}</View>
      <View style={optionCardStyles.label}>
        <CustomText
          value={label}
          variant="regular"
          fontSize={16}
          color={palette.textPrimary}
        />
      </View>
    </Pressable>
  );
};
