import {BookIcon, CalendarIcon, CardotekaIcon, EyeIcon, FaceIcon, FirstAppointmentIcon} from "../../../../assets/svgs/";
import { IMenuItem } from "../../MenuItem";

export const menuData: Array<IMenuItem> = [
    {
        href: 'AppointmentCreate',
        title: "Первичный приём",
        Icon: <FirstAppointmentIcon />,
    },
    {
        href: 'Inspection',
        title: "Осмотр, коррекция",
        Icon: <EyeIcon />,
    },
    {
        href: 'FollowUpAppointment',
        title: "Повторный приём",
        Icon: <FaceIcon />,
    },
    {
        href: 'Calendar',
        title: "Мой календарь",
        Icon: <CalendarIcon />,
    },
    {
        href: 'TextBook',
        title: "Картотека",
        Icon: <CardotekaIcon />,
    },
    {
        href: 'TextbookContent',
        title: "Учебное пособие",
        Icon: <BookIcon />,
    },
]