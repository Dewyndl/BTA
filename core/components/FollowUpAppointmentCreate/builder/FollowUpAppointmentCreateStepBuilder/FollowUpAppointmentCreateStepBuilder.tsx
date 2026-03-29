import React, { useEffect, useState } from 'react';
import type { BodyType } from '../../../../../common';
import type { IFollowUpAppointmentCreateStepBuilderProps } from './interfaces';
import { FollowUpAppointmentCreateStepsEnum } from '../../enums';
import {
  Procedure1Step,
  InjectionZonesStep,
  Procedure2Step,
  HintModalStep,
} from '../../steps';

export const FollowUpAppointmentCreateStepBuilder = ({
  step,
  getAllBody,
  setStep,
  body,
  onComplete,
}: IFollowUpAppointmentCreateStepBuilderProps) => {
  const [allBody, setAllBody] = useState<BodyType>(body);

  useEffect(() => {
    getAllBody(allBody);
  }, [allBody]);

  useEffect(() => {
    setAllBody(body);
  }, [body]);

  const props = {
    getBody: (partialBody: BodyType) => setAllBody((prev) => ({ ...prev, ...partialBody })),
    setStep,
    allBody,
  };

  switch (step) {
    case FollowUpAppointmentCreateStepsEnum.PROCEDURE_1:
      return <Procedure1Step {...props} />;
    case FollowUpAppointmentCreateStepsEnum.INJECTION_ZONES:
      return <InjectionZonesStep {...props} />;
    case FollowUpAppointmentCreateStepsEnum.PROCEDURE_2:
      return <Procedure2Step {...props} />;
    case FollowUpAppointmentCreateStepsEnum.HINT_MODAL:
      return <HintModalStep {...props} onComplete={() => onComplete?.(allBody)} />;
    default:
      return <Procedure1Step {...props} />;
  }
};
