import React, { useState } from 'react';
import { Modal, Pressable, ScrollView, View } from 'react-native';
import { palette } from '../../design';
import { CustomText } from '../CustomText';
import { ISelectProps } from './interfaces';
import { selectStyles } from './styles';
import { ChevronDownIcon } from '../../../assets';

export const Select = ({
  options,
  value,
  onChange,
  selectName,
  placeholder = 'Выберите',
  error,
  containerStyle,
}: ISelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find((opt) => opt.value === value);
  const displayValue = selectedOption?.label ?? '';

  const handleSelect = (optionValue: string) => {
    onChange(optionValue, selectName);
    setIsOpen(false);
  };

  return (
    <>
      <Pressable
        onPress={() => setIsOpen(true)}
        style={[
          selectStyles.container,
          error && selectStyles.containerError,
          containerStyle,
        ]}
      >
        <View style={selectStyles.trigger}>
          <CustomText
            value={displayValue || placeholder}
            variant="medium"
            fontSize={14}
            color={displayValue ? palette.textPrimary : palette.placeholder}
          />
          <View style={selectStyles.chevron}>
            <ChevronDownIcon />
          </View>
        </View>
      </Pressable>

      <Modal
        visible={isOpen}
        transparent
        animationType="slide"
        onRequestClose={() => setIsOpen(false)}
      >
        <View style={selectStyles.modalOverlay}>
          <Pressable
            style={{ flex: 1 }}
            onPress={() => setIsOpen(false)}
          />
          <View style={selectStyles.optionsContainer}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                bounces={false}
                keyboardShouldPersistTaps="handled"
              >
                {options.map((option) => (
                  <Pressable
                    key={option.value}
                    style={[
                      selectStyles.option,
                      option.value === value && selectStyles.selectedOption,
                    ]}
                    onPress={() => handleSelect(option.value)}
                  >
                    <CustomText
                      value={option.label}
                      variant="medium"
                      fontSize={16}
                      color={palette.textPrimary}
                    />
                  </Pressable>
                ))}
              </ScrollView>
            </View>
        </View>
      </Modal>
    </>
  );
};
