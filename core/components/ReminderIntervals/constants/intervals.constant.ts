export const REMINDER_INTERVALS_INSTRUCTION =
  'Настройте стандартные интервалы напоминания для ваших пациентов';

export const EXAMINATION_LABEL = 'Осмотр / коррекция';
export const FOLLOW_UP_HEADING = 'Повторный приём';

export type IntervalItem = {
  id: string;
  label: string;
  value: string; // e.g. '2 нед.', '4 мес.'
};

export const DEFAULT_INTERVALS: IntervalItem[] = [
  { id: 'exam', label: EXAMINATION_LABEL, value: '2 нед.' },
  { id: 'botox', label: 'Ботулотоксин типа А', value: '4 мес.' },
  { id: 'hardware', label: 'Аппаратная методика', value: '6 мес.' },
  { id: 'contour', label: 'Контурная пластика', value: '10 мес.' },
  { id: 'thread', label: 'Нитевой лифтинг', value: '12 мес.' },
  { id: 'bio', label: 'Биоревитализация', value: '2 нед.' },
];

export const RESET_BUTTON_LABEL = 'Сбросить по умолчанию';
export const NEED_HELP_LABEL = 'Требуется помощь?';
