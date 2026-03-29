import type { BodyType } from '../../../../../../common';
import type { IAppointmentCreateStepProps } from '../../../interfaces';

export type IPreparationDistributionStepProps = IAppointmentCreateStepProps & {
  onComplete?: (body: BodyType) => void;
};
