import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { Image, NativeModules, View } from 'react-native';
import {
  CustomText,
  FontsFamilyEnum,
  FontStyleEnum,
  FontWeightEnum,
  Form,
  FormInput,
  FormSubmitButton,
  InputTextTypesEnum,
} from '../../../../uikit';
import { Button } from '../../../../uikit';
import { createRequiredSchema } from '../../../../../common/helpers/validation.helper';
import { aquaGradient, flexbox } from '../../../../design';
import { AddUserIcon, IMAGES } from '../../../../../assets';
import { IStepProps } from '../../interfaces';
import { RegistrationStepsEnum } from '../../enums';
import { BodyType, normalizePhone } from '../../../../../common';
import { phoneNameStepStyles } from './styles/phone-name-step.style';
import { PHONE_MASK, useRegistrationUserMutation, useLogoutUserMutation, setPendingCredentials } from '../../../../../features';
import type { ValidationSchema } from '../../../../../common/types';
import { useDispatch } from 'react-redux';

const VALIDATION_SCHEMA: ValidationSchema = {
  ...createRequiredSchema(['phone', 'name']),
  phone: [
    { type: 'required' as const, message: 'Введите номер телефона' },
    { type: 'phone' as const, message: 'Введите полный номер (+7 XXX XXX-XX-XX)' },
  ],
  name: [
    { type: 'required' as const, message: 'Введите имя пользователя' },
    { type: 'pattern' as const, value: /^[А-Яа-яёЁA-Za-z\s]+$/, message: 'Введите имя пользователя' },
  ],
};

const INITIAL_VALUES = {
  phone: '',
  name: '',
};

export const PhoneNameStep = ({ getBody, setStep, allBody, scrollRef }: IStepProps) => {
  const dispatch = useDispatch();
  const [registrationUser] = useRegistrationUserMutation();
  const [logoutUser] = useLogoutUserMutation();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (values: BodyType) => {
    setSubmitError(null);
    await logoutUser().catch(() => {});
    await AsyncStorage.multiRemove(['token', 'u_hash', 'u_a_role']);
    await new Promise<void>((resolve) => {
      NativeModules.Networking?.clearCookies(() => resolve()) ?? resolve();
    });
    const res = await registrationUser({ u_phone: normalizePhone(String(values.phone)), u_role: '2', st: '1' });
    if ('error' in res || res.data?.code !== '200') {
      console.log('[REG ERROR]', JSON.stringify(res));
      if (res.data?.message === 'busy user data: double phone') {
        setSubmitError('Этот номер уже зарегистрирован в системе');
      } else {
        setSubmitError('Произошла ошибка. Попробуйте ещё раз.');
      }
      return;
    }
    dispatch(setPendingCredentials({ token: res.data.data.token, u_hash: res.data.data.u_hash }));
    getBody(values);
    setStep(RegistrationStepsEnum.CONFIRM_TYPE);
  };

  return (
    <Form
      key="phone-name"
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
      scrollRef={scrollRef}
    >
      <View style={phoneNameStepStyles.container}>
        <View style={[flexbox.alignCenter, phoneNameStepStyles.imageContainer]}>
          <Image source={IMAGES.LOGO} />
        </View>
        <View style={phoneNameStepStyles.formContainer}>
          <View>
            <CustomText
              value="Новый пользователь"
              textStyles={{
                fontStyle: FontStyleEnum.NORMAL,
                fontWeight: FontWeightEnum.MEDIUM,
                fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
                fontSize: 18,
                color: '#424242',
                textAlign: 'center',
              }}
            />
          </View>
          <FormInput
            name="phone"
            placeholder="+ 7 (---) --- -- --"
            defaultValue={allBody.phone ? String(allBody.phone) : ''}
            textInputType={InputTextTypesEnum.DEFAULT}
            mask={PHONE_MASK}
          />
          <FormInput
            name="name"
            placeholder="Ваше имя"
            defaultValue={allBody.name ? String(allBody.name) : ''}
            textInputType={InputTextTypesEnum.DEFAULT}
            filter={(text) => text.replace(/[^А-Яа-яёЁA-Za-z\s]/g, '')}
          />
          <FormSubmitButton
            label="Подтвердить"
            textColor="#FFF"
            gradient={aquaGradient}
          />
          {submitError && (
            <CustomText
              value={submitError}
              textStyles={{ color: '#E53935', fontSize: 13, textAlign: 'center', marginTop: 8 }}
            />
          )}
        </View>
        <View style={[flexbox.alignCenter, phoneNameStepStyles.bottomContainer]}>
          <Button
            label="Проблемы с регистрацией?"
            textColor="#222221"
            maxWidth={160}
            textCenter={true}
            noFillDefaultStyles={true}
          />
        </View>
      </View>
    </Form>
  );
};
