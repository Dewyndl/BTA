import { StyleSheet } from "react-native";

export const appointmentProcedureStyles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        flex: 1,
        alignItems: 'center',
        width: '100%',
        paddingBottom: 40,
    },
    titleContainer: {
        marginBottom: 140,
        gap: 10,
        maxWidth: 210
    },
    title: {
        marginVertical: 12,
        maxWidth: 270
    },
    procedureContainer: {
        gap: 10,
        width: '100%',
    },
    selectedProcedure: {
        paddingVertical: 18,
        borderTopWidth: 1,
        borderColor: '#C3C3C3',
    },
    selectedProcedureTitle: {
        paddingVertical: 18,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#C3C3C3',
    },
    proceduresList: {
        flex: 1,
    },
    procedureItem: {
        paddingVertical: 18,
        borderBottomWidth: 1,
        borderColor: '#C3C3C3',
    }
})