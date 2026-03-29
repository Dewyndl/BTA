import React from 'react';
import { ViewStyle } from 'react-native';
import { BodyType, changeBody } from '../../../common';
import { ISelectOption } from './interfaces';
import { Select } from './Select';

type BodySelectProps = {
  body: BodyType;
  setBody: React.Dispatch<React.SetStateAction<BodyType>>;
  fieldKey: string;
  options: ISelectOption[];
  placeholder?: string;
  error?: string;
  containerStyle?: ViewStyle | ViewStyle[];
};

export const BodySelect = ({
  body,
  setBody,
  fieldKey,
  options,
  placeholder,
  error,
  containerStyle,
}: BodySelectProps) => {
  const value = String(body[fieldKey] ?? '');

  const handleChange = (newValue: string) => {
    changeBody({
      setState: setBody,
      key: fieldKey,
      value: newValue,
    });
  };

  return (
    <Select
      options={options}
      value={value}
      onChange={handleChange}
      selectName={fieldKey}
      placeholder={placeholder}
      error={error}
      containerStyle={containerStyle}
    />
  );
};
