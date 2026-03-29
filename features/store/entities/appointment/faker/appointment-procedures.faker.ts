import { AppointmentProceduresEnum } from "../enums";

export const appointmentProceduresFaker: Record<AppointmentProceduresEnum, string> = {
    [AppointmentProceduresEnum.BOTULOTOXIN_TYPE_A]: 'Ботултоксин типа А',
    [AppointmentProceduresEnum.CONTOUR_PLASTIC]: 'Контурная пластика',
    [AppointmentProceduresEnum.THREAD_LIFTING]: 'Тредлифтинг',
    [AppointmentProceduresEnum.BIOREVITALIZATION]: 'Биоревитализация',
    [AppointmentProceduresEnum.HARDWARE_TECHNIQUES]: 'Технические методы',
    [AppointmentProceduresEnum.OTHER]: 'Другое',
}