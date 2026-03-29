import { StyleSheet } from "react-native";
import { FontFamily } from "../enums";
import { ITextStyles } from "../interfaces";

export const generateTextStyles = ({
    fontFamily,
    fontSize,
    fontStyle,
    fontWeight,
    color,
    textDecorationLine,
    textAlign
}: ITextStyles) => {
    return StyleSheet.create({
        text: {
            fontFamily: FontFamily[fontFamily],
            fontSize,
            fontStyle,
            fontWeight,
            color,
            textDecorationLine,
            textAlign
        }
    })
}