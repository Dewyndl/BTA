import { StyleSheet } from 'react-native';
import { palette } from '../../../design';

export const slideBtnStyle = StyleSheet.create({
    container: {
        gap: 10,
    },

    checkbox: {
        width: 40,
        height: 22,
        padding: 2,
        position: 'relative',
        borderRadius: 99,
        backgroundColor: palette.background,
    },

    checkboxActive: {
        backgroundColor: palette.tealLight,
    },

    checkboxCircle: {
        width: 18,
        height: 18,
        borderRadius: '50%',
        backgroundColor: palette.white,
        position: 'absolute',
        left: 2,
        top: 2
    },
    checkboxCircleActive: {
        left: 20
    }
})