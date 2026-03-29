import React, { useCallback, useState } from 'react';
import { View, Linking, Pressable } from 'react-native';
import {
  Button,
  CustomText,
  FontsFamilyEnum,
  FontStyleEnum,
  FontWeightEnum,
  Form,
  FormInput,
  FormSubmitButton,
} from '../../../../uikit';
import { InputTextTypesEnum } from '../../../../uikit/InputText/enums';
import { CODE_SCHEMA } from '../../../../../features/store/entities/user/constants';
import { createRequiredSchema } from '../../../../../common/helpers/validation.helper';
import {
  useLoginUserMutation,
  useSendCodeMutation,
} from '../../../../../features/';
import type { LoginType } from '../../../../../features/store/entities/user';
import { aquaGradient, blackGradient, palette } from '../../../../design';
import { getTelegramBotLink, normalizePhone } from '../../../../../common';
import { MessageIcon } from '../../../../../assets';
import { IStepProps } from '../../interfaces';
import { RegistrationStepsEnum } from '../../enums';
import type { BodyType } from '../../../../../common';
import { confirmStepStyles } from './styles';

const CODE_MASK: import('react-native-mask-input').Mask = [/\d/, /\d/, /\d/, /\d/];

const PASSWORD_SCHEMA = createRequiredSchema(['code']);

const CONFIRM_TELEGRAM_INSTRUCTION =
  'Перейдите по ссылке, затем вернитесь в приложение и нажмите «Отправить код», после чего дождитесь кода и введите его.';

const CONFIRM_WHATSAPP_INSTRUCTION = 'Код подтверждения будет отправлен в WhatsApp на ваш номер.';

const CONFIRM_TITLE_BY_TYPE: Partial<Record<LoginType, string>> = {
  'telegram_id,phone': 'Код подтверждения в Телеграм',
  'whatsapp': 'Код подтверждения в WhatsApp',
};

export const ConfirmStep = ({ getBody, setStep, allBody, scrollRef }: IStepProps) => {
  const [loginUser, { isLoading: isLoggingIn }] = useLoginUserMutation();
  const [sendCode, { isLoading: isSendingCode }] = useSendCodeMutation();

  const [codeError, setCodeError] = useState<string | null>(null);

  const confirmType = (allBody?.confirmType as LoginType | undefined) ?? 'phone_code';
  const phone = normalizePhone(String(allBody?.phone ?? ''));
  const isTelegram = confirmType === 'telegram_id,phone';
  const isWhatsapp = confirmType === 'whatsapp';
  const title = CONFIRM_TITLE_BY_TYPE[confirmType] ?? 'Введите код подтверждения';
  const telegramLink = phone ? getTelegramBotLink(phone) : '';

  const handleSendCode = useCallback(async () => {
    if (!phone) return;
    await sendCode({ login: phone, type: confirmType });
  }, [phone, confirmType, sendCode]);

  const initialValues: BodyType = { ...allBody, code: allBody?.code ? String(allBody.code) : '' };

  const handleSubmit = useCallback(
    async (values: BodyType) => {
      const code = String(values?.code ?? '').trim();
      if (!phone || !code) return;
      setCodeError(null);

      const payload = { login: phone, type: confirmType, password: code };
      const loginRes = await loginUser(payload);
      if (!loginRes.data?.auth_hash) {
        setCodeError(confirmType === 'e-mail' ? 'Неверный пароль' : 'Неверный код');
        return;
      }

      getBody({ ...values, id: loginRes.data.auth_user?.u_id });
      setStep(RegistrationStepsEnum.PRIVACY);
    },
    [phone, confirmType, loginUser, getBody, setStep]
  );

  const isConfirming = isLoggingIn;

  return (
    <Form
      key="confirm"
      initialValues={initialValues}
      validationSchema={confirmType === 'e-mail' ? PASSWORD_SCHEMA : CODE_SCHEMA}
      onSubmit={handleSubmit}
      scrollRef={scrollRef}
    >
      <View>
        <View style={confirmStepStyles.titleContainer}>
          <MessageIcon />
          <CustomText
            value={title}
            textStyles={{
              fontStyle: FontStyleEnum.NORMAL,
              fontWeight: FontWeightEnum.MEDIUM,
              fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
              fontSize: 16,
              color: '#222221',
              textAlign: 'center',
            }}
          />
        </View>
        {isTelegram && (
          <>
            <CustomText
              value={CONFIRM_TELEGRAM_INSTRUCTION}
              variant="medium"
              fontSize={14}
              color={palette.textSecondary}
              customTextStyle={confirmStepStyles.instruction}
            />
            <View style={confirmStepStyles.linkContainer}>
              <Pressable onPress={() => telegramLink && Linking.openURL(telegramLink)}>
                <CustomText
                  value={telegramLink || 'Ссылка на бота'}
                  variant="medium"
                  fontSize={14}
                  color={palette.infoBlue}
                  customTextStyle={confirmStepStyles.linkText}
                />
              </Pressable>
            </View>
          </>
        )}
        {isWhatsapp && (
          <CustomText
            value={CONFIRM_WHATSAPP_INSTRUCTION}
            variant="medium"
            fontSize={14}
            color={palette.textSecondary}
            customTextStyle={confirmStepStyles.instruction}
          />
        )}
        <View style={confirmStepStyles.formContainer}>
          <FormInput
            name="code"
            placeholder={confirmType === 'e-mail' ? 'Введите пароль' : 'Введите код'}
            textInputType={confirmType === 'e-mail' ? InputTextTypesEnum.PASSWORD : InputTextTypesEnum.DEFAULT}
            mask={confirmType === 'e-mail' ? undefined : CODE_MASK}
            centerText={true}
          />
          {confirmType !== 'e-mail' && (
            <Button
              label="Отправить код"
              textColor="#FFF"
              gradient={aquaGradient}
              onPress={handleSendCode}
              isLoading={isSendingCode}
            />
          )}
          {codeError && (
            <CustomText value={codeError} variant="medium" fontSize={13} color="#E53935" />
          )}
          <FormSubmitButton
            label="Подтвердить"
            textColor="#FFF"
            gradient={aquaGradient}
            isDisabled={isConfirming}
          />
          <Button
            label="Отправить на другой номер"
            textColor="#FFF"
            gradient={blackGradient}
            onPress={() => { getBody({}); setStep(RegistrationStepsEnum.PHONE_NAME); }}
          />
        </View>
      </View>
    </Form>
  );
};
