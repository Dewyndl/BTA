import React, { useCallback, useMemo, useState } from 'react';
import {
  ZoneSetupWithMarkers,
  type ZoneMarkerItem,
} from '../../../ZoneSetupWithMarkers';
import { injectionZonesFake } from '../../../../../features';
import { IMAGES } from '../../../../../assets/images';
import type { IAppointmentCreateStepProps } from '../../interfaces';
import { AppointmentCreateStepsEnum } from '../../enums';

const DEFAULT_DESCRIPTION =
  'Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта. Проводим детальный анализ вашей ситуации и документов.';

const MARKER_POSITIONS: Array<{ top: string; left: string }> = [
  { top: '25%', left: '28%' },
  { top: '18%', left: '48%' },
  { top: '25%', left: '68%' },
];

const buildZonesFromBody = (allBody: Record<string, unknown>): ZoneMarkerItem[] => {
  const selectedIds = Array.isArray(allBody?.selectedZoneIds)
    ? (allBody.selectedZoneIds as string[])
    : [];
  const zoneList =
    selectedIds.length > 0
      ? selectedIds
          .map((id) => injectionZonesFake.find((z) => z.id === id))
          .filter((z): z is (typeof injectionZonesFake)[number] => z != null)
      : injectionZonesFake.slice(0, 3);

  return zoneList.map((zone, index) => ({
    id: zone.id,
    number: index + 1,
    title: zone.title,
    description: DEFAULT_DESCRIPTION,
    markerPosition: MARKER_POSITIONS[index % MARKER_POSITIONS.length],
  }));
};

export const ZoneSetupStep = ({
  getBody,
  allBody = {},
  setStep,
  nextStep,
}: IAppointmentCreateStepProps & { nextStep?: AppointmentCreateStepsEnum }) => {
  const skipInFuture = allBody?.skipPreparationStep === true;
  const [skipInFutureLocal, setSkipInFutureLocal] = useState(skipInFuture);

  const zones = useMemo(() => buildZonesFromBody(allBody), [allBody]);
  const firstZone = zones[0];
  const stepIndicator = firstZone ? `1 ${firstZone.title}` : '1';

  const handleSkipChange = useCallback(
    (value: boolean) => {
      setSkipInFutureLocal(value);
      getBody({ ...allBody, skipPreparationStep: value });
    },
    [allBody, getBody]
  );

  const handleComplete = useCallback(() => {
    const finalBody = { ...allBody, skipPreparationStep: skipInFutureLocal };
    getBody(finalBody);
    if (nextStep) setStep(nextStep);
  }, [allBody, getBody, nextStep, setStep, skipInFutureLocal]);

  const handleBack = useCallback(() => {
    setStep(AppointmentCreateStepsEnum.PREPARATION_DISTRIBUTION);
  }, [setStep]);

  return (
    <ZoneSetupWithMarkers
      faceImageSource={IMAGES.GLABELLA_ZONE}
      stepIndicator={stepIndicator}
      zones={zones}
      selectedZoneIndex={0}
      skipInFuture={skipInFutureLocal}
      onSkipChange={handleSkipChange}
      onComplete={handleComplete}
      onBackPress={handleBack}
    />
  );
};
