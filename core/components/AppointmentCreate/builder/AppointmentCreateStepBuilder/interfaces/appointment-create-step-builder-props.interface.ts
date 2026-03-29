import type { BodyType } from '../../../../../../common';
import type { AppointmentCreateStepsEnum } from '../../../enums';

export interface IAppointmentCreateStepBuilderProps {
  step: AppointmentCreateStepsEnum;
  getAllBody: (body: BodyType) => void;
  setStep: React.Dispatch<React.SetStateAction<AppointmentCreateStepsEnum>>;
  body: BodyType;
  onComplete?: (body: BodyType) => void;
}
