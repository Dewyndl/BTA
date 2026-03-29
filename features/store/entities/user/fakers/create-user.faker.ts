import { faker } from '@faker-js/faker';
import { IUser } from '../interfaces';
import { NullableType } from '../../../../../common';
import { UbanType } from '../types';

export const createFakeUser = (): IUser => {
  const randomNullable = <T>(generator: () => T): NullableType<T> =>
    faker.datatype.boolean() ? generator() : null;

  const fakeUban: UbanType = {
    auth: randomNullable(() => faker.lorem.word()),
    order: randomNullable(() => faker.lorem.word()),
    blog_topic: randomNullable(() => faker.lorem.word()),
    blog_post: randomNullable(() => faker.lorem.word()),
  };

  return {
    u_id: faker.string.uuid(),
    u_name: faker.person.firstName(),
    u_family: randomNullable(() => faker.person.lastName()),
    u_middle: randomNullable(() => faker.person.middleName()),
    u_email: randomNullable(() => faker.internet.email()),
    u_phone: randomNullable(() => faker.phone.number({ style: 'human'})),
    u_role: faker.helpers.arrayElement(['user', 'admin', 'moderator']),
    u_a_role: randomNullable(() => faker.helpers.arrayElement(['superadmin', 'editor'])),
    u_check_state: randomNullable(() =>
      faker.helpers.arrayElement(['checked', 'unchecked', 'pending'])
    ),
    u_ban: fakeUban,
    u_active: faker.number.int({ min: 0, max: 1 }),
    u_photo: randomNullable(() => faker.image.avatar()),
    u_birthday: randomNullable(() =>
      faker.date.birthdate({ min: 18, max: 65, mode: 'age' }).toISOString().split('T')[0]
    ),
    u_phone_checked: faker.number.int({ min: 0, max: 1 }),
    u_lang: randomNullable(() => faker.helpers.arrayElement(['en', 'ru', 'fr', 'es'])),
    u_currency: randomNullable(() => faker.finance.currencyCode()),
    u_city: randomNullable(() => faker.location.city()),
    u_tips: randomNullable(() => faker.lorem.sentence()),
    u_lang_skills: randomNullable(() =>
      faker.helpers.arrayElements(['English', 'Russian', 'French', 'Spanish'], 2).join(', ')
    ),
    u_description: randomNullable(() => faker.lorem.paragraph()),
    u_gps_software: randomNullable(() =>
      faker.helpers.arrayElement(['Google Maps', 'Yandex', 'Waze'])
    ),
  };
};