import { StyleSheet } from 'react-native';
import { palette } from '../../../design';

export const menuItemStyles = StyleSheet.create({
    container: {
        backgroundColor: palette.white,
        borderRadius: 18,
        paddingTop: 13,
        paddingBottom: 16,
        flex: 3,
        minWidth: 108
    },
    box: {
        gap: 8,
        paddingHorizontal: 10
    },
    icon: {
        paddingBottom: 7
    }
})