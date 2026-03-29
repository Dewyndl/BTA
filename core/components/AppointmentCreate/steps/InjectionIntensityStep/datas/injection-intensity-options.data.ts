import type { IInjectionIntensityOption } from '../interfaces';
import { IMAGES } from '../../../../../../assets/images';

export const injectionIntensityOptions: IInjectionIntensityOption[] = [
  {
    id: 'lighter',
    label: 'Полегче',
    image: IMAGES.EYES_ZONE,
  },
  {
    id: 'medium',
    label: 'Средне',
    image: IMAGES.GLABELLA_ZONE,
  },
  {
    id: 'stronger',
    label: 'Интенсивнее',
    image: IMAGES.FOREHEAD_ZONE,
  },
];
