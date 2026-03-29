import React, { useCallback, useMemo, useState } from 'react';
import { BeforeAfterCollage } from '../../../BeforeAfterCollage';
import type { IInjectionZone } from '../../../../../features/store/entities/injection-zones/interfaces';
import { injectionZonesFake } from '../../../../../features';
import type { IInspectionCreateStepProps } from '../../interfaces';
import { InspectionCreateStepsEnum } from '../../enums';

const getZoneTitle = (zoneId: string) => {
  const zone = injectionZonesFake.find((z: IInjectionZone) => z.id === zoneId);
  return zone?.title ?? 'Межбровье';
};

export const BeforeAfterCollageStep = (props: IInspectionCreateStepProps) => {
  const { getBody, allBody, setStep } = props;

  const selectedZoneIds = Array.isArray(allBody?.selectedZoneIds)
    ? (allBody.selectedZoneIds as string[])
    : [];
  const zoneLabel = useMemo(
    () => getZoneTitle(selectedZoneIds[0] ?? '2'),
    [selectedZoneIds]
  );
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [sendCollageToPatient, setSendCollageToPatient] = useState(true);

  const handleOptionSelect = useCallback((index: number) => {
    setSelectedOptionIndex(index);
    getBody({ ...allBody, collageEvaluationIndex: index });
  }, [allBody, getBody]);

  const handleSendCollageChange = useCallback(
    (value: boolean) => {
      setSendCollageToPatient(value);
      getBody({ ...allBody, sendCollageToPatient: value });
    },
    [allBody, getBody]
  );

  const handleConfirm = useCallback(() => {
    getBody({ ...allBody, collageEvaluationIndex: selectedOptionIndex, sendCollageToPatient });
    setStep(InspectionCreateStepsEnum.MARK_POINTS);
  }, [allBody, getBody, selectedOptionIndex, sendCollageToPatient, setStep]);

  return (
    <BeforeAfterCollage
      stepNumber={4}
      zoneLabel={zoneLabel}
      selectedOptionIndex={selectedOptionIndex}
      onOptionSelect={handleOptionSelect}
      sendCollageToPatient={sendCollageToPatient}
      onSendCollageChange={handleSendCollageChange}
      onConfirm={handleConfirm}
    />
  );
};
