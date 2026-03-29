import type { BodyType } from '../../../../common';
import type { FollowUpAppointmentStepsEnum } from '../enums';

export interface IFollowUpAppointmentStepProps {
  getBody: (body: BodyType) => void;
  setStep: React.Dispatch<React.SetStateAction<FollowUpAppointmentStepsEnum>>;
  allBody: BodyType;
}
