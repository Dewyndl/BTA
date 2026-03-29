import type { ConfirmMethod } from '../../Registration/steps/ConfirmTypeStep/constants';

export const LOGIN_CONFIRM_METHODS_STORAGE_KEY = 'bta_login_confirm_methods_order';

export const CONFIRM_METHOD_OPTIONS: { id: ConfirmMethod; label: string }[] = [
  { id: 'telegram_id,phone', label: 'Telegram' },
  { id: 'whatsapp', label: 'WhatsApp' },
  { id: 'sms', label: 'SMS' },
  { id: 'email', label: 'Email' },
];

export const DEFAULT_CONFIRM_METHODS_ORDER: ConfirmMethod[] = ['sms', 'telegram_id,phone', 'whatsapp', 'email'];
