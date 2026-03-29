import React, { useCallback, useMemo, useState } from 'react';
import type { AppointmentCreateStepsEnum } from '../../enums';
import { MultipleSyringes, type MultipleSyringeZone } from '../../../MultipleSyringes';
import { injectionZonesFake } from '../../../../../features';
import type { IAppointmentCreateStepProps } from '../../interfaces';

const DEFAULT_ZONE_DOSAGE = 10;

const buildZonesFromBody = (allBody: Record<string, unknown>): MultipleSyringeZone[] => {
  const selectedIds = Array.isArray(allBody?.selectedZoneIds)
    ? (allBody.selectedZoneIds as string[])
    : [];
  if (selectedIds.length === 0) {
    return injectionZonesFake.slice(0, 3).map((z) => ({
      id: z.id,
      title: z.title,
      dosage: DEFAULT_ZONE_DOSAGE,
      imageUrl: z.imageUrl,
    }));
  }
  return selectedIds
    .map((id) => {
      const zone = injectionZonesFake.find((z) => z.id === id);
      if (!zone) return null;
      return {
        id: zone.id,
        title: zone.title,
        dosage: DEFAULT_ZONE_DOSAGE,
        imageUrl: zone.imageUrl,
      };
    })
    .filter((z): z is MultipleSyringeZone => z !== null);
};

export const MultipleSyringesStep = ({
  getBody,
  allBody = {},
  setStep,
  nextStep,
}: IAppointmentCreateStepProps & { nextStep?: AppointmentCreateStepsEnum }) => {
  const skipInFuture = allBody?.skipPreparationStep === true;
  const [skipInFutureLocal, setSkipInFutureLocal] = useState(skipInFuture);

  const zones = useMemo(() => buildZonesFromBody(allBody), [allBody]);

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
    <MultipleSyringes
      zones={zones}
      skipInFuture={skipInFutureLocal}
      onSkipChange={handleSkipChange}
      onStartProcedure={handleStartProcedure}
    />
  );
};
