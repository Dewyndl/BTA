import { palette } from '../colors';
import type { IGradient } from '../interfaces';

export const blackGradient: IGradient = {
  colors: [palette.grayDark, palette.grayDarker],
  start: { x: 0.5, y: 0 },
  end: { x: 0.5, y: 1 },
  rotate: 180,
}
