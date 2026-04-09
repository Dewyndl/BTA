import { Alert, Image, Linking, NativeModules, Pressable, View } from 'react-native';
import { IMAGES } from '../../../assets';
import { KeyboardAwareScrollView } from '../../uikit';
import {
  Button,
  CustomText,
  Form,
  FormInput,
  FormSubmitButton,
} from '../../uikit';
import { InputTextTypesEnum } from '../../uikit/InputText/enums';
import {
  CODE_MASK,
  CODE_SCHEMA,
  LOGIN_FORM_INITIAL_VALUES,
  PHONE_MASK,
  PHONE_SCHEMA,
  fillUser,
  useGetTokenMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useSendCodeMutation,
} from '../../../features';
import type { LoginType } from '../../../features';
import { useDispatch } from 'react-redux';
import { aquaGradient, blackGradient, flexbox, palette } from '../../design';
import { loginStyles } from './styles';
import type { ILoginProps } from './interfaces';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getTelegramBotLink, normalizePhone } from '../../../common';
import {
  CONFIRM_METHOD_TO_LOGIN_TYPE,
  type ConfirmMethod,
} from '../Registration/steps/ConfirmTypeStep/constants';
import {
  DEFAULT_CONFIRM_METHODS_ORDER,
  LOGIN_CONFIRM_METHODS_STORAGE_KEY,
} from './constants/login-confirm.constants';
import { LoginConfirmTypeStep } from './LoginConfirmTypeStep';

const onHelpDefault = () => {};

type LoginStep = 'phone' | 'confirm_type' | 'code' | 'not_found';

const loadStoredOrder = async (): Promise<ConfirmMethod[]> => {
  try {
    const stored = await AsyncStorage.getItem(LOGIN_CONFIRM_METHODS_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as ConfirmMethod[];
      const valid = parsed.filter((m) =>
        ['telegram_id,phone', 'whatsapp', 'sms', 'email'].includes(m)
      );
      return valid.length > 0 ? valid : DEFAULT_CONFIRM_METHODS_ORDER;
    }
  } catch {
    // ignore
  }
  return DEFAULT_CONFIRM_METHODS_ORDER;
};

const saveOrder = async (order: ConfirmMethod[]): Promise<void> => {
  try {
    await AsyncStorage.setItem(
      LOGIN_CONFIRM_METHODS_STORAGE_KEY,
      JSON.stringify(order)
    );
  } catch {
    // ignore
  }
};

