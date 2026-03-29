import React from 'react';
import { Pressable, ScrollView, TextInput, View } from 'react-native';
import { CustomText } from '../../uikit';
import { FontsFamilyEnum, FontStyleEnum, FontWeightEnum } from '../../uikit/CustomText';
import { Button } from '../../uikit';
import { aquaGradient } from '../../design';
import { CheckIcon, MailIcon, WarningIcon } from '../../../assets';
import type { ISubscriptionEmailVerificationProps } from './interfaces';
import { subscriptionEmailVerificationStyles as styles } from './styles';

const TEAL = '#0E7C7B';
const PROMPT =
  'В данный момент электронная почта не подключена. Подключить Email, чтобы вы могли получать уведомления на почту?';
const ERROR_EMAIL = 'Введите корректный Email';
const LINK_SENT = 'На ваш Email отправлена ссылка активации';
const LINK_EXPIRED =
  'Срок действия ссылки активации истек. Пожалуйста укажите свой Email заново.';
const CONNECTED = 'Email успешно подключен';
const RESEND_LINK = 'не приходит письмо?';

const greyTextStyles = {
  fontStyle: FontStyleEnum.NORMAL,
  fontWeight: FontWeightEnum.MEDIUM,
  fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
  fontSize: 14,
  color: '#424242',
} as const;

export const SubscriptionEmailVerification = ({
  step,
  email,
  onEmailChange,
  onConfirm,
  onSave,
  onResendEmail,
}: ISubscriptionEmailVerificationProps) => {
  const isInvalid = step === 'error_invalid';
  const isLinkSent = step === 'link_sent';
  const isLinkExpired = step === 'link_expired';
  const isConnected = step === 'connected';
  const showInputAndConfirm =
    step === 'initial' || step === 'error_invalid' || step === 'link_expired';
  const showFirstInput = step === 'initial' || step === 'error_invalid';

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      {(step === 'initial' || step === 'error_invalid') && (
        <View style={styles.promptText}>
          <CustomText value={PROMPT} textStyles={greyTextStyles} />
        </View>
      )}

      {showFirstInput && (
        <>
          <TextInput
            value={email}
            onChangeText={onEmailChange}
            placeholder="Введите свой Email"
            placeholderTextColor="#838383"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={[styles.input, isInvalid && styles.inputError]}
          />
          {isInvalid && (
            <CustomText
              value={ERROR_EMAIL}
              textStyles={{
                ...greyTextStyles,
                fontSize: 12,
                color: '#D7131F',
              }}
            />
          )}
        </>
      )}

      {isLinkSent && (
        <>
          <View style={styles.iconWrapper}>
            <MailIcon size={48} color="#1F7876" />
          </View>
          <CustomText
            value={LINK_SENT}
            textStyles={{
              ...greyTextStyles,
              textAlign: 'center',
            }}
          />
          <View style={styles.emailDisplay}>
            <CustomText value={email} textStyles={greyTextStyles} />
          </View>
        </>
      )}

      {isLinkExpired && (
        <>
          <View style={styles.iconWrapper}>
            <WarningIcon size={48} color="#D7131F" />
          </View>
          <CustomText
            value={LINK_EXPIRED}
            textStyles={{ ...greyTextStyles, marginBottom: 16 }}
          />
          <TextInput
            value={email}
            onChangeText={onEmailChange}
            placeholder="Введите свой Email"
            placeholderTextColor="#838383"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />
        </>
      )}

      {isConnected && (
        <>
          <View style={styles.iconWrapper}>
            <CheckIcon size={48} color="#1F7876" />
          </View>
          <View style={styles.emailDisplay}>
            <CustomText value={email} textStyles={greyTextStyles} />
          </View>
          <CustomText
            value={CONNECTED}
            textStyles={{
              ...greyTextStyles,
              textAlign: 'center',
              marginBottom: 24,
            }}
          />
        </>
      )}

      {showInputAndConfirm && (
        <View style={{ marginTop: isInvalid ? 0 : 16 }}>
          <Button
            label="Подтвердить"
            gradient={aquaGradient}
            textColor="#FFF"
            customButtonStyles={styles.button}
            onPress={onConfirm}
          />
        </View>
      )}

      {(isLinkExpired || isLinkSent) && (
        <Pressable onPress={onResendEmail} style={styles.resendLink}>
          <CustomText
            value={RESEND_LINK}
            textStyles={{
              ...greyTextStyles,
              color: '#838383',
              textAlign: 'center',
            }}
          />
        </Pressable>
      )}

      {isConnected && (
        <Button
          label="Сохранить"
          gradient={aquaGradient}
          textColor="#FFF"
          customButtonStyles={styles.button}
          onPress={onSave}
        />
      )}
    </ScrollView>
  );
};
