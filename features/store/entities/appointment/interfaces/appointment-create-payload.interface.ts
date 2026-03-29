import { NullableType } from "../../../../../common";
import { IUser } from "../../user";

export interface IAppointmentCreatePayload {
    u_name: string;
    u_phone: string;
    u_role: string;
    st: string;
    data: string;
    messenger?: string;
    special_features?: string;
    birth_date?: string;
    gender?: string;
    reminder_interval?: string;
    refuse_reminders: boolean;
    b_start_address: string
    b_start_datetime: string;
    b_payment_way: string;
    u_id?: string,
    currentUser: NullableType<IUser>
}