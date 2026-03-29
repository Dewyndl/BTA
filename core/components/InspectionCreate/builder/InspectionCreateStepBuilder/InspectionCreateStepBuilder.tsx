import React, { useEffect, useState } from 'react';
import type { BodyType } from '../../../../../common';
import type { IInspectionCreateStepBuilderProps } from './interfaces';
import { InspectionCreateStepsEnum } from '../../enums';
import {
  InspectionPhotoStep,
  BeforeAfterCollageStep,
  MarkPointsStep,
  InjectionZones1Step,
  InjectionZones2Step,
  InspectionCompletionStep,
} from '../../steps';

export const InspectionCreateStepBuilder = ({
  step,
  getAllBody,
  setStep,
  body,
  onComplete,
}: IInspectionCreateStepBuilderProps) => {
  const [allBody, setAllBody] = useState<BodyType>(body);

  useEffect(() => {
    getAllBody(allBody);
  }, [allBody]);

  useEffect(() => {
    setAllBody(body);
  }, [body]);

  const props = {
    getBody: (partialBody: BodyType) => setAllBody((prev) => ({ ...prev, ...partialBody })),
    setStep: setStep as React.Dispatch<React.SetStateAction<InspectionCreateStepsEnum>>,
    allBody,
  };

  switch (step) {
    case InspectionCreateStepsEnum.INJECTION_ZONES_1:
      return <InjectionZones1Step {...props} />;
    case InspectionCreateStepsEnum.CAMERA_PHOTO:
      return <InspectionPhotoStep {...props} />;
    case InspectionCreateStepsEnum.BEFORE_AFTER_COLLAGE:
      return <BeforeAfterCollageStep {...props} />;
    case InspectionCreateStepsEnum.MARK_POINTS:
      return <MarkPointsStep {...props} />;
    case InspectionCreateStepsEnum.INJECTION_ZONES_2:
      return <InjectionZones2Step {...props} />;
    case InspectionCreateStepsEnum.APPOINTMENT_COMPLETION:
      return <InspectionCompletionStep {...props} onComplete={onComplete} />;
    default:
      return <InjectionZones1Step {...props} />;
  }
};
