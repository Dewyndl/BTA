import React from 'react';
import { InjectionZonesSelect, type InjectionZonesSelectProps } from '../../../InjectionZonesSelect';
import type { IInspectionCreateStepProps } from '../../interfaces';
import { InspectionCreateStepsEnum } from '../../enums';

const TITLE = 'Начать осмотр ранее отработанных зон?';

export const InjectionZones1Step = (props: IInspectionCreateStepProps) => {
  return (
    <InjectionZonesSelect
      {...(props as InjectionZonesSelectProps)}
      title={TITLE}
      subtitle=""
      nextStep={InspectionCreateStepsEnum.CAMERA_PHOTO}
    />
  );
};
