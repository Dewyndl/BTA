import React from 'react';
import { Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { palette } from '../../design/colors/palette.constant';

interface IExitConfirmModalProps {
  isVisible: boolean;
  onStay: () => void;
  onExit: () => void;
}

export const ExitConfirmModal = ({ isVisible, onStay, onExit }: IExitConfirmModalProps) => {
  return (
    <Modal visible={isVisible} transparent animationType="fade">
      <Pressable style={styles.overlay} onPress={onStay}>
        <Pressable style={styles.card} onPress={(e) => e.stopPropagation()}>
          <Text style={styles.message}>
            Все внесённые данные будут потеряны. Вы уверены, что хотите выйти?
          </Text>
          <TouchableOpacity style={styles.stayButton} onPress={onStay}>
            <Text style={styles.stayText}>ОСТАТЬСЯ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.exitButton} onPress={onExit}>
            <Text style={styles.exitText}>Выйти</Text>
          </TouchableOpacity>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  card: {
    backgroundColor: palette.white,
    borderRadius: 16,
    padding: 24,
    width: '100%',
    alignItems: 'center',
  },
  message: {
    fontSize: 16,
    color: palette.textPrimary,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  stayButton: {
    backgroundColor: palette.primary,
    borderRadius: 12,
    paddingVertical: 16,
    width: '100%',
    alignItems: 'center',
    marginBottom: 4,
  },
  stayText: {
    color: palette.white,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1,
  },
  exitButton: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  exitText: {
    color: palette.textSecondary,
    fontSize: 14,
  },
});
