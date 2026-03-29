import React, { useState } from 'react';
import { View } from 'react-native';
import type { BodyType } from '../../../common';
import { AppointmentCreateStepBuilder } from './builder';
import { AppointmentCreateStepsEnum } from './enums';

type AppointmentCreateProps = {
  onComplete?: (finalBody: BodyType) => void;
};

export const AppointmentCreate = ({ onComplete }: AppointmentCreateProps) => {
  const [body, setBody] = useState<BodyType>({});
  const [step, setStep] = useState<AppointmentCreateStepsEnum>(
    AppointmentCreateStepsEnum.PATIENT_FORM
  );

  const handleComplete = (finalBody: BodyType) => {
    onComplete?.(finalBody);
  };

  return (
    <View style={{ flex: 1 }}>
      <AppointmentCreateStepBuilder
        step={step}
        body={body}
        getAllBody={setBody}
        setStep={setStep}
        onComplete={handleComplete}
      />
    </View>
  );
};
