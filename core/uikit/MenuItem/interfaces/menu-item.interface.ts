import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainStackParamList, MainStackScreenProps } from "../../../../app";

export interface IMenuItem {
    title: string;
    Icon: React.ReactNode;
    href: keyof MainStackParamList
}