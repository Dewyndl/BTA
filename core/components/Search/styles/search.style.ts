import { StyleSheet } from "react-native";
import { generateTextStyles } from "../../../uikit/CustomText/styles";
import { FontsFamilyEnum, FontStyleEnum, FontWeightEnum } from "../../../uikit";

export const searchStyles = StyleSheet.create({
    section: {
        gap: 20
    },
    list: {
        gap: 10
    },
    container: {
        paddingLeft: 20,
        height: 44,
        borderWidth: 1,
        borderColor: '#979797',
        backgroundColor:'#FFF',
        borderRadius: 64,
        gap: 8
    },
    input: {
        width: '78%',
        ...generateTextStyles({
            fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
            fontSize: 12,
            fontStyle: FontStyleEnum.NORMAL,
            fontWeight: FontWeightEnum.MEDIUM,
            color: '#222221'
        })
    },
    button: {
        width: 24,
        height: 24,
        marginTop: 4
    }
})