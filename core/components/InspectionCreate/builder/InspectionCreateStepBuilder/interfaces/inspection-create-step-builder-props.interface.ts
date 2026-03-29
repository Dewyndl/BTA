import type { BodyType } from '../../../../../../common';
import type { InspectionCreateStepsEnum } from '../../../enums';

export interface IInspectionCreateStepBuilderProps {
  step: InspectionCreateStepsEnum;
  getAllBody: (body: BodyType) => void;
  setStep: React.Dispatch<React.SetStateAction<InspectionCreateStepsEnum>>;
  body: BodyType;
  onComplete?: (body: BodyType) => void;
}
