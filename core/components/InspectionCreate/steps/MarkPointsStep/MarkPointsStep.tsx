import React, { useCallback } from 'react';
import { MarkPointsOnPhoto } from '../../../MarkPointsOnPhoto';
import { IMAGES } from '../../../../../assets/images';
import { injectionZonesFake } from '../../../../../features';
import type { IInspectionCreateStepProps } from '../../interfaces';
import { InspectionCreateStepsEnum } from '../../enums';

const getZoneImage = (zoneId: string) => {
  const zone = injectionZonesFake.find((z) => z.id === zoneId);
  return zone?.imageUrl ?? IMAGES.FOREHEAD_ZONE;
};

const getZoneTitle = (zoneId: string) => {
  const zone = injectionZonesFake.find((z) => z.id === zoneId);
  return zone?.title ?? 'Лоб';
};

export const MarkPointsStep = (props: IInspectionCreateStepProps) => {
  const { allBody, setStep } = props;

  const selectedZoneIds = Array.isArray(allBody?.selectedZoneIds)
    ? (allBody.selectedZoneIds as string[])
    : [];
  const firstZoneId = selectedZoneIds[0] ?? '1';

  const handleConfirm = useCallback(() => {
    setStep(InspectionCreateStepsEnum.INJECTION_ZONES_2);
  }, [setStep]);

  return (
    <MarkPointsOnPhoto
      zoneLabel={getZoneTitle(firstZoneId)}
      imageSource={getZoneImage(firstZoneId)}
      stepNumber={2}
      onConfirm={handleConfirm}
    />
  );
};
