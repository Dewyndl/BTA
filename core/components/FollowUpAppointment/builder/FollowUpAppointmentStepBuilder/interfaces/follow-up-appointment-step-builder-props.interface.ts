import type { BodyType } from '../../../../../../common';
import type { FollowUpAppointmentStepsEnum } from '../../../enums';

export interface IFollowUpAppointmentStepBuilderProps {
  step: FollowUpAppointmentStepsEnum;
  getAllBody: (body: BodyType) => void;
  setStep: React.Dispatch<React.SetStateAction<FollowUpAppointmentStepsEnum>>;
  body: BodyType;
  onComplete?: (body: BodyType) => void;
}
