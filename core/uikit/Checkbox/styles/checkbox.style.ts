import { StyleSheet } from 'react-native';
import { palette } from '../../../design';

export const checkboxStyles = StyleSheet.create({
    container: {
        gap: 10,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: palette.sliderThumb,
    },
    checkboxActive: {
        borderColor: palette.tealLight,
    },
    text: {
        width: 268,
    }
})