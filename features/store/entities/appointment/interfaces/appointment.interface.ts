import { AppointmentTypesEnum } from "../enums";

export interface IAppointment {
  id: string;
  patientName: string;
  type: AppointmentTypesEnum;
  date: Date;
  time: string;
  imageUrl?: string;
  notifiedAt?: Date;
  procedure?: string;
}