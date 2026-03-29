import { StyleSheet } from "react-native";

export const privacyStepStyles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        flex: 1,
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: 76,
        marginTop: 40,
        gap: 20
    },
    title: {
        marginVertical: 12,
        maxWidth: 270
    },
    buttonsContainer: {
        marginTop: 50
    },
    checkboxesContainer: {
        gap: 20
    }
})