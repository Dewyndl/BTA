import React, { useCallback, useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, CustomText, FontsFamilyEnum, FontStyleEnum, FontWeightEnum, SlideBtn } from '../../../../uikit';
import { aquaGradient, blackGradient, flexbox } from '../../../../design';
import { LinesIcon, MessageIcon } from '../../../../../assets';
import { IStepProps } from '../../interfaces';
import { RegistrationStepsEnum } from '../../enums';
import { confirmTypeStepStyles } from './styles';
import { CONFIRM_METHOD_TO_LOGIN_TYPE, type ConfirmMethod } from './constants';
import { useSendCodeMutation } from '../../../../../features/';
import { normalizePhone } from '../../../../../common';

const STORAGE_KEY = 'registration_confirm_method';

export const ConfirmTypeStep = ({ getBody, setStep, allBody }: IStepProps) => {
  const [selectedMethod, setSelectedMethod] = useState<ConfirmMethod | null>('sms');
  const [rememberChoice, setRememberChoice] = useState(false);
  const [sendCode] = useSendCodeMutation();

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((saved) => {
      if (saved) {
        setSelectedMethod(saved as ConfirmMethod);
      }
    });
  }, []);

  const handleSendCode = useCallback(async () => {
    const method = selectedMethod;
    if (!method) return;
    const confirmType = CONFIRM_METHOD_TO_LOGIN_TYPE[method];
    const phone = normalizePhone(String(allBody?.phone ?? ''));

    if (rememberChoice) {
      await AsyncStorage.setItem(STORAGE_KEY, method);
    }

    const sendRes = await sendCode({ login: phone, type: confirmType });
    if ('error' in sendRes || sendRes.data?.code !== '200') {
      Alert.alert('Ошибка', 'Не удалось отправить код. Попробуйте ещё раз.');
      return;
    }

    getBody({ ...allBody, confirmType });
    setStep(RegistrationStepsEnum.CONFIRM);
  }, [selectedMethod, rememberChoice, getBody, setStep, allBody, sendCode]);

  return (
    <View style={confirmTypeStepStyles.container}>
      <View style={[flexbox.alignCenter, confirmTypeStepStyles.titleContainer]}>
        <MessageIcon />
        <View style={confirmTypeStepStyles.title}>
          <CustomText
            value="Получите код подтверждения удобным способом:"
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
        <CustomText
          value={String(allBody?.phone ?? '')}
          textStyles={{
            fontStyle: FontStyleEnum.NORMAL,
            fontWeight: FontWeightEnum.MEDIUM,
            fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
            fontSize: 14,
            color: '#1F7876',
            textAlign: 'center',
          }}
        />
      </View>
      <View style={confirmTypeStepStyles.itemsContainer}>
        <View style={[flexbox.directionRow, flexbox.alignCenter, confirmTypeStepStyles.item]}>
          <LinesIcon />
          <SlideBtn
            title="Telegram"
            customStyles={confirmTypeStepStyles.checkbox}
            checked={selectedMethod === 'telegram_id,phone'}
            onValueChange={(v) => setSelectedMethod(v ? 'telegram_id,phone' : 'sms')}
          />
        </View>
        <View style={[flexbox.directionRow, flexbox.alignCenter, confirmTypeStepStyles.item]}>
          <LinesIcon />
          <SlideBtn
            title="WhatsApp"
            customStyles={confirmTypeStepStyles.checkbox}
            checked={selectedMethod === 'whatsapp'}
            onValueChange={(v) => setSelectedMethod(v ? 'whatsapp' : 'sms')}
          />
        </View>
        <View style={[flexbox.directionRow, flexbox.alignCenter, confirmTypeStepStyles.item]}>
          <LinesIcon />
          <SlideBtn
            title="SMS"
            customStyles={confirmTypeStepStyles.checkbox}
            checked={selectedMethod === 'sms'}
            onValueChange={(v) => setSelectedMethod(v ? 'sms' : null)}
          />
        </View>
        <View style={[flexbox.directionRow, flexbox.alignCenter, confirmTypeStepStyles.item]}>
          <LinesIcon />
          <SlideBtn
            title="Email"
            customStyles={confirmTypeStepStyles.checkbox}
            checked={selectedMethod === 'email'}
            onValueChange={(v) => setSelectedMethod(v ? 'email' : 'sms')}
          />
        </View>
      </View>
      <View style={confirmTypeStepStyles.rememberContainer}>
        <SlideBtn title="Запомнить мой выбор" customStyles={confirmTypeStepStyles.checkbox} checked={rememberChoice} onValueChange={(v) => setRememberChoice(v)} />
      </View>
      <View style={confirmTypeStepStyles.buttonsContainer}>
        <Button
          label="Отправить код"
          textColor="#FFF"
          gradient={aquaGradient}
          customButtonStyles={confirmTypeStepStyles.button}
          onPress={handleSendCode}
          disabled={!selectedMethod}
        />
        <Button
          label="Отправить на другой номер"
          textColor="#FFF"
          gradient={blackGradient}
          onPress={() => {
            getBody({});
            setStep(RegistrationStepsEnum.PHONE_NAME);
          }}
        />
      </View>
    </View>
  );
};
