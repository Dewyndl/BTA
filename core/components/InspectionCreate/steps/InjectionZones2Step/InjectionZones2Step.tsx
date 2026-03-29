import React from 'react';
import { InjectionZonesSelect, type InjectionZonesSelectProps } from '../../../InjectionZonesSelect';
import type { IInspectionCreateStepProps } from '../../interfaces';
import { InspectionCreateStepsEnum } from '../../enums';

const TITLE = 'Выбранные зоны требуют коррекции. Начать процедуру?';

export const InjectionZones2Step = (props: IInspectionCreateStepProps) => {
  return (
    <InjectionZonesSelect
      {...(props as InjectionZonesSelectProps)}
      title={TITLE}
      subtitle=""
      nextStep={InspectionCreateStepsEnum.APPOINTMENT_COMPLETION}
    />
  );
};
