import { TextStyle, ViewStyle } from "react-native";
import { IGradient } from "../../../design";

export interface IButtonProps {
    label?: string;
    Icon?: React.ReactNode;
    onPress?: () => void;
    customButtonStyles?: ViewStyle | ViewStyle[];
    customGradientStyles?: ViewStyle | ViewStyle[];
    isDisabled?: boolean;
    isLoading?: boolean;
    isFocused?: boolean;
    isActive?: boolean;
    isError?: boolean;
    isSuccess?: boolean;
    gradient?: IGradient;
    textColor?: string;
    maxWidth?: number;
    noFillDefaultStyles?: boolean,
    textCenter?: boolean
}