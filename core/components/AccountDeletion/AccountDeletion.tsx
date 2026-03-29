import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { CustomText } from '../../uikit';
import { Button } from '../../uikit/Button';
import { palette } from '../../design';
import {
  ACCOUNT_DELETION_WARNING,
  DELETE_BUTTON_LABEL,
  COUNTDOWN_SECONDS,
} from './constants';
import { accountDeletionStyles as styles } from './styles';

type AccountDeletionProps = {
  onDelete: () => void;
};

export const AccountDeletion = ({ onDelete }: AccountDeletionProps) => {
  const [secondsLeft, setSecondsLeft] = useState(COUNTDOWN_SECONDS);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsLeft]);

  const canDelete = secondsLeft === 0;

  return (
    <View style={styles.scrollContent}>
      <CustomText
        value={ACCOUNT_DELETION_WARNING}
        variant="medium"
        fontSize={14}
        color={palette.textSecondary}
        customTextStyle={styles.warning}
      />
      <View style={styles.timerWrap}>
        <View style={styles.timerCircle}>
          <CustomText
            value={String(secondsLeft)}
            variant="bold"
            fontSize={24}
            color={palette.white}
            customTextStyle={styles.timerText}
          />
        </View>
      </View>
      <Button
        label={DELETE_BUTTON_LABEL}
        onPress={onDelete}
        isDisabled={!canDelete}
        customButtonStyles={[
          styles.deleteButton,
          ...(canDelete ? [styles.deleteButtonActive] : []),
        ]}
        textColor={palette.white}
        textCenter
      />
    </View>
  );
};
