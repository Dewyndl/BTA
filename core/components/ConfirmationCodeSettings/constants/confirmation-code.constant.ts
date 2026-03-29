export const CONFIRMATION_CODE_TITLE = 'Укажите удобные способы получения кода подтверждения';
export const CONFIRMATION_CODE_SUBTITLE =
  'Процедура выполняется при подтверждении номера телефона, к которому привязан ваш аккаунт';

export const METHODS = ['Telegram', 'WhatsApp', 'SMS', 'Email'] as const;
export type MethodId = (typeof METHODS)[number];
