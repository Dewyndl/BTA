import { Mask } from "react-native-mask-input";
import { InputTextTypesEnum } from "../enums";

export interface IInputTextProps {
    inputName: string;
    value: string;
    change: (value: string, name: string) => void;
    error?: string;
    textInputType: InputTextTypesEnum;
    blur: () => void;
    placeholder?: string;
    mask?: Mask
    centerText?: boolean
}