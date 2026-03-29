export interface ISerializedPatient {
  id: string;
  firstName: string;
  lastName?: string;
  middleName?: string;
  gender?: string;
  birthDate?: string;
  phone: string;
  specialFeatures?: string;
  reminderInterval?: string;
  messenger?: string;
  refuseReminders?: boolean;
  imageUrl?: string | number;
  createdAt: string;
  updatedAt: string;
}