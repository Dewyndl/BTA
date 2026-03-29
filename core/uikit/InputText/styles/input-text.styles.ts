import { StyleSheet } from 'react-native';
import { FontFamily, FontsFamilyEnum } from '../../CustomText';
import { palette } from '../../../design';

export const inputTextStyles = StyleSheet.create({
    container: {
        height: 60,
        borderRadius: 64,
        borderWidth: 1,
        borderColor: palette.borderMedium,
        paddingHorizontal: 20
    },

    textareaContainer: {
        height: 110,
        alignItems: 'flex-start',
        borderRadius: 24
    },

    textarea: {
        flex: 1,
        minHeight: 80,
        paddingTop: 16,
        paddingBottom: 16,
    },

    centerText: {
        textAlign: 'center',
    },

    text: {
        fontSize: 14,
        fontFamily: FontFamily[FontsFamilyEnum.MONTSERRAT_REGULAR],
        fontStyle: 'normal',
        lineHeight: 17,
        letterSpacing: -0.03,
        color: palette.textPrimary,
    },

    errorContainer: {
        borderColor: palette.error,
    },

    errorText: {
        color: palette.error,
    },
});