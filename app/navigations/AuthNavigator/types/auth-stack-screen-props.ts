import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type {
  CompositeScreenProps,
} from "@react-navigation/native";
import { AuthStackParamList, RootStackParamList, RootStackScreenProps } from "../../..";


export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<AuthStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;