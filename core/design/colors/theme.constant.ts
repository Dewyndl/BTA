import { palette } from './palette.constant';

/**
 * Тема приложения. Собирает палитру и токены для использования в компонентах и стилях.
 */
export const theme = {
  ...palette,
  colors: palette,
} as const;

export type Theme = typeof theme;
