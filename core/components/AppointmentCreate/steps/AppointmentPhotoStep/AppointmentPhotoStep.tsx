import React from 'react';
import { View } from 'react-native';
import { CameraPhotoPicker } from '../../../CameraPhotoPicker';
import type { IAppointmentPhotoStepProps } from './interfaces';
import { DEFAULT_INSTRUCTION_TEXT, DEFAULT_PLACEHOLDER } from './constants';
import { appointmentPhotoStepStyles } from './styles';

export const AppointmentPhotoStep = ({
  getBody,
  allBody,
  setStep,
  onComplete,
  nextStep,
}: IAppointmentPhotoStepProps) => {
  const photoUri = allBody.photoUri ? String(allBody.photoUri) : null;

  const handleConfirm = () => {
    if (nextStep && setStep) {
      setStep(nextStep);
    } else {
      onComplete?.(allBody);
    }
  };

  return (
    <View style={appointmentPhotoStepStyles.container}>
      <CameraPhotoPicker
        value={photoUri}
        onChange={(uri) => getBody({ ...allBody, photoUri: uri ?? '' })}
        instructionText={DEFAULT_INSTRUCTION_TEXT}
        placeholder={DEFAULT_PLACEHOLDER}
        onConfirm={handleConfirm}
      />
    </View>
  );
};
