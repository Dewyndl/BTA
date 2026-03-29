import type { INotification } from '../interfaces';

export const notificationsFaker: INotification[] = [
  {
    id: '1',
    type: 'patient_reminder',
    timestamp: '55 мин. назад',
    text: 'Прошло 6 месяцев после основной коррекции и необходимость отправить напоминание пациенту',
    boldPart: 'Ольга Михайлова',
    action: {
      left: { label: 'Настроить шаблон' },
      right: { label: 'Уведомить пациента' },
    },
  },
  {
    id: '2',
    type: 'appointment',
    timestamp: 'Вчера в 13:00',
    text: 'Сегодня в 14:00 у вас прием: осмотр/коррекция, пациент',
    boldPart: 'Ольга Михайлова',
  },
  {
    id: '3',
    type: 'system_warning',
    timestamp: '12 окт в 16:00',
    text: 'Запланированы технические работы! Приложение BTA Assist не будет функционировать 13 окт с 00:00 до 03:00 по МСК. Приносим свои извинения.',
    boldPart: '13 окт с 00:00 до 03:00 по МСК',
    isHighlighted: true,
  },
  {
    id: '4',
    type: 'follow_up',
    timestamp: '10 окт в 10:00',
    text: 'Прошло 12 месяцев после повторной процедуры. Записать пациента',
    boldPart: 'Ольга Михайлова',
    status: 'Уведомление отправлено пациенту',
  },
  {
    id: '5',
    type: 'note',
    timestamp: '10 окт в 08:00',
    text: 'Заметка: Обновить воду в кулере.',
  },
];
