import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainStackParamList } from "./main-stack-param-list.type";
import type {
  CompositeScreenProps,
} from "@react-navigation/native";
import { RootStackParamList, RootStackScreenProps } from "../../..";


export type MainStackScreenProps<T extends keyof MainStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<MainStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;