import { useRef, useState } from 'react';
import type { ScrollView } from 'react-native';
import type { BodyType } from '../../../common';
import { flexbox } from '../../design';
import { KeyboardAwareScrollView } from '../../uikit';
import { RegistrationStepsEnum } from './enums';
import { RegistrationStepBuilder } from './builder';
import { registrationStyles } from './styles';

export const Registration = () => {
  const scrollRef = useRef<ScrollView | null>(null);
  const [body, setBody] = useState<BodyType>({});
  const [registrationStep, setRegistrationStep] = useState<RegistrationStepsEnum>(
    RegistrationStepsEnum.PHONE_NAME
  );

  return (
    <KeyboardAwareScrollView
      ref={scrollRef}
      style={[registrationStyles.container, flexbox.alignCenter]}
      contentContainerStyle={flexbox.alignCenter}
      keyboardVerticalOffset={100}
    >
      <RegistrationStepBuilder
        step={registrationStep}
        getAllBody={(b) => setBody(b)}
        setStep={setRegistrationStep}
        body={body}
        scrollRef={scrollRef}
      />
    </KeyboardAwareScrollView>
  );
};