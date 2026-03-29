import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { palette } from '../../design';
import { flexbox } from '../../design/styles';
import { CustomText } from '../CustomText';
import { ISlideBtnProps } from './interfaces'
import { slideBtnStyle } from './styles'

const SlideBtn = ({
  title,
  customStyles,
  checked,
  thumbColor,
  onValueChange,
  description,
}: ISlideBtnProps) => {
  const isControlled = checked !== undefined;
  const [internalActive, setInternalActive] = useState<boolean>(false);
  const isActive = isControlled ? checked : internalActive;

  const handlePress = () => {
    const newValue = !isActive;
    if (isControlled && onValueChange) {
      onValueChange(newValue);
    } else {
      setInternalActive(newValue);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={[{ flex: 1 }]}>
      <View style={[slideBtnStyle.container, flexbox.justifyBetween, flexbox.alignCenter, flexbox.directionRow]}>
        <View style={{ flex: 1 }}>
          <CustomText
            value={title}
            variant="semibold"
            fontSize={14}
            color={palette.textPrimary}
          />
          {description && (
            <View style={{ marginTop: 4 }}>
              <CustomText
                value={description}
                variant="medium"
                fontSize={12}
                color={palette.placeholder}
              />
            </View>
          )}
        </View>
        <View style={[
          slideBtnStyle.checkbox,
          isActive && slideBtnStyle.checkboxActive,
          customStyles && customStyles
        ]}>
          <View style={[
            slideBtnStyle.checkboxCircle,
            isActive && slideBtnStyle.checkboxCircleActive,
            !isActive && thumbColor && { backgroundColor: thumbColor }
          ]}>

          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SlideBtn