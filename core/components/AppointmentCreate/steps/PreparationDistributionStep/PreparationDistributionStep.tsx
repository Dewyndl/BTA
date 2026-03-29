import React from 'react';
import { PreparationDistributionSelect, PreparationDistributionType } from '../../../PreparationDistributionSelect';
import type { IPreparationDistributionStepProps } from './interfaces';
import { BodyType, NullableType } from '../../../../../common/types';
import { AppointmentCreateStepsEnum } from '../../enums';

const VALUE_SINGLE: PreparationDistributionType = 'single_syringe';

export const PreparationDistributionStep = ({
  getBody,
  allBody,
  setStep,
}: IPreparationDistributionStepProps) => {
  const value = (allBody?.preparationDistributionType as NullableType<PreparationDistributionType>) ?? null;
  const preparationName = typeof allBody?.preparationName === 'string' ? allBody.preparationName : '';
  const skipInFuture = allBody?.skipPreparationStep === true;

  const handleChange = (partial: Partial<BodyType>) => {
    getBody({ ...allBody, ...(partial as BodyType) });
  };

  const handleSubmit = () => {
    getBody(allBody ?? {});
    const nextStep =
      value === VALUE_SINGLE
        ? AppointmentCreateStepsEnum.SINGLE_SYRINGE
        : AppointmentCreateStepsEnum.ZONE_SETUP;
    setStep(nextStep);
  };

  return (
    <PreparationDistributionSelect
      value={value}
      preparationName={preparationName}
      skipInFuture={skipInFuture}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};
