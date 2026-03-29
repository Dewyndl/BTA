import type { ValidationSchema } from '../../../../../common/types';

export const PHONE_MASK: import('react-native-mask-input').Mask = [
  '+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ',
  /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/,
];

export const CODE_MASK: import('react-native-mask-input').Mask = [
  ' ', /\d/, /\d/, /\d/, /\d/,
];

export const PHONE_SCHEMA: ValidationSchema = {
  login: [
    { type: 'required', message: 'Введите номер телефона' },
    { type: 'phone', message: 'Введите полный номер телефона (+7 XXX XXX-XX-XX)' },
  ],
};

export const CODE_SCHEMA: ValidationSchema = {
  code: [
    { type: 'required', message: 'Введите код' },
    { type: 'minLength', value: 4, message: 'Введите 4-значный код' },
  ],
};

export const LOGIN_FORM_INITIAL_VALUES = {
  login: '',
  code: '',
};
