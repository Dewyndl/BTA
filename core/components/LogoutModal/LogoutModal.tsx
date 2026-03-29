import React from 'react';
import { View } from 'react-native';
import { LogoutIcon } from '../../../assets';
import { CustomModal } from '../../uikit';
import { Button, CustomText } from '../../uikit';
import { aquaGradient, blackGradient, palette } from '../../design';
import {
  LOGOUT_MODAL_MESSAGE,
  LOGOUT_BUTTON_LABEL,
  CANCEL_BUTTON_LABEL,
} from './constants';
import type { ILogoutModalProps } from './interfaces';
import { logoutModalStyles as styles } from './styles';

export const LogoutModal = ({ isVisible, onConfirm, onCancel }: ILogoutModalProps) => {
  return (
    <CustomModal
      isVisible={isVisible}
      setIsVisible={(v) => {
        if (v === false) onCancel();
      }}
    >
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <View style={styles.iconBox}>
            <LogoutIcon />
          </View>
          <CustomText
            value={LOGOUT_MODAL_MESSAGE}
            variant="semibold"
            fontSize={16}
            color={palette.textPrimary}
            textAlign="center"
          />
          <View style={styles.buttonsContainer}>
            <Button
              label={LOGOUT_BUTTON_LABEL}
              onPress={onConfirm}
              gradient={aquaGradient}
              textColor={palette.white}
              textCenter
            />
            <Button
              label={CANCEL_BUTTON_LABEL}
              onPress={onCancel}
              textColor={palette.white}
              gradient={blackGradient}
            />
          </View>
        </View>
      </View>
    </CustomModal>
  );
};
