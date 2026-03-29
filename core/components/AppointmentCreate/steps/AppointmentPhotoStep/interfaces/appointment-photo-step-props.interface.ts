import type { AppointmentCreateStepsEnum } from '../../../enums';
import type { BodyType } from '../../../../../../common';
import type { IAppointmentCreateStepProps } from '../../../interfaces';

export type IAppointmentPhotoStepProps = IAppointmentCreateStepProps & {
  onComplete?: (body: BodyType) => void;
  nextStep?: AppointmentCreateStepsEnum;
};
