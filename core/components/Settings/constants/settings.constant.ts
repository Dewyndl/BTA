import type { ISettingsLink } from '../interfaces';

export const SETTINGS_LINKS: ISettingsLink[] = [
  { label: 'Настройки уведомлений', href: 'NotificationSettings', isHighlight: true },
  { label: 'Интервалы напоминания', href: 'ReminderIntervals', isHighlight: true },
  { label: 'Код подтверждения', href: 'ConfirmationCode', isHighlight: true },
  { label: 'Техподдержка', href: 'Support' },
  { label: 'Оставить отзыв', href: 'Feedback' },
  { label: 'О приложении', href: 'About' },
];
