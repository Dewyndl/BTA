import React from 'react';
import { Pressable, ScrollView, TextInput, View } from 'react-native';
import { CustomText } from '../../uikit';
import { FontsFamilyEnum, FontStyleEnum, FontWeightEnum } from '../../uikit/CustomText';
import { Button } from '../../uikit';
import { aquaGradient } from '../../design';
import { MessageIcon } from '../../../assets';
import type { ISubscriptionPhoneVerificationProps } from './interfaces';
import { subscriptionVerificationStyles as styles } from './styles';

const TEAL = '#0E7C7B';

export const SubscriptionPhoneVerification = ({
  phone,
  step,
  code,
  onCodeChange,
  onConfirmPhone,
  onCancel,
  onConfirmCode,
  onEnterAnotherNumber,
  onCodeNotReceived,
}: ISubscriptionPhoneVerificationProps) => {
  const isConfirmPhone = step === 'confirm_phone';

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      {isConfirmPhone ? (
        <>
          <CustomText
            value="Подтвердите номер телефона"
            textStyles={{
              fontStyle: FontStyleEnum.NORMAL,
              fontWeight: FontWeightEnum.SEMI_BOLD,
              fontFamily: FontsFamilyEnum.MONTSERRAT_SEMIBOLD,
              fontSize: 18,
              color: '#222221',
              textAlign: 'center',
            }}
          />
          <View style={styles.phoneNumber}>
            <CustomText
              value={phone}
              textStyles={{
                fontStyle: FontStyleEnum.NORMAL,
                fontWeight: FontWeightEnum.SEMI_BOLD,
                fontFamily: FontsFamilyEnum.MONTSERRAT_SEMIBOLD,
                fontSize: 20,
                color: '#222221',
                textAlign: 'center',
              }}
            />
          </View>
          <View style={styles.buttonsRow}>
            <Button
              label="Подтвердить"
              gradient={aquaGradient}
              textColor="#FFF"
              customButtonStyles={styles.button}
              onPress={onConfirmPhone}
            />
            <Button
              label="Отмена"
              textColor="#FFF"
              customButtonStyles={[styles.button, styles.buttonSecondary]}
              onPress={onCancel}
            />
          </View>
        </>
      ) : (
        <>
          <View style={styles.smsMessageRow}>
            <View style={styles.smsMessageIcon}>
              <MessageIcon />
            </View>
            <CustomText
              value="Отправили СМС с кодом подтверждения на ваш номер"
              textStyles={{
                fontStyle: FontStyleEnum.NORMAL,
                fontWeight: FontWeightEnum.MEDIUM,
                fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
                fontSize: 14,
                color: TEAL,
              }}
            />
          </View>
          <View style={styles.codeInput}>
            <TextInput
              value={code}
              onChangeText={onCodeChange}
              placeholder="Введите 4-значный код"
              placeholderTextColor="#838383"
              keyboardType="number-pad"
              maxLength={4}
              style={{
                height: 60,
                borderRadius: 64,
                borderWidth: 1,
                borderColor: '#C3C3C3',
                paddingHorizontal: 20,
                fontSize: 14,
                fontFamily: 'Montserrat-Regular',
                color: '#222221',
              }}
            />
          </View>
          <View style={styles.buttonsRow}>
            <Button
              label="Подтвердить"
              gradient={aquaGradient}
              textColor="#FFF"
              customButtonStyles={styles.button}
              onPress={onConfirmCode}
            />
            <Button
              label="Ввести другой номер"
              textColor="#FFF"
              customButtonStyles={[styles.button, styles.buttonSecondary]}
              onPress={onEnterAnotherNumber}
            />
          </View>
          <Pressable onPress={onCodeNotReceived} style={styles.codeNotReceivedLink}>
            <CustomText
              value="Не приходит код?"
              textStyles={{
                fontStyle: FontStyleEnum.NORMAL,
                fontWeight: FontWeightEnum.MEDIUM,
                fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
                fontSize: 14,
                color: '#838383',
                textAlign: 'center',
              }}
            />
          </Pressable>
        </>
      )}
    </ScrollView>
  );
};
