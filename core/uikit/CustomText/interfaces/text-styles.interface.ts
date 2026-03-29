import { FontsFamilyEnum, FontStyleEnum, FontWeightEnum } from "../enums";
import { TextAlignType } from "../types";

export interface ITextStyles {
    fontStyle: FontStyleEnum;
    fontWeight: FontWeightEnum;
    fontFamily: FontsFamilyEnum;
    fontSize: number;
    color: string;
    textDecorationLine?: "none" | "underline" | "line-through" | "underline line-through";
    textAlign?: TextAlignType
}