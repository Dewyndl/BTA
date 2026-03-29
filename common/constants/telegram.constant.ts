import { normalizePhone } from '../helpers/normalize-phone.helper';

const TELEGRAM_BOT_USERNAME = 'gfp_telegram_authenticator_bot';
const TELEGRAM_LINK_SUFFIX = '_assist';

/**
 * Шаблон ссылки для привязки Telegram.
 * Подставь нормализованный телефон (только цифры, 79…) вместо {phone}.
 */
export const TELEGRAM_BOT_LINK_TEMPLATE = `https://t.me/${TELEGRAM_BOT_USERNAME}?start={phone}${TELEGRAM_LINK_SUFFIX}`;

export const getTelegramBotLink = (phone: string): string =>
  TELEGRAM_BOT_LINK_TEMPLATE.replace('{phone}', normalizePhone(phone));
