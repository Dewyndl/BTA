import { IPatient } from "../../../../features";
import { ISerializedPatient } from "../interfaces";

export function serializePatient(patient: IPatient): ISerializedPatient {
  return {
    ...patient,
    birthDate: patient.birthDate?.toISOString(),
    createdAt: patient.createdAt.toISOString(),
    updatedAt: patient.updatedAt.toISOString(),
  };
}