import { useState, useEffect } from 'react';
import { Image, View, Text } from 'react-native';
import { Button, CustomText, FontsFamilyEnum, FontStyleEnum, FontWeightEnum, Form, FormCheckbox } from '../../../../uikit';
import { useFormContext } from '../../../../uikit/Form/context/form-context';
import type { ValidationSchema } from '../../../../../common/types';
import { aquaGradient, flexbox } from '../../../../design';
import { IMAGES } from '../../../../../assets';
import { IStepProps } from '../../interfaces';
import { RegistrationStepsEnum } from '../../enums';
import { BodyType } from '../../../../../common';
import { privacyStepStyles } from './styles';

const VALIDATION_SCHEMA: ValidationSchema = {
  publicOffer: [{ type: 'custom' as const, validate: (v) => (v ? null : 'Необходимо согласие с офертой') }],
  privacy: [{ type: 'custom' as const, validate: (v) => (v ? null : 'Необходимо согласие на обработку данных') }],
};

const PrivacySubmitArea = () => {
  const { values, handleSubmit } = useFormContext();
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (values.publicOffer && values.privacy) {
      setShowError(false);
    }
  }, [values.publicOffer, values.privacy]);

  const onPress = () => {
    if (!values.publicOffer || !values.privacy) {
      setShowError(true);
      return;
    }
    setShowError(false);
    handleSubmit();
  };

  return (
    <View style={privacyStepStyles.buttonsContainer}>
      <Button
        label="Подтвердить"
        textColor="#FFF"
        gradient={aquaGradient}
        onPress={onPress}
      />
      {showError && (
        <Text style={{ color: '#D7131F', textAlign: 'center', marginTop: 8 }}>
          Пожалуйста, подтвердите своё согласие с юридическими положениями BTA Assist
        </Text>
      )}
    </View>
  );
};

export const PrivacyStep = ({ getBody, setStep, allBody, scrollRef }: IStepProps) => {
  const handleSubmit = (values: BodyType) => {
    getBody({ ...allBody, ...values });
    setStep(RegistrationStepsEnum.INFO);
  };

  return (
    <Form
      key="privacy"
      initialValues={{
        ...allBody,
        publicOffer: !!allBody.publicOffer,
        privacy: !!allBody.privacy,
      }}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
      scrollRef={scrollRef}
    >
      <View style={privacyStepStyles.container}>
        <View style={[flexbox.alignCenter, privacyStepStyles.titleContainer]}>
          <Image
            source={IMAGES.LOGO}
            style={{ width: 110, height: 66, objectFit: 'cover' }}
          />
          <CustomText
            value="BTA Assist — рекомендательный инструмент для врача-косметолога. Окончательное решение принимается специалистом. Приложение не гарантирует 100% результат."
            textStyles={{
              fontStyle: FontStyleEnum.NORMAL,
              fontWeight: FontWeightEnum.MEDIUM,
              fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
              fontSize: 16,
              color: '#424242',
              textAlign: 'center',
            }}
          />
        </View>
        <View style={privacyStepStyles.checkboxesContainer}>
          <FormCheckbox
            name="publicOffer"
            title="Регистрируясь, я подтверждаю, что ознакомился и даю своё согласие с публичной офертой"
          />
          <FormCheckbox
            name="privacy"
            title="Регистрируясь, я даю разрешение на обработку своих персональных данных в соответствие с действующей политикой конфиденциальности"
          />
        </View>
        <PrivacySubmitArea />
      </View>
    </Form>
  );
};
