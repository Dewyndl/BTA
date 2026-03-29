export interface IAppointmentResponse {
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
}