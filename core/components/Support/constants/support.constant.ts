export type SupportFaqId = string;

export type SupportFaqItem = {
  id: SupportFaqId;
  label: string;
};

export const SUPPORT_FAQ_TITLE = 'Частые вопросы';

export const SUPPORT_FAQ_ITEMS: SupportFaqItem[] = [
  { id: 'ai-assistant', label: 'Не работает ИИ-ассистент' },
  { id: 'subscription-pay', label: 'Не удается оплатить подписку' },
  { id: 'patient-notifications', label: 'Не приходят уведомления пациенту' },
  { id: 'change-phone', label: 'Не получается сменить номер телефона' },
  { id: 'connect-email', label: 'Не получается подключить Email к своему аккаунту' },
  { id: 'other', label: 'Другой' },
];
