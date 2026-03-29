
import { Pressable, Text, View } from 'react-native';
import { IButtonProps } from './interfaces';
import { buttonStyle } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { palette } from '../../design';
import { CustomText } from '../CustomText';

export default function Button({
    label,
    onPress,
    customButtonStyles,
    customGradientStyles,
    isDisabled,
    isLoading,
    Icon,
    gradient,
    textColor,
    noFillDefaultStyles,
    maxWidth,
    textCenter
}: IButtonProps) {
    const disabled = !!(isDisabled || isLoading);

    return (
        <Pressable
            disabled={disabled}
            onPress={onPress}
            style={buttonStyle.pressableReset}
        >
            <View style={[
                !noFillDefaultStyles && buttonStyle.button,
                customButtonStyles,
                maxWidth !== undefined && { maxWidth }
            ]}>
                {
                    gradient && (
                        <LinearGradient
                            colors={gradient.colors}
                            start={gradient.start}
                            end={gradient.end}
                            style={[buttonStyle.gradientOverlay, customGradientStyles]}
                            pointerEvents="none"
                        />
                    )
                }
                {
                    Icon && Icon
                }
                {label && (
                    <CustomText
                        value={label}
                        variant="medium"
                        fontSize={14}
                        color={textColor ?? palette.textSecondary}
                        textAlign={textCenter ? 'center' : 'left'}
                    />
                )}
                
            </View>
        </Pressable>
    );
};