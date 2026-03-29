import type { RefObject } from 'react';
import type { ScrollView } from 'react-native';
import type { BodyType } from '../../../../common';
import type { ValidationSchema } from '../../../../common/types';

export interface IFormProps {
  children: React.ReactNode;
  initialValues: BodyType;
  validationSchema: ValidationSchema;
  onSubmit: (values: BodyType) => void;
  scrollRef?: RefObject<ScrollView | null>;
}