export const Login = ({ onHelpPress = onHelpDefault }: ILoginProps) => {
  const dispatch = useDispatch();
  const scrollRef = useRef<ScrollView | null>(null);
  const [login, setLogin] = useState('');
  const [confirmType, setConfirmType] = useState<LoginType>('phone_code');
  const [order, setOrder] = useState<ConfirmMethod[]>(DEFAULT_CONFIRM_METHODS_ORDER);
  const [sendIndex, setSendIndex] = useState(0);
  const [step, setStep] = useState<LoginStep>('phone');
  const [codeError, setCodeError] = useState<string | null>(null);
  const [loginUser] = useLoginUserMutation();
  const [logoutUser] = useLogoutUserMutation();
  const [sendCode] = useSendCodeMutation();
  const [getToken] = useGetTokenMutation();

  useEffect(() => {
    loadStoredOrder().then(setOrder);
  }, []);

  const handleOrderChange = useCallback((newOrder: ConfirmMethod[]) => {
    setOrder(newOrder);
    saveOrder(newOrder);
  }, []);

  const handlePhoneSubmit = (values: { login?: string; code?: string }) => {
    const phone = normalizePhone(String(values.login ?? '').trim());
    setLogin(phone);
    setStep('confirm_type');
  };

  const handleRequestSendCode = useCallback(async () => {
    if (order.length === 0) return;
    const index = sendIndex % order.length;
    const method = order[index];
    const type = CONFIRM_METHOD_TO_LOGIN_TYPE[method];
    setConfirmType(type);
    setSendIndex((i) => i + 1);
    if (type === 'e-mail') {
      setStep('code');
      return;
    }
    const res = await sendCode({ login, type });
    if ('error' in res) {
      Alert.alert('Ошибка', 'Не удалось отправить код. Попробуйте ещё раз.');
      return;
    }
    if (res.data?.code === '404') {
      setStep('not_found');
      return;
    }
    if (res.data?.code !== '200') {
      Alert.alert('Ошибка', 'Не удалось отправить код. Попробуйте ещё раз.');
      return;
    }
    setStep('code');
  }, [order, sendIndex, login, sendCode]);

  const handleCodeSubmit = async (values: { login?: string; code?: string }) => {
    const code = String(values.code ?? '').trim();
    const loginValue = confirmType === 'e-mail'
      ? String(values.login ?? '').trim()
      : String(values.login ?? login ?? '').trim();
    setCodeError(null);
    await logoutUser().catch(() => {});
    await AsyncStorage.multiRemove(['token', 'u_hash', 'u_a_role']);
    await new Promise<void>((resolve) => {
      NativeModules.Networking?.clearCookies(() => resolve()) ?? resolve();
    });
    console.log('[LOGIN PAYLOAD]', JSON.stringify({ login: loginValue, type: confirmType }));
    const payload = { login: loginValue, type: confirmType, password: code };
    loginUser(payload).then((res) => {
      const auth_hash = res.data?.auth_hash;
      const stepOneUser = res.data?.auth_user;
      if (auth_hash) {
        getToken({ auth_hash }).then(res => {
          if (res.data) {
            AsyncStorage.setItem('token', res.data.data.token);
            AsyncStorage.setItem('u_hash', res.data.data.u_hash);
            const tokenUser = res.data.auth_user;
            if (tokenUser?.u_a_role) {
              AsyncStorage.setItem('u_a_role', tokenUser.u_a_role);
            }
            const userToStore = stepOneUser ?? tokenUser;
            if (userToStore) {
              dispatch(fillUser(userToStore));
            }
          }
        }).catch(() => setCodeError('Ошибка сети'));
      } else {
        setCodeError(confirmType === 'e-mail' ? 'Неверный пароль' : 'Неверный код');
      }
    }).catch(() => setCodeError('Ошибка сети'));
  };


  if (step === 'not_found') {
    return (
      <KeyboardAwareScrollView
        ref={scrollRef}
        style={[loginStyles.container, flexbox.alignCenter]}
        contentContainerStyle={flexbox.alignCenter}
        keyboardVerticalOffset={100}
      >
        <View style={[loginStyles.imageContainer, flexbox.alignCenter]}>
          <Image source={IMAGES.LOGO} />
        </View>
        <View style={[flexbox.alignCenter, { paddingHorizontal: 32, gap: 12 }]}>
          <CustomText
            value="Введите номер"
            variant="medium"
            fontSize={16}
            color="#E53935"
            textAlign="center"
          />
          <CustomText
            value="Указанный номер не найден в системе"
            variant="medium"
            fontSize={14}
            color="#E53935"
            textAlign="center"
          />
        </View>
        <View style={[loginStyles.bottomContainer, flexbox.alignCenter]}>
          <Button
            label="назад"
            textColor={palette.textPrimary}
            maxWidth={80}
            textCenter={true}
            noFillDefaultStyles={true}
            onPress={() => setStep('phone')}
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }

  if (step === 'confirm_type') {
    return (
      <KeyboardAwareScrollView
        ref={scrollRef}
        style={[loginStyles.container, flexbox.alignCenter]}
        contentContainerStyle={flexbox.alignCenter}
        keyboardVerticalOffset={100}
      >
        <View style={[loginStyles.imageContainer, flexbox.alignCenter]}>
          <Image source={IMAGES.LOGO} />
        </View>
        <LoginConfirmTypeStep
          phone={login}
          order={order}
          onOrderChange={handleOrderChange}
          onRequestSendCode={handleRequestSendCode}
          onBack={() => setStep('phone')}
        />
        <View style={[loginStyles.bottomContainer, flexbox.alignCenter]}>
          <Button
            label="Проблемы со входом в приложение?"
            textColor={palette.textPrimary}
            maxWidth={160}
            textCenter={true}
            noFillDefaultStyles={true}
            onPress={onHelpPress}
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }

  return (
    <KeyboardAwareScrollView
      ref={scrollRef}
      style={[loginStyles.container, flexbox.alignCenter]}
      contentContainerStyle={flexbox.alignCenter}
      keyboardVerticalOffset={100}
    >
      <View style={[loginStyles.imageContainer, flexbox.alignCenter]}>
        <Image source={IMAGES.LOGO} />
      </View>
      <Form
        key={step}
        initialValues={step === 'code' ? (confirmType === 'e-mail' ? LOGIN_FORM_INITIAL_VALUES : { ...LOGIN_FORM_INITIAL_VALUES, login }) : LOGIN_FORM_INITIAL_VALUES}
        validationSchema={step === 'code' ? CODE_SCHEMA : PHONE_SCHEMA}
        onSubmit={step === 'code' ? handleCodeSubmit : handlePhoneSubmit}
        scrollRef={scrollRef}
      >
        <View style={loginStyles.buttonContainer}>
          {step === 'code' ? (
            <>
              {confirmType === 'e-mail' && (
                <FormInput
                  name="login"
                  placeholder="Введите e-mail"
                  textInputType={InputTextTypesEnum.DEFAULT}
                />
              )}
              <FormInput
                name="code"
                placeholder={confirmType === 'e-mail' ? 'Введите пароль' : 'Введите 4-значный код'}
                textInputType={confirmType === 'e-mail' ? InputTextTypesEnum.PASSWORD : InputTextTypesEnum.DEFAULT}
                mask={confirmType === 'e-mail' ? undefined : CODE_MASK}
                centerText={true}
              />
            </>
          ) : (
            <FormInput
              name="login"
              placeholder="+ 7 (---) --- -- --"
              textInputType={InputTextTypesEnum.DEFAULT}
              mask={PHONE_MASK}
            />
          )}
          {step === 'code' && confirmType === 'telegram_id,phone' && (
            <>
              <CustomText
                value="Перейдите по ссылке, затем вернитесь в приложение и нажмите «Отправить код», после чего дождитесь кода и введите его."
                variant="medium"
                fontSize={14}
                color={palette.textSecondary}
                customTextStyle={{ textAlign: 'center', marginTop: 4 }}
              />
              <Pressable onPress={() => Linking.openURL(getTelegramBotLink(login))}>
                <CustomText
                  value={getTelegramBotLink(login)}
                  variant="medium"
                  fontSize={14}
                  color={palette.infoBlue}
                  customTextStyle={{ textAlign: 'center', textDecorationLine: 'underline' }}
                />
              </Pressable>
              <Button
                label="Отправить код"
                textColor={palette.white}
                gradient={aquaGradient}
                onPress={handleRequestSendCode}
              />
            </>
          )}
          {step === 'code' && confirmType === 'whatsapp' && (
            <CustomText
              value="Код будет отправлен в WhatsApp"
              variant="medium"
              fontSize={14}
              color={palette.textSecondary}
              customTextStyle={{ textAlign: 'center', marginTop: 4 }}
            />
          )}
          {codeError && (
            <CustomText
              value={codeError}
              variant="medium"
              fontSize={13}
              color="#E53935"
            />
          )}
          <FormSubmitButton
            label={step === 'code' ? 'Подтвердить' : 'Войти'}
            textColor={palette.white}
            gradient={aquaGradient}
          />
          {step === 'code' && (
            <>
              {confirmType !== 'e-mail' && confirmType !== 'telegram_id,phone' && (
                <Button
                  label="Отправить код повторно"
                  textColor={palette.white}
                  gradient={aquaGradient}
                  onPress={handleRequestSendCode}
                />
              )}
              <Button
                label="Отправить на другой номер"
                textColor={palette.white}
                gradient={blackGradient}
                onPress={() => setStep('phone')}
              />
            </>
          )}
        </View>
      </Form>
      <View style={[loginStyles.bottomContainer, flexbox.alignCenter]}>
        <Button
          label="Проблемы со входом в приложение?"
          textColor={palette.textPrimary}
          maxWidth={160}
          textCenter={true}
          noFillDefaultStyles={true}
          onPress={onHelpPress}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};
