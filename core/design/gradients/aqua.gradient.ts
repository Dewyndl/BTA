import { palette } from '../colors';
import type { IGradient } from '../interfaces';

export const aquaGradient: IGradient = {
  colors: [palette.tealLight, palette.primaryLight],
  start: { x: 0.5, y: 0 },
  end: { x: 0.5, y: 1 },
  rotate: 180,
}