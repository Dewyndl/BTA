import React from 'react';
import { View } from 'react-native';
import { InputText } from '../InputText';
import { palette } from '../../design';
import { CustomText } from '../CustomText';
import { InputTextTypesEnum } from '../InputText/enums';
import { useFormContext } from './context/form-context';
import type { IFormInputProps } from './interfaces';
export const FormInput = ({
  name,
  defaultValue,
  placeholder,
  textInputType = InputTextTypesEnum.DEFAULT,
  mask,
  centerText = false,
  filter,
}: IFormInputProps) => {
  const { values, errors, handleChange, handleBlur } = useFormContext();

  const value = String(values[name] ?? defaultValue ?? '');
  const error = errors[name];

  return (
    <View>
      <InputText
        inputName={name}
        value={value}
        change={(text, fieldName) => {
          const filtered = filter ? filter(text) : text;
          handleChange(fieldName, filtered);
        }}
        blur={() => handleBlur(name)}
        error={error}
        textInputType={textInputType}
        placeholder={placeholder}
        mask={mask}
        centerText={centerText}  
      />
      {error ? (
        <View style={{ marginTop: 4 }}>
          <CustomText
            value={error}
            variant="regular"
            fontSize={12}
            color={palette.error}
          />
        </View>
      ) : null}
    </View>
  );
};
