import React from 'react';
import { Modal, Pressable, View } from 'react-native';
import { ICustomModalProps } from './interfaces';
import { customModalStyles } from './styles';

export const CustomModal = ({
  children,
  isVisible,
  setIsVisible
}: ICustomModalProps) => {
  return (
    <Modal
      visible={isVisible}
      backdropColor={'rgba(0, 0, 0, 0.25)'}
      style={customModalStyles.container}
      transparent={true}
    >
      <Pressable
        style={customModalStyles.presable}
        onPress={() => setIsVisible(false)}
      >
        {children}
      </Pressable>
    </Modal>
  );
};
