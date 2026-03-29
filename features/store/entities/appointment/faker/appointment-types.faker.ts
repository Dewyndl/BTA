import { AppointmentTypesEnum } from "../enums";

export const appointmentTypesFaker: Record<AppointmentTypesEnum, string> = {
    [AppointmentTypesEnum.CHECKUP]: 'Первичный приём',
    [AppointmentTypesEnum.PRIMARY]: 'Осмотр, коррекция',
    [AppointmentTypesEnum.REPEAT]: 'Повторный приём',
}