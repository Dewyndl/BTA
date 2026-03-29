import React, { useEffect, useState } from 'react';
import type { BodyType } from '../../../../../common';
import type { IFollowUpAppointmentStepBuilderProps } from './interfaces';
import { FollowUpAppointmentStepsEnum } from '../../enums';
import { AppointmentProcedure } from '../../../AppointmentProcedure';
import { InjectionZonesSelect } from '../../../InjectionZonesSelect';
import { AppointmentsListStep } from '../../steps';

export const FollowUpAppointmentStepBuilder = ({
  step,
  getAllBody,
  setStep,
  body,
  onComplete,
}: IFollowUpAppointmentStepBuilderProps) => {
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
    case FollowUpAppointmentStepsEnum.APPOINTMENTS_LIST:
      return <AppointmentsListStep setStep={setStep} />;
    case FollowUpAppointmentStepsEnum.PROCEDURE:
      return (
        <AppointmentProcedure
          {...(props as unknown as Parameters<typeof AppointmentProcedure>[0])}
          nextStep={FollowUpAppointmentStepsEnum.INJECTION_ZONES}
        />
      );
    case FollowUpAppointmentStepsEnum.INJECTION_ZONES:
      return (
        <InjectionZonesSelect
          {...(props as unknown as Parameters<typeof InjectionZonesSelect>[0])}
          onComplete={() => onComplete?.(allBody)}
        />
      );
    default:
      return <AppointmentsListStep setStep={setStep} />;
  }
};
