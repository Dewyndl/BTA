import { StyleSheet } from "react-native";

export const confirmTypeStepStyles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        flex: 1,
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: 50
    },
    title: {
        marginVertical: 12,
        maxWidth: 270
    },
    item: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#BEBEBE',
        borderRadius: 12,
        height: 40,
        gap: 10
    },
    rememberContainer: {
        height: 40,
    },
    itemsContainer: {
        gap: 6,
        marginBottom: 26
    },
    buttonsContainer: {
        flex: 1,
        gap: 10
    },

    checkbox: {
        borderWidth: 1,
        borderColor: '#BEBEBE',
        height: 24,
    },
    button: {
        width: '100%',
    }
})