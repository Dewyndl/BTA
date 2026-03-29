import React from 'react';
import { Button } from '../Button';
import { useFormContext } from './context/form-context';
import type { IButtonProps } from '../Button/interfaces';

type FormSubmitButtonProps = Omit<IButtonProps, 'onPress'>;

export const FormSubmitButton = (props: FormSubmitButtonProps) => {
  const { handleSubmit } = useFormContext();

  return <Button {...props} onPress={handleSubmit} />;
};
