import React from 'react';
import { FormProvider } from './context/form-context';
import type { IFormProps } from './interfaces';

export const Form = ({
  children,
  initialValues,
  validationSchema,
  onSubmit,
  scrollRef,
}: IFormProps) => {
  return (
    <FormProvider
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      scrollRef={scrollRef}
    >
      {children}
    </FormProvider>
  );
};
