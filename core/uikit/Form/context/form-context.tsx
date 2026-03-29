import React, { createContext, useCallback, useContext, useState } from 'react';
import type { RefObject } from 'react';
import type { ScrollView } from 'react-native';
import type { BodyType } from '../../../../common';
import type { ValidationSchema, ValueType } from '../../../../common/types';
import { validateField, validateForm } from '../../../../common/helpers/validation.helper';
import type { ValidationErrors } from '../../../../common/types';

type FormContextValue = {
  values: BodyType;
  errors: ValidationErrors;
  setValues: React.Dispatch<React.SetStateAction<BodyType>>;
  handleChange: (key: string, value: ValueType) => void;
  handleBlur: (key: string) => void;
  handleSubmit: () => void;
  validate: () => boolean;
  validateFieldByName: (fieldName: string) => string | null;
  setFieldError: (fieldName: string, error: string | null) => void;
  clearErrors: () => void;
};

const FormContext = createContext<FormContextValue | null>(null);

type FormProviderProps = {
  children: React.ReactNode;
  initialValues: BodyType;
  validationSchema: ValidationSchema;
  onSubmit: (values: BodyType) => void;
  scrollRef?: RefObject<ScrollView | null>;
};

export const FormProvider = ({
  children,
  initialValues,
  validationSchema,
  onSubmit,
  scrollRef,
}: FormProviderProps) => {
  const [values, setValues] = useState<BodyType>(initialValues);
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateFieldWithValue = useCallback(
    (fieldName: string, value: ValueType): string | null => {
      const rules = validationSchema[fieldName];
      if (!rules) return null;
      return validateField(value, rules);
    },
    [validationSchema]
  );

  const handleChange = useCallback((key: string, value: ValueType) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      const error = validateFieldWithValue(key, value);
      if (error) {
        next[key] = error;
      } else {
        delete next[key];
      }
      return next;
    });
  }, [validateFieldWithValue]);

  const validateFieldByName = useCallback(
    (fieldName: string): string | null => {
      const rules = validationSchema[fieldName];
      if (!rules) return null;
      const value = values[fieldName];
      return validateField(value, rules);
    },
    [values, validationSchema]
  );

  const handleBlur = useCallback(
    (fieldName: string) => {
      const error = validateFieldByName(fieldName);
      setErrors((prev) => {
        const next = { ...prev };
        if (error) {
          next[fieldName] = error;
        } else {
          delete next[fieldName];
        }
        return next;
      });
    },
    [validateFieldByName]
  );

  const validate = useCallback((): boolean => {
    const result = validateForm(values, validationSchema);
    setErrors(result.errors);
    return result.isValid;
  }, [values, validationSchema]);

  const setFieldError = useCallback((fieldName: string, error: string | null) => {
    setErrors((prev) => {
      const next = { ...prev };
      if (error) {
        next[fieldName] = error;
      } else {
        delete next[fieldName];
      }
      return next;
    });
  }, []);

  const clearErrors = useCallback(() => setErrors({}), []);

  const handleSubmit = useCallback(() => {
    const isValid = validate();
    if (isValid) {
      onSubmit(values);
    } else {
      scrollRef?.current?.scrollTo({ y: 0, animated: true });
    }
  }, [values, validate, onSubmit, scrollRef]);

  const value: FormContextValue = {
    values,
    errors,
    setValues,
    handleChange,
    handleBlur,
    handleSubmit,
    validate,
    validateFieldByName,
    setFieldError,
    clearErrors,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useFormContext = (): FormContextValue => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within Form');
  }
  return context;
};
