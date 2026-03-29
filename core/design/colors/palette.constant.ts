/**
 * Цветовая палитра приложения. Использовать константы вместо хардкода hex.
 */
export const palette = {
  // Brand / primary
  primary: '#0E7C7B',
  primaryLight: '#1F7876',
  tealLight: '#56B5B3',
  tealMint: '#89C7B6',

  // Neutrals
  textPrimary: '#222221',
  textSecondary: '#424242',
  textMuted: '#9E9E9E',
  placeholder: '#838383',
  background: '#F6F6F6',
  backgroundAlt: '#F5F5F5',
  border: '#E8E8E8',
  borderLight: '#E5E5E5',
  borderMedium: '#C3C3C3',
  white: '#FFFFFF',
  black: '#000000',

  // Surfaces / cards
  surface: '#FFFFFF',
  surfaceDark: '#5A5A5A',
  surfaceDarkBorder: '#6A6A6A',
  sliderThumb: '#BEBEBE',

  // Semantic
  error: '#D7131F',
  success: '#0E7C7B',
  successGreen: '#009C6A',
  infoBlue: '#026FD5',
  infoCyan: '#1BC4EA',

  // UI
  shadow: '#000000',
  grayMid: '#979797',
  grayDark: '#4D4D4C',
  grayDarker: '#212120',
} as const;

export type PaletteKey = keyof typeof palette;
