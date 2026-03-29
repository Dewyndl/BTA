import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { CustomModal } from '../../uikit';
import {
  Button,
  CustomText,
  FontsFamilyEnum,
  FontStyleEnum,
  FontWeightEnum,
  SlideBtn,
} from '../../uikit';
import { aquaGradient } from '../../design';

type HintModalProps = {
  isVisible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

const HINT_TEXT =
  'Можно выполнить процедуру по первичной схеме, а через две недели провести коррекцию. В этом случае риск возникновения нежелательных эффектов снижается.';

const SKIP_HINT_LABEL = 'Пропускать подсказку в дальнейшем';

const hintModalStyles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 24,
    marginHorizontal: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  text: {
    marginBottom: 20,
  },
  toggleRow: {
    marginBottom: 24,
  },
  confirmButton: {
    marginBottom: 12,
  },
});

export const HintModal = ({ isVisible, onConfirm, onCancel }: HintModalProps) => {
  const [skipHint, setSkipHint] = useState(false);

  const handleConfirm = () => {
    onConfirm();
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <CustomModal
      isVisible={isVisible}
      setIsVisible={(v) => {
        if (v === false) handleCancel();
      }}
    >
      <View style={hintModalStyles.modalWrapper}>
      <View style={hintModalStyles.modalContent}>
        <View style={hintModalStyles.text}>
          <CustomText
            value={HINT_TEXT}
            textStyles={{
              fontStyle: FontStyleEnum.NORMAL,
              fontWeight: FontWeightEnum.MEDIUM,
              fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
              fontSize: 14,
              color: '#222221',
              textAlign: 'center',
            }}
          />
        </View>
        <View style={hintModalStyles.toggleRow}>
          <SlideBtn
            title={SKIP_HINT_LABEL}
            checked={skipHint}
            onValueChange={setSkipHint}
          />
        </View>
        <Button
          label="Продолжить"
          onPress={handleConfirm}
          gradient={aquaGradient}
          textColor="#FFF"
          textCenter
          customButtonStyles={hintModalStyles.confirmButton}
        />
        <Button
          label="Отмена"
          onPress={handleCancel}
          noFillDefaultStyles
          customButtonStyles={{
            backgroundColor: '#F6F6F6',
            borderWidth: 1,
            borderColor: '#E5E5E5',
          }}
          textColor="#424242"
          textCenter
        />
      </View>
      </View>
    </CustomModal>
  );
};
