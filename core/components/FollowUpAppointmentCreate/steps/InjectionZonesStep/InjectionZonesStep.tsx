import React from 'react';
import { InjectionZonesSelect, type InjectionZonesSelectProps } from '../../../InjectionZonesSelect';
import type { IFollowUpAppointmentCreateStepProps } from '../../interfaces';
import { FollowUpAppointmentCreateStepsEnum } from '../../enums';

const TITLE = 'Выберите зоны инъецирования';

export const InjectionZonesStep = (props: IFollowUpAppointmentCreateStepProps) => {
  return (
    <InjectionZonesSelect
      {...(props as InjectionZonesSelectProps)}
      title={TITLE}
      subtitle=""
      nextStep={FollowUpAppointmentCreateStepsEnum.PROCEDURE_2}
    />
  );
};
