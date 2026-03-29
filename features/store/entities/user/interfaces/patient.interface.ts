
export interface IPatient {
  id: string;
  firstName: string;
  lastName?: string;
  middleName?: string;
  gender?: string;
  birthDate?: Date;
  phone: string;
  specialFeatures?: string;
  reminderInterval?: string;
  messenger?: string;
  refuseReminders?: boolean;
  imageUrl?: string | number; // string for URI, number for require()
  createdAt: Date;
  updatedAt: Date;
}
