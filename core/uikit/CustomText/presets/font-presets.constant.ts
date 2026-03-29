import {
  FontsFamilyEnum,
  FontStyleEnum,
  FontWeightEnum,
} from '../enums';
import type { IFontPreset } from '../interfaces/font-preset.interface';

/**
 * Пресеты по начертанию. В CustomText передаёшь только preset + fontSize + color.
 */
export const fontPresets = {
  thin: {
    fontFamily: FontsFamilyEnum.MONTSERRAT_THIN,
    fontStyle: FontStyleEnum.NORMAL,
    fontWeight: FontWeightEnum.THIN,
  } satisfies IFontPreset,
  extraLight: {
    fontFamily: FontsFamilyEnum.MONTSERRAT_EXTRALIGHT,
    fontStyle: FontStyleEnum.NORMAL,
    fontWeight: FontWeightEnum.EXTRA_LIGHT,
  } satisfies IFontPreset,
  light: {
    fontFamily: FontsFamilyEnum.MONTSERRAT_LIGHT,
    fontStyle: FontStyleEnum.NORMAL,
    fontWeight: FontWeightEnum.LIGHT,
  } satisfies IFontPreset,
  regular: {
    fontFamily: FontsFamilyEnum.MONTSERRAT_REGULAR,
    fontStyle: FontStyleEnum.NORMAL,
    fontWeight: FontWeightEnum.REGULAR,
  } satisfies IFontPreset,
  medium: {
    fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
    fontStyle: FontStyleEnum.NORMAL,
    fontWeight: FontWeightEnum.MEDIUM,
  } satisfies IFontPreset,
  semibold: {
    fontFamily: FontsFamilyEnum.MONTSERRAT_SEMIBOLD,
    fontStyle: FontStyleEnum.NORMAL,
    fontWeight: FontWeightEnum.SEMI_BOLD,
  } satisfies IFontPreset,
  bold: {
    fontFamily: FontsFamilyEnum.MONTSERRAT_BOLD,
    fontStyle: FontStyleEnum.NORMAL,
    fontWeight: FontWeightEnum.BOLD,
  } satisfies IFontPreset,
  extraBold: {
    fontFamily: FontsFamilyEnum.MONTSERRAT_EXTRABOLD,
    fontStyle: FontStyleEnum.NORMAL,
    fontWeight: FontWeightEnum.EXTRA_BOLD,
  } satisfies IFontPreset,
  black: {
    fontFamily: FontsFamilyEnum.MONTSERRAT_BLACK,
    fontStyle: FontStyleEnum.NORMAL,
    fontWeight: FontWeightEnum.BLACK,
  } satisfies IFontPreset,
} as const;

export type FontPresetKey = keyof typeof fontPresets;
