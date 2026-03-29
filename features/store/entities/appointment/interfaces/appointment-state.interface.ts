import { NullableType } from "../../../../../common";
import { IAppointment } from "./appointment.interface";

export interface IAppointmentState {
    appointmentData: NullableType<IAppointment[]>
}