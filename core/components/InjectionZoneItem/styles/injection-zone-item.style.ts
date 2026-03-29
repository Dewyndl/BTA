import { StyleSheet } from "react-native";

export const injectionZoneItemStyles = StyleSheet.create({
    container: {
       width: '48%',
       position: 'relative',
    },
    isSelectedContainer: {
        borderWidth: 2,
        borderColor: '#56B5B3',
        borderRadius: 18,
    },
    img: {
        borderRadius: 14,
        width: '100%',
        height: 120,
    },
    titleContainer: {
        position: 'absolute',
        bottom: 5,
        left: 5,
        width: '94%',
        paddingVertical: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 14,
    },
    isSelectedTitleContainer: {
        backgroundColor: 'rgba(86, 181, 179, 0.8)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.6)',
    },

    checkboxContainer: {
        position: 'absolute',
        top: 5,
        right: 5,
        width: 16,
        height: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        backgroundColor: '#56B5B3',
    },
})