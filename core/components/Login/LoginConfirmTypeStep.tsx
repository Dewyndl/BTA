import React, { useCallback, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, StyleSheet, Pressable } from 'react-native';
import { LinesIcon, MessageIcon } from '../../../assets';
import { aquaGradient, blackGradient, flexbox } from '../../design';
import {
  Button,
  CustomText,
  FontsFamilyEnum,
  FontStyleEnum,
  FontWeightEnum,
  SlideBtn,
} from '../../uikit';
import { confirmTypeStepStyles } from '../Registration/steps/ConfirmTypeStep/styles';
import type { ConfirmMethod } from '../Registration/steps/ConfirmTypeStep/constants';
import { CONFIRM_METHOD_OPTIONS, LOGIN_CONFIRM_METHODS_STORAGE_KEY } from './constants/login-confirm.constants';

type LoginConfirmTypeStepProps = {
  phone: string;
  order: ConfirmMethod[];
  onOrderChange: (order: ConfirmMethod[]) => void;
  onRequestSendCode: () => void;
  onBack: () => void;
};

export const LoginConfirmTypeStep = ({
  phone,
  order,
  onOrderChange,
  onRequestSendCode,
  onBack,
}: LoginConfirmTypeStepProps) => {
  const [remember, setRemember] = useState(false);

  const handleToggle = useCallback(
    (method: ConfirmMethod, checked: boolean) => {
      const exists = order.includes(method);
      if (checked && !exists) {
        onOrderChange([...order, method]);
        return;
      }
      if (!checked && exists) {
        const next = order.filter((m) => m !== method);
        onOrderChange(next);
      }
    },
    [order, onOrderChange]
  );

  const moveItem = useCallback(
    (method: ConfirmMethod, direction: 'up' | 'down') => {
      const index = order.indexOf(method);
      if (index === -1) return;
      const targetIndex = direction === 'up' ? index - 1 : index + 1;
      if (targetIndex < 0 || targetIndex >= order.length) return;
      const next = [...order];
      [next[index], next[targetIndex]] = [next[targetIndex], next[index]];
      onOrderChange(next);
    },
    [order, onOrderChange]
  );

  const handleSendCode = useCallback(() => {
    if (order.length === 0) return;
    onRequestSendCode();
  }, [order.length, onRequestSendCode]);

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
          value={phone}
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

      <View style={[confirmTypeStepStyles.itemsContainer, styles.section]}>
        <CustomText
          value="Выберите способы (можно несколько) и настройте порядок:"
          textStyles={{
            fontStyle: FontStyleEnum.NORMAL,
            fontWeight: FontWeightEnum.MEDIUM,
            fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
            fontSize: 14,
            color: '#424242',
          }}
        />
        {[...CONFIRM_METHOD_OPTIONS].sort((a, b) => {
          const ai = order.indexOf(a.id);
          const bi = order.indexOf(b.id);
          if (ai === -1 && bi === -1) return 0;
          if (ai === -1) return 1;
          if (bi === -1) return -1;
          return ai - bi;
        }).map((opt) => {
          const isSelected = order.includes(opt.id);
          const orderIndex = order.indexOf(opt.id);
          const canMoveUp = isSelected && orderIndex > 0;
          const canMoveDown = isSelected && orderIndex !== -1 && orderIndex < order.length - 1;

          return (
            <View
              key={opt.id}
              style={[
                flexbox.directionRow,
                flexbox.alignCenter,
                confirmTypeStepStyles.item,
                styles.row,
              ]}
            >
              <LinesIcon />
              <View style={styles.rowContent}>
                <SlideBtn
                  title={opt.label}
                  customStyles={confirmTypeStepStyles.checkbox}
                  checked={isSelected}
                  onValueChange={(v) => handleToggle(opt.id, v)}
                />
              </View>
              {isSelected && (
                <View style={styles.orderControls}>
                  <Pressable
                    style={[styles.orderBtn, !canMoveUp && styles.orderBtnDisabled]}
                    disabled={!canMoveUp}
                    onPress={() => moveItem(opt.id, 'up')}
                  >
                    <CustomText
                      value="↑"
                      variant="medium"
                      fontSize={14}
                      color="#424242"
                    />
                  </Pressable>
                  <Pressable
                    style={[styles.orderBtn, !canMoveDown && styles.orderBtnDisabled]}
                    disabled={!canMoveDown}
                    onPress={() => moveItem(opt.id, 'down')}
                  >
                    <CustomText
                      value="↓"
                      variant="medium"
                      fontSize={14}
                      color="#424242"
                    />
                  </Pressable>
                </View>
              )}
            </View>
          );
        })}
      </View>

      <View style={confirmTypeStepStyles.rememberContainer}>
        <SlideBtn
          title="Запомнить мой выбор"
          customStyles={confirmTypeStepStyles.checkbox}
          checked={remember}
          onValueChange={(v) => {
            setRemember(v);
            if (v) {
              AsyncStorage.setItem(LOGIN_CONFIRM_METHODS_STORAGE_KEY, JSON.stringify(order));
            }
          }}
        />
      </View>

      <View style={confirmTypeStepStyles.buttonsContainer}>
        <Button
          label="Отправить код"
          textColor="#FFF"
          gradient={aquaGradient}
          customButtonStyles={confirmTypeStepStyles.button}
          onPress={handleSendCode}
          isDisabled={order.length === 0}
        />
        <Button
          label="Отправить на другой номер"
          textColor="#FFF"
          gradient={blackGradient}
          onPress={onBack}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 26,
  },
  row: {
    gap: 8,
  },
  rowContent: {
    flex: 1,
  },
  orderControls: {
    flexDirection: 'row',
    gap: 4,
  },
  orderBtn: {
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  orderBtnDisabled: {
    opacity: 0.4,
  },
});

