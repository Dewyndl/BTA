import React from 'react';
import { HintModal } from '../../../HintModal';
import type { IFollowUpAppointmentCreateStepProps } from '../../interfaces';
import { FollowUpAppointmentCreateStepsEnum } from '../../enums';

type HintModalStepProps = IFollowUpAppointmentCreateStepProps & {
  onComplete?: () => void;
};

export const HintModalStep = ({ setStep, onComplete }: HintModalStepProps) => {
  const handleConfirm = () => {
    onComplete?.();
  };

  const handleCancel = () => {
    setStep(FollowUpAppointmentCreateStepsEnum.PROCEDURE_2);
  };

  return (
    <HintModal
      isVisible
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    />
  );
};
