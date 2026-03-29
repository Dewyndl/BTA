import { ColorValue } from "react-native";
import { EGradientColorsType } from "../enums";

export function getGradientColors(type: EGradientColorsType): readonly [ColorValue, ColorValue, ...ColorValue[]] {
  switch (type) {
    case EGradientColorsType.GREEN:
      // #12C089 с 30% прозрачности сверху, #12C089 снизу
      return ["rgba(18, 192, 137, 0.3)", "rgba(18, 192, 137, 1.0)"];
    case EGradientColorsType.YELLOW:
      // #A6C012 с 30% прозрачности сверху, #A6C012 снизу
      return ["rgba(166, 192, 18, 0.3)", "rgba(166, 192, 18, 1.0)"];
    case EGradientColorsType.BLUE:
      // По умолчанию светло-голубой
      return ["rgba(227, 242, 253, 0.3)", "rgba(227, 242, 253, 1.0)"];
    default:
      return ["rgba(227, 242, 253, 0.3)", "rgba(227, 242, 253, 1.0)"];
  }
}