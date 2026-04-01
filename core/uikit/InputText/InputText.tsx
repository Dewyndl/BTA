import React from 'react';
import { TextInput, View } from 'react-native';
import { IInputTextProps } from './interfaces';
import { inputTextStyles } from './styles';
import { InputTextTypesEnum } from './enums';
import MaskInput from 'react-native-mask-input';
import { flexbox, palette } from '../../design';

export const InputText = ({
  value,
  change,
  error,
  textInputType,
  blur,
  placeholder,
  mask,
  inputName,
  centerText = false
}: IInputTextProps) => {
  const isTextarea = textInputType === InputTextTypesEnum.TEXTAREA;

  return (
    <View
      style={[
        inputTextStyles.container,
        error && inputTextStyles.errorContainer,
        isTextarea && inputTextStyles.textareaContainer,
        !isTextarea && flexbox.justifyCenter
      ]}
    >
      {mask ? (
        <MaskInput
          mask={mask}
          value={value ? value : ''}
          onChangeText={(text) => change(text, inputName)}
          keyboardType="numeric"
          placeholder={placeholder}
          placeholderTextColor={palette.placeholder}
          onBlur={blur}
          style={[inputTextStyles.text, centerText && inputTextStyles.centerText]}
        />
      ) : (
        <TextInput
          secureTextEntry={textInputType === InputTextTypesEnum.PASSWORD}
          value={value ? value : ''}
          onChangeText={(text) => change(text, inputName)}
          placeholder={placeholder}
          placeholderTextColor={palette.placeholder}
          onBlur={blur}
          multiline={isTextarea}
          numberOfLines={isTextarea ? 4 : 1}
          textAlignVertical={isTextarea ? 'top' : 'center'}
          keyboardType={textInputType === InputTextTypesEnum.EMAIL ? 'email-address' : 'default'}
          autoCapitalize={textInputType === InputTextTypesEnum.EMAIL || textInputType === InputTextTypesEnum.PASSWORD ? 'none' : 'sentences'}
          autoCorrect={!(textInputType === InputTextTypesEnum.EMAIL || textInputType === InputTextTypesEnum.PASSWORD)}
          autoComplete={textInputType === InputTextTypesEnum.EMAIL ? 'email' : textInputType === InputTextTypesEnum.PASSWORD ? 'password' : 'off'}
          style={[inputTextStyles.text, isTextarea && inputTextStyles.textarea, centerText && inputTextStyles.centerText]}
        />
      )}
    </View>
  );
};