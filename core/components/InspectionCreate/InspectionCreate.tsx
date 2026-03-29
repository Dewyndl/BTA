import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import type { BodyType } from '../../../common';
import { InspectionCreateStepBuilder } from './builder';
import { InspectionCreateStepsEnum } from './enums';

type InspectionCreateProps = {
  initialBody?: BodyType;
  onComplete?: (finalBody: BodyType) => void;
};

export const InspectionCreate = ({ initialBody = {}, onComplete }: InspectionCreateProps) => {
  const [body, setBody] = useState<BodyType>(initialBody);
  const [step, setStep] = useState<InspectionCreateStepsEnum>(
    InspectionCreateStepsEnum.INJECTION_ZONES_1
  );

  const handleComplete = (finalBody: BodyType) => {
    onComplete?.(finalBody);
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
      bounces={false}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <InspectionCreateStepBuilder
        step={step}
        body={body}
        getAllBody={setBody}
        setStep={setStep}
        onComplete={handleComplete}
      />
    </ScrollView>
  );
};
