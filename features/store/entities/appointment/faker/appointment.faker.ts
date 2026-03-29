import { fakerRU as faker } from '@faker-js/faker';
// import { EAppointmentType } from "../../../../../core/components";
import { IAppointment } from "../interfaces";
import { AppointmentTypesEnum } from '../enums';

const appointmentTypes = Object.values(AppointmentTypesEnum);

export const appointmentFakeData: Array<IAppointment> = Array.from(
  { length: 10 },
  () => ({
    id: faker.string.uuid(),
    patientName: faker.person.fullName(),
    type: faker.helpers.arrayElement(appointmentTypes),
    date: faker.date.future(),
    time: faker.date
      .soon()
      .toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
    imageUrl: faker.image.avatar(),
    notifiedAt: faker.datatype.boolean()
      ? faker.date.recent()
      : undefined,
    procedure: faker.datatype.boolean()
      ? faker.helpers.arrayElement([
          'Осмотр',
          'Консультация',
          'Чистка',
          'Диагностика',
          'Повторный приём',
        ])
      : undefined,
  })
);