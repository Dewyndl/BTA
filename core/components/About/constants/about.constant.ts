export const APP_NAME = 'BTA Assist';
export const APP_VERSION = 'Версия 1.0.2.14';

export type AboutLinkId = 'offer' | 'privacy' | 'company';

export type AboutLinkItem = {
  id: AboutLinkId;
  label: string;
};

export const ABOUT_LINKS: AboutLinkItem[] = [
  { id: 'offer', label: 'Публичная оферта' },
  { id: 'privacy', label: 'Политика конфиденциальности' },
  { id: 'company', label: 'О компании' },
];
