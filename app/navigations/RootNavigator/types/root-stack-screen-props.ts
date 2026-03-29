import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./root-stack-param-list.type";

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
