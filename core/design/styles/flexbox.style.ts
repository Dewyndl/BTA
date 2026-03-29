import { StyleSheet } from "react-native";

export const flexbox = StyleSheet.create({
    basic: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    alignCenter: {
        alignItems: 'center'
    },
    alignEnd: {
        alignItems: 'flex-end'
    },
    justifyBetween: {
        justifyContent: 'space-between'
    },
    justifyEnd: {
        justifyContent: 'flex-end'
    },
    justifyCenter: {
        justifyContent: 'center'
    },
    directionRow: {
        flexDirection: 'row'
    },
    wrap: {
        flexWrap: 'wrap'
    }
})