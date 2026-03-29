import type { RefObject } from 'react';
import type { ScrollView } from 'react-native';
import type { BodyType } from '../../../../../../common';
import type { RegistrationStepsEnum } from '../../../enums';

export interface IRegistrationStepBuilderProps {
  step: RegistrationStepsEnum;
  getAllBody: (body: BodyType) => void;
  setStep: React.Dispatch<React.SetStateAction<RegistrationStepsEnum>>;
  body: BodyType;
  scrollRef?: RefObject<ScrollView | null>;
}