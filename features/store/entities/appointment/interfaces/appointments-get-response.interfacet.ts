import { IAppointmentGetResponse } from "./appointment-get-response.interfacet";

export interface IAppointmentsGetResponse {
    'task list': Record<string, IAppointmentGetResponse>;
}