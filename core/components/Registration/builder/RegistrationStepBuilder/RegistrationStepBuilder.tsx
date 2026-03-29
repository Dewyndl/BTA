import React, { useEffect, useState } from 'react'
import { IRegistrationStepBuilderProps } from './interfaces'
import { RegistrationStepsEnum } from '../../enums'
import {
  ConfirmStep,
  ConfirmTypeStep,
  InfoStep,
  PhoneNameStep,
  PrivacyStep,
  SuccessStep,
} from '../../steps';
import { BodyType } from '../../../../../common'
import { IStepProps } from '../../interfaces'

export const RegistrationStepBuilder = ({
  step,
  getAllBody,
  setStep,
  body,
  scrollRef,
}: IRegistrationStepBuilderProps) => {
  const [allBody, setAllBody] = useState<BodyType>(() => body);

  useEffect(() => {
    getAllBody(allBody);
  }, [allBody]);

  const props: IStepProps = {
    getBody: (part) => setAllBody((prev) => ({ ...prev, ...part })),
    setStep,
    allBody,
    scrollRef,
  };

  switch (step) {
    case RegistrationStepsEnum.PHONE_NAME:
      return <PhoneNameStep {...props} />;
    case RegistrationStepsEnum.CONFIRM_TYPE:
      return <ConfirmTypeStep {...props} />;
    case RegistrationStepsEnum.CONFIRM:
      return <ConfirmStep {...props} />;
    case RegistrationStepsEnum.INFO:
      return <InfoStep {...props} />;
    case RegistrationStepsEnum.PRIVACY:
      return <PrivacyStep {...props} />;
    case RegistrationStepsEnum.SUCCESS:
      return <SuccessStep {...props} />;
  }
}
