// import { fakerRU as faker } from '@faker-js/faker';
// import { EAppointmentLogStatus, EAppointmentType, IAppointmentLogEntry, TTreatment } from '../../../../../core/components';

// const appointmentTypes = Object.values(EAppointmentType);
// const appointmentStatuses = Object.values(EAppointmentLogStatus);

// const sampleZones = ['зона 1', 'зона 2', 'зона 3', 'зона 4'];

// function createFakeTreatment(): TTreatment {
//   return {
//     drugName: faker.lorem.words(2),
//     units: faker.number.int({ min: 1, max: 5 }),
//     zones: faker.helpers.arrayElements(sampleZones, faker.number.int({ min: 1, max: 3 })),
//   };
// }

// export const generateFakeAppointmentLogs = (count = 10): IAppointmentLogEntry[] => {
//   return Array.from({ length: count }, () => ({
//     id: faker.string.uuid(),
//     patientId: faker.string.uuid(),
//     type: faker.helpers.arrayElement(appointmentTypes),
//     status: faker.helpers.arrayElement(appointmentStatuses),
//     date: faker.date.future(),
//     time: faker.date.soon().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
//     treatment: faker.datatype.boolean() ? createFakeTreatment() : undefined,
//     photos: faker.datatype.boolean()
//       ? Array.from({ length: faker.number.int({ min: 1, max: 3 }) }, () => faker.image.url())
//       : undefined,
//     aiAssistantUsed: faker.datatype.boolean(),
//     note: faker.datatype.boolean() ? faker.lorem.sentence() : undefined,
//   }));
// };