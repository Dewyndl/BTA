import React, { useCallback, useState } from 'react';
import type { AppointmentCreateStepsEnum } from '../../enums';
import { SingleSyringe } from '../../../SingleSyringe';
import type { IAppointmentCreateStepProps } from '../../interfaces';

export const SingleSyringeStep = ({
  getBody,
  allBody,
  setStep,
  nextStep,
}: IAppointmentCreateStepProps & { nextStep?: AppointmentCreateStepsEnum }) => {
  const skipInFuture = allBody?.skipPreparationStep === true;
  const [skipInFutureLocal, setSkipInFutureLocal] = useState(skipInFuture);

  const handleSkipChange = useCallback(
    (value: boolean) => {
      setSkipInFutureLocal(value);
      getBody({ ...allBody, skipPreparationStep: value });
    },
    [allBody, getBody]
  );

  const handleStartProcedure = useCallback(() => {
    const finalBody = { ...allBody, skipPreparationStep: skipInFutureLocal };
    getBody(finalBody);
    if (nextStep) setStep(nextStep);
  }, [allBody, getBody, nextStep, setStep, skipInFutureLocal]);

  return (
    <SingleSyringe
      skipInFuture={skipInFutureLocal}
      onSkipChange={handleSkipChange}
      onStartProcedure={handleStartProcedure}
    />
  );
};
