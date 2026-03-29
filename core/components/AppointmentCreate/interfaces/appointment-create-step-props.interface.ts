import type { BodyType } from '../../../../common';
import type { AppointmentCreateStepsEnum } from '../enums';

export interface IAppointmentCreateStepProps {
  getBody: (body: BodyType) => void;
  setStep: React.Dispatch<React.SetStateAction<AppointmentCreateStepsEnum>>;
  allBody: BodyType;
}
