export type NotificationType =
  | 'patient_reminder'
  | 'appointment'
  | 'system_warning'
  | 'follow_up'
  | 'note';

export interface INotification {
  id: string;
  type: NotificationType;
  timestamp: string;
  text: string;
  boldPart?: string;
  isHighlighted?: boolean;
  action?: {
    left?: { label: string; onPress?: () => void };
    right?: { label: string; onPress?: () => void };
  };
  status?: string; // e.g. "Уведомление отправлено пациенту"
}
