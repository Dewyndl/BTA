import React from 'react';
import { View } from 'react-native';
import { Select } from '../Select';
import { palette } from '../../design';
import { CustomText } from '../CustomText';
import { useFormContext } from './context/form-context';
import type { ISelectOption } from '../Select/interfaces';

type FormSelectProps = {
  name: string;
  options: ISelectOption[];
  placeholder?: string;
};

export const FormSelect = ({ name, options, placeholder }: FormSelectProps) => {
  const { values, errors, handleChange, handleBlur } = useFormContext();

  const value = values[name] != null ? String(values[name]) : '';
  const error = errors[name];

  return (
    <View>
      <Select
        options={options}
        value={value}
        onChange={(val) => handleChange(name, val)}
        selectName={name}
        placeholder={placeholder}
        error={error}
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
