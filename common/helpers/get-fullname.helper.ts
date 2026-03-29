import type { IPatient } from '../../features';

export function getFullName(patient: IPatient): string {
  const parts = [
    patient.lastName,
    patient.firstName,
    patient.middleName,
  ].filter(Boolean);
  return parts.join(" ") || patient.firstName || "";
}