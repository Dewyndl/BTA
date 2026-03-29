import { IPatient } from "../../../../features";
import { ISerializedPatient } from "../interfaces";

export function deserializePatient(serialized: ISerializedPatient | IPatient): IPatient {
  // If already deserialized (has Date objects), return as is
  if (serialized.createdAt instanceof Date) {
    return serialized as IPatient;
  }

  // Helper function to safely create Date from string
  const safeDate = (dateString: string | undefined): Date => {
    if (!dateString) return new Date();
    const date = new Date(dateString);
    // If date is invalid, return current date as fallback
    return isNaN(date.getTime()) ? new Date() : date;
  };

  const s = serialized as ISerializedPatient;
  return {
    ...s,
    birthDate: s.birthDate ? safeDate(s.birthDate) : undefined,
    createdAt: safeDate(s.createdAt),
    updatedAt: safeDate(s.updatedAt),
  };
}