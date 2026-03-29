export const DEFAULT_TEMPLATE_TEXT =
  'Уважаемый ФИО вот и пролетели 2 недели после нашей основной процедуры. Как ваше самочувствие? На какой день я могу вас записать на осмотр?';

export const TEMPLATE_LABELS = [
  'Приглашение на первичный прием:',
  'Осмотр/коррекция, напоминание:',
  'Повторный прием, напоминание:',
  'Приглашение на новый повторный прием:',
] as const;

export const REMINDER_INTERVAL_VARIABLE = '[настроенный интервал напоминания]';
export const MAX_TEMPLATE_LENGTH = 256;
export const INSERT_VARIABLE_LABEL = 'Вставить переменную интервала напоминания';
export const INSERT_STANDARD_TEMPLATE_LABEL = 'Вставить стандартный шаблон';
export const NEW_TEMPLATE_LABEL = 'Новый пользовательский шаблон:';
export const NEW_TEMPLATE_NAME_PLACEHOLDER = 'Введите название шаблона';
export const NEW_TEMPLATE_TEXT_PLACEHOLDER = 'Придумайте текст уведомления';
export const VALIDATION_ERROR_MESSAGE =
  'Поле не может содержать символы... / Превышать длину в 256 символов.';
