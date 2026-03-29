import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import type { BodyType } from '../../../common';
import { FollowUpAppointmentCreateStepBuilder } from './builder';
import { FollowUpAppointmentCreateStepsEnum } from './enums';

type FollowUpAppointmentCreateProps = {
  initialBody?: BodyType;
  onComplete?: (finalBody: BodyType) => void;
};

export const FollowUpAppointmentCreate = ({
  initialBody = {},
  onComplete,
}: FollowUpAppointmentCreateProps) => {
  const [body, setBody] = useState<BodyType>(initialBody);
  const [step, setStep] = useState<FollowUpAppointmentCreateStepsEnum>(
    FollowUpAppointmentCreateStepsEnum.PROCEDURE_1
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
      <FollowUpAppointmentCreateStepBuilder
        step={step}
        body={body}
        getAllBody={setBody}
        setStep={setStep}
        onComplete={handleComplete}
      />
    </ScrollView>
  );
};
