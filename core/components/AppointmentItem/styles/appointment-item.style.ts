import { StyleSheet } from "react-native";

export const appointmentItemStyles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 5,
        borderRadius: 18,
        backgroundColor: '#fff',
        gap: 16,
        paddingRight: 16,
    },
    imgContainer: {
        minWidth: 55,
        width: 55
    },
    img: {
        borderRadius: 14
    },
    textContainer: {
        flex: 1,
        gap: 6
    }
})