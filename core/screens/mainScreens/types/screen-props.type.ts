import { MainStackParamList, MainStackScreenProps } from "../../../../app";

export type ScreenProps<T extends keyof MainStackParamList> = MainStackScreenProps<T>