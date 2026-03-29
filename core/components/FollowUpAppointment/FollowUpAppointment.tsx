import React, { useState } from 'react';
import type { BodyType } from '../../../common';
import { KeyboardAwareScrollView } from '../../uikit';
import { FollowUpAppointmentStepBuilder } from './builder';
import { FollowUpAppointmentStepsEnum } from './enums';

export const FollowUpAppointment = () => {
  const [body, setBody] = useState<BodyType>({});
  const [step, setStep] = useState<FollowUpAppointmentStepsEnum>(
    FollowUpAppointmentStepsEnum.APPOINTMENTS_LIST
  );

  const handleComplete = (_finalBody: BodyType) => {
    // Follow-up appointment created
  };

  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      keyboardShouldPersistTaps="handled"
      keyboardVerticalOffset={100}
    >
      <FollowUpAppointmentStepBuilder
        step={step}
        body={body}
        getAllBody={setBody}
        setStep={setStep}
        onComplete={handleComplete}
      />
    </KeyboardAwareScrollView>
  );
};
