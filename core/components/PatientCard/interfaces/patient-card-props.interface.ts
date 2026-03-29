import { IPatient } from "../../../../features";

export interface IPatientCardProps {
  patient: IPatient;
  onPress?: () => void;
  nearestAppointment?: string;
}