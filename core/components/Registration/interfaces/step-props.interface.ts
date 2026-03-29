import type { RefObject } from 'react';
import type { ScrollView } from 'react-native';
import type { RegistrationStepsEnum } from '../enums';
import { BodyType } from '../../../../common';

export interface IStepProps {
  getBody: (body: BodyType) => void;
  setStep: React.Dispatch<React.SetStateAction<RegistrationStepsEnum>>;
  allBody: BodyType;
  scrollRef?: RefObject<ScrollView | null>;
}