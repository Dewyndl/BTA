import React from 'react';
import { View } from 'react-native';
import { CameraPhotoPicker } from '../../../CameraPhotoPicker';
import type { IInspectionCreateStepProps } from '../../interfaces';
import { InspectionCreateStepsEnum } from '../../enums';
import { appointmentPhotoStepStyles } from '../../../AppointmentCreate/steps/AppointmentPhotoStep/styles';

const INSTRUCTION_TEXT = 'Сделайте фото зоны';
const PLACEHOLDER = 'Добавить фото';

export const InspectionPhotoStep = ({
  getBody,
  allBody,
  setStep,
}: IInspectionCreateStepProps) => {
  const photoUri = allBody.photoUri ? String(allBody.photoUri) : null;

  const handleConfirm = () => {
    setStep(InspectionCreateStepsEnum.BEFORE_AFTER_COLLAGE);
  };

  return (
    <View style={appointmentPhotoStepStyles.container}>
      <CameraPhotoPicker
        value={photoUri}
        onChange={(uri) => getBody({ ...allBody, photoUri: uri ?? '' })}
        instructionText={INSTRUCTION_TEXT}
        placeholder={PLACEHOLDER}
        onConfirm={handleConfirm}
      />
    </View>
  );
};
