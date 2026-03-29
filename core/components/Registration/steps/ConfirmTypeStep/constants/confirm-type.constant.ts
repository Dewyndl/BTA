import type { LoginType } from '../../../../../../features/store/entities/user';

export type ConfirmMethod = 'telegram_id,phone' | 'whatsapp' | 'sms' | 'email';

export const CONFIRM_METHOD_TO_LOGIN_TYPE: Record<ConfirmMethod, LoginType> = {
  'telegram_id,phone': 'telegram_id,phone',
  whatsapp: 'whatsapp',
  sms: 'phone_code',
  email: 'e-mail',
};
