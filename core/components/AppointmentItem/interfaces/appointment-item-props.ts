import type { IAppointment } from '../../../../features';

export interface IAppointmentItemProps extends IAppointment {
  onPress?: () => void;
}