import type { BodyType } from '../../../../common';
import type { FollowUpAppointmentCreateStepsEnum } from '../enums';

export interface IFollowUpAppointmentCreateStepProps {
  getBody: (body: BodyType) => void;
  setStep: React.Dispatch<React.SetStateAction<FollowUpAppointmentCreateStepsEnum>>;
  allBody: BodyType;
}
