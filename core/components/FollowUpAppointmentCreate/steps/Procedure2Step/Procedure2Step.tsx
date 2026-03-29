import React from 'react';
import { AppointmentProcedure } from '../../../AppointmentProcedure';
import type { IFollowUpAppointmentCreateStepProps } from '../../interfaces';
import { FollowUpAppointmentCreateStepsEnum } from '../../enums';

export const Procedure2Step = (props: IFollowUpAppointmentCreateStepProps) => {
  return (
    <AppointmentProcedure
      {...(props as unknown as Parameters<typeof AppointmentProcedure>[0])}
      nextStep={FollowUpAppointmentCreateStepsEnum.HINT_MODAL}
    />
  );
};
