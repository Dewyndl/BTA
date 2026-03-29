import type { IAppointment } from '../../../../features';

export interface IAppointmentListProps {
  isArchive: boolean;
  showArchived?: boolean;
  title?: string;
  limit: number;
  onItemPress?: (appointment: IAppointment) => void;
}