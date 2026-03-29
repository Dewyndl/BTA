import React from 'react';
import { Image, Pressable, ScrollView, View } from 'react-native';
import { CustomText } from '../../uikit';
import { FontsFamilyEnum, FontStyleEnum, FontWeightEnum } from '../../uikit/CustomText';
import { Button } from '../../uikit';
import { aquaGradient } from '../../design';
import { CheckIcon } from '../../../assets';
import { IMAGES } from '../../../assets/images';
import type { ISubscriptionPlan, ISubscriptionPurchaseProps } from './interfaces';
import { subscriptionPurchaseStyles as styles } from './styles';

const TITLE = 'Купить подписку';
const INFO_TEXT =
  'Продлевать подписку вы сможете самостоятельно. Не переживайте: мы не списываем деньги с вашей карты автоматически.';
const PAYMENT_INSTRUCTION = 'Оплатите подписку удобным вам способом:';
const TOTAL_LABEL = 'Итого к оплате:';
const PAY_LABEL = 'Оплатить';
const ERROR_MESSAGE = 'К сожалению, во время оплаты произошла ошибка';
const SUCCESS_TITLE = 'Благодарим вас за покупку!';
const SUCCESS_DATE_PREFIX = 'Ваша текущая подписка продлена до:';
const OK_LABEL = 'Ок';

const greyText = {
  fontStyle: FontStyleEnum.NORMAL,
  fontWeight: FontWeightEnum.MEDIUM,
  fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
  fontSize: 14,
  color: '#424242',
} as const;

const formatPrice = (price: number) => `${price} руб.`;

const getMonthWord = (months: number): string => {
  if (months === 1) return 'месяц';
  if (months >= 2 && months <= 4) return 'месяца';
  return 'месяцев';
};

const formatPlanLabel = (price: number, months: number) =>
  `${formatPrice(price)} / ${months} ${getMonthWord(months)}`;

type PlanCardProps = {
  plan: ISubscriptionPlan;
  isSelected: boolean;
  onPress: () => void;
};

const PlanCard = ({ plan, isSelected, onPress }: PlanCardProps) => (
  <Pressable
    onPress={onPress}
    style={[styles.planCard, isSelected && styles.planCardSelected]}
  >
    <Image source={plan.icon} style={styles.planIcon} resizeMode="contain" />
    <View style={styles.planContent}>
      <CustomText
        value={formatPlanLabel(plan.price, plan.months)}
        textStyles={{
          ...greyText,
          fontWeight: FontWeightEnum.SEMI_BOLD,
          fontFamily: FontsFamilyEnum.MONTSERRAT_SEMIBOLD,
          color: '#222221',
        }}
      />
      {plan.badge ? (
        <CustomText
          value={plan.badge}
          textStyles={{
            ...greyText,
            fontSize: 12,
            color: '#1F7876',
          }}
        />
      ) : null}
    </View>
    {isSelected ? (
      <CheckIcon size={24} color="#1F7876" />
    ) : null}
  </Pressable>
);

export const SubscriptionPurchase = ({
  plans,
  step,
  selectedPlan,
  subscriptionExtendedUntil,
  onSelectPlan,
  onPay,
  onOkSuccess,
}: ISubscriptionPurchaseProps) => {
  const isPlanSelection = step === 'plan_selection';
  const isPaymentMethod = step === 'payment_method';
  const isPaymentError = step === 'payment_error';
  const isPaymentSuccess = step === 'payment_success';

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      {isPlanSelection && (
        <>
          <CustomText
            value={TITLE}
            textStyles={{
              ...greyText,
              fontWeight: FontWeightEnum.SEMI_BOLD,
              fontFamily: FontsFamilyEnum.MONTSERRAT_SEMIBOLD,
              fontSize: 18,
              color: '#222221',
            }}
          />
          <View style={styles.infoText}>
            <CustomText value={INFO_TEXT} textStyles={greyText} />
          </View>
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              isSelected={selectedPlan?.id === plan.id}
              onPress={() => onSelectPlan(plan)}
            />
          ))}
        </>
      )}

      {(isPaymentMethod || isPaymentError) && selectedPlan && (
        <>
          <View style={[styles.planCard, styles.planCardSelected]}>
            <Image
              source={selectedPlan.icon}
              style={styles.planIcon}
              resizeMode="contain"
            />
            <View style={styles.planContent}>
              <CustomText
                value={formatPlanLabel(selectedPlan.price, selectedPlan.months)}
                textStyles={{
                  ...greyText,
                  fontWeight: FontWeightEnum.SEMI_BOLD,
                  fontFamily: FontsFamilyEnum.MONTSERRAT_SEMIBOLD,
                  color: '#222221',
                }}
              />
            </View>
            {isPaymentMethod ? (
              <CheckIcon size={24} color="#1F7876" />
            ) : null}
          </View>
          <View style={styles.paymentInstruction}>
            <CustomText value={PAYMENT_INSTRUCTION} textStyles={greyText} />
          </View>
          <View style={styles.paymentIconsRow}>
            <Image
              source={IMAGES.BANK_CARDS}
              style={styles.paymentIcon}
              resizeMode="contain"
            />
            <Image
              source={IMAGES.SBP_ICON}
              style={styles.paymentIcon}
              resizeMode="contain"
            />
            <Image
              source={IMAGES.YOMONEY_ICON}
              style={styles.paymentIcon}
              resizeMode="contain"
            />
          </View>
          <View style={styles.totalRow}>
            <CustomText
              value={`${TOTAL_LABEL} ${formatPrice(selectedPlan.price)}`}
              textStyles={{
                ...greyText,
                fontWeight: FontWeightEnum.SEMI_BOLD,
                fontFamily: FontsFamilyEnum.MONTSERRAT_SEMIBOLD,
              }}
            />
          </View>
          {isPaymentError && (
            <CustomText
              value={ERROR_MESSAGE}
              textStyles={{
                ...greyText,
                color: '#D7131F',
                textAlign: 'center',
              }}
            />
          )}
          <Button
            label={PAY_LABEL}
            gradient={isPaymentError ? undefined : aquaGradient}
            textColor="#FFF"
            customButtonStyles={[
              styles.button,
              isPaymentError && styles.buttonDisabled,
            ]}
            onPress={onPay}
            isDisabled={isPaymentError}
          />
        </>
      )}

      {isPaymentSuccess && (
        <>
          <View style={styles.successIcon}>
            <CheckIcon size={64} color="#1F7876" />
          </View>
          <CustomText
            value={SUCCESS_TITLE}
            textStyles={{
              ...greyText,
              fontWeight: FontWeightEnum.SEMI_BOLD,
              fontFamily: FontsFamilyEnum.MONTSERRAT_SEMIBOLD,
              fontSize: 18,
              color: '#222221',
            }}
          />
          <View style={styles.successDate}>
            <CustomText
              value={`${SUCCESS_DATE_PREFIX} ${subscriptionExtendedUntil}`}
              textStyles={greyText}
            />
          </View>
          <Button
            label={OK_LABEL}
            gradient={aquaGradient}
            textColor="#FFF"
            customButtonStyles={styles.button}
            onPress={onOkSuccess}
          />
        </>
      )}
    </ScrollView>
  );
};
