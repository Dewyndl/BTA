import type { BodyType } from '../../../../common';
import type { InspectionCreateStepsEnum } from '../enums';

export interface IInspectionCreateStepProps {
  getBody: (body: BodyType) => void;
  setStep: React.Dispatch<React.SetStateAction<InspectionCreateStepsEnum>>;
  allBody: BodyType;
}
