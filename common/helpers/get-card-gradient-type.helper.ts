import type { IPatient } from '../../features';
import { EGradientColorsType } from "../enums";

export function getCardGradientType(patient: IPatient): EGradientColorsType {
  const hasFullName = !!(patient.firstName && patient.lastName);
  const hasPhone = !!patient.phone;
  const hasBirthDate = !!patient.birthDate;
  const hasImage = !!patient.imageUrl;

  // Зеленый = все данные заполнены
  if (hasFullName && hasPhone && hasBirthDate && hasImage) {
    return EGradientColorsType.GREEN;
  }

  // Желтый = заполнены только ФИО и телефон
  if (hasFullName && hasPhone) {
    return EGradientColorsType.YELLOW;
  }

  // По умолчанию светло-голубой
  return EGradientColorsType.BLUE;
}