import React from 'react';
import { Checkbox } from '../Checkbox';
import { useFormContext } from './context/form-context';

type FormCheckboxProps = {
  name: string;
  title: string;
};

export const FormCheckbox = ({ name, title }: FormCheckboxProps) => {
  const { values, errors, handleChange } = useFormContext();

  const checked = !!values[name];

  return (
    <Checkbox
      checked={checked}
      change={(isChecked) => handleChange(name, isChecked)}
      title={title}
    />
  );
};
