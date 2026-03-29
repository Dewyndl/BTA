import type { BodyType } from '../../../../../../common';
import type { FollowUpAppointmentCreateStepsEnum } from '../../../enums';

export interface IFollowUpAppointmentCreateStepBuilderProps {
  step: FollowUpAppointmentCreateStepsEnum;
  body: BodyType;
  getAllBody: (body: BodyType) => void;
  setStep: React.Dispatch<React.SetStateAction<FollowUpAppointmentCreateStepsEnum>>;
  onComplete?: (finalBody: BodyType) => void;
}
