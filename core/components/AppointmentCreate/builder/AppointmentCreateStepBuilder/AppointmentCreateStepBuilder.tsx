import React, { useEffect, useState } from 'react';
import type { BodyType } from '../../../../../common';
import type { IAppointmentCreateStepBuilderProps } from './interfaces';
import { AppointmentCreateStepsEnum } from '../../enums';
import { AppointmentProcedure } from '../../../AppointmentProcedure';
import { InjectionZonesSelect, type InjectionZonesSelectProps } from '../../../InjectionZonesSelect';
import { NewAppointmentForm } from '../../../NewAppointmentForm';
import {
  AppointmentPhotoStep,
  InjectionIntensityStep,
  PreparationDistributionStep,
  SingleSyringeStep,
  MultipleSyringesStep,
  ZoneSetupStep,
  AppointmentCompletionStep,
} from '../../steps';

export const AppointmentCreateStepBuilder = ({
  step,
  getAllBody,
  setStep,
  body,
  onComplete,
}: IAppointmentCreateStepBuilderProps) => {
  const [allBody, setAllBody] = useState<BodyType>(body);

  useEffect(() => {
    getAllBody(allBody);
  }, [allBody, getAllBody]);

  const props = {
    getBody: (partialBody: BodyType) => setAllBody((prev) => ({ ...prev, ...partialBody })),
    setStep,
    allBody,
  };

  switch (step) {
    case AppointmentCreateStepsEnum.PATIENT_FORM:
      return <NewAppointmentForm {...props} />;
    case AppointmentCreateStepsEnum.PROCEDURE:
      return <AppointmentProcedure {...props} />;
    case AppointmentCreateStepsEnum.INJECTION_ZONES:
      return <InjectionZonesSelect {...(props as InjectionZonesSelectProps)} />;
    case AppointmentCreateStepsEnum.PHOTO:
      return (
        <AppointmentPhotoStep
          {...props}
          nextStep={AppointmentCreateStepsEnum.INJECTION_INTENSITY}
          onComplete={onComplete}
        />
      );
    case AppointmentCreateStepsEnum.INJECTION_INTENSITY:
      return (
        <InjectionIntensityStep
          {...props}
          nextStep={AppointmentCreateStepsEnum.PREPARATION_DISTRIBUTION}
          onComplete={onComplete}
        />
      );
    case AppointmentCreateStepsEnum.PREPARATION_DISTRIBUTION:
      return <PreparationDistributionStep {...props} />;
    case AppointmentCreateStepsEnum.SINGLE_SYRINGE:
      return (
        <SingleSyringeStep
          {...props}
          nextStep={AppointmentCreateStepsEnum.APPOINTMENT_COMPLETION}
        />
      );
    case AppointmentCreateStepsEnum.MULTIPLE_SYRINGES:
      return (
        <MultipleSyringesStep
          {...props}
          nextStep={AppointmentCreateStepsEnum.APPOINTMENT_COMPLETION}
        />
      );
    case AppointmentCreateStepsEnum.ZONE_SETUP:
      return (
        <ZoneSetupStep
          {...props}
          nextStep={AppointmentCreateStepsEnum.APPOINTMENT_COMPLETION}
        />
      );
    case AppointmentCreateStepsEnum.APPOINTMENT_COMPLETION:
      return <AppointmentCompletionStep {...props} onComplete={onComplete} />;
    default:
      return <NewAppointmentForm {...props} />;
  }
};
