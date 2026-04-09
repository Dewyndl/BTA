import React from 'react';
import { Button } from '../Button';
import { useFormContext } from './context/form-context';
import type { IButtonProps } from '../Button/interfaces';

type FormSubmitButtonProps = Omit<IButtonProps, 'onPress'>;

export const FormSubmitButton = ({ isDisabled, ...props }: FormSubmitButtonProps) => {
  const { handleSubmit, errors } = useFormContext();
  const hasErrors = Object.keys(errors).length > 0;

  return <Button {...props} isDisabled={isDisabled ?? hasErrors} onPress={handleSubmit} />;
};
