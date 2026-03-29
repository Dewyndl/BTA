import { ColorValue } from "react-native";

export interface IGradient {
    colors: [ColorValue, ColorValue, ...ColorValue[]]
    start: { x: number; y: number }
    end: { x: number; y: number }
    rotate: number
}