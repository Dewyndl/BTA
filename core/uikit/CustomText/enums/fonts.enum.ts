export enum FontsFamilyEnum {
  MONTSERRAT_THIN = 'montserrat-thin',
  MONTSERRAT_EXTRALIGHT = 'montserrat-extralight',
  MONTSERRAT_LIGHT = 'montserrat-light',
  MONTSERRAT_REGULAR = 'montserrat-regular',
  MONTSERRAT_MEDIUM = 'montserrat-medium',
  MONTSERRAT_SEMIBOLD = 'montserrat-semibold',
  MONTSERRAT_BOLD = 'montserrat-bold',
  MONTSERRAT_EXTRABOLD = 'montserrat-extrabold',
  MONTSERRAT_BLACK = 'montserrat-black',
}

export const FontFamily: Record<FontsFamilyEnum, string> = {
  [FontsFamilyEnum.MONTSERRAT_THIN]: 'Montserrat-Thin',
  [FontsFamilyEnum.MONTSERRAT_EXTRALIGHT]: 'Montserrat-ExtraLight',
  [FontsFamilyEnum.MONTSERRAT_LIGHT]: 'Montserrat-Light',
  [FontsFamilyEnum.MONTSERRAT_REGULAR]: 'Montserrat-Regular',
  [FontsFamilyEnum.MONTSERRAT_MEDIUM]: 'Montserrat-Medium',
  [FontsFamilyEnum.MONTSERRAT_SEMIBOLD]: 'Montserrat-SemiBold',
  [FontsFamilyEnum.MONTSERRAT_BOLD]: 'Montserrat-Bold',
  [FontsFamilyEnum.MONTSERRAT_EXTRABOLD]: 'Montserrat-ExtraBold',
  [FontsFamilyEnum.MONTSERRAT_BLACK]: 'Montserrat-Black',
} as const;

export enum FontSizeEnum {
  XS = 10,
  S = 12,
  M = 14,
  L = 16,
  XL = 18,
  XXL = 20,
}

export enum FontWeightEnum {
  THIN = '100',
  EXTRA_LIGHT = '200',
  LIGHT = '300',
  REGULAR = '400',
  MEDIUM = '500',
  SEMI_BOLD = '600',
  BOLD = '700',
  EXTRA_BOLD = '800',
  BLACK = '900',
}

export enum FontStyleEnum {
  NORMAL = 'normal',
  ITALIC = 'italic',
}
