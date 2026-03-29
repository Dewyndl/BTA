import { ImageSourcePropType } from "react-native";

export interface    IInjectionZoneItemProps {
    imageUrl: ImageSourcePropType;
    title: string;
    isSelected: boolean;
    onPress: () => void;
}