import type {
  IValidationResult,
  ValidationErrors,
  ValidationRule,
  ValidationSchema,
} from '../types';
import type { BodyType } from '../types';

export const createRequiredSchema = (
  requiredFields: readonly string[],
  message?: string
): ValidationSchema =>
  Object.fromEntries(
    requiredFields.map((field) => [
      field,
      [{ type: 'required' as const, message }],
    ])
  );

const DEFAULT_MESSAGES = {
  required: 'Обязательное поле',
  email: 'Введите корректный email',
  phone: 'Введите полный номер телефона (+7 XXX XXX-XX-XX)',
  minLength: (min: number) => `Минимум ${min} символов`,
  maxLength: (max: number) => `Максимум ${max} символов`,
  pattern: 'Некорректный формат',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_MIN_DIGITS = 11;

const validateRule = (value: unknown, rule: ValidationRule): string | null => {
  const strValue = value != null ? String(value).trim() : '';

  switch (rule.type) {
    case 'required': {
      const isEmpty = strValue === '' || value === undefined || value === null;
      return isEmpty ? (rule.message ?? DEFAULT_MESSAGES.required) : null;
    }
    case 'email': {
      if (strValue === '') return null;
      return !EMAIL_REGEX.test(strValue)
        ? (rule.message ?? DEFAULT_MESSAGES.email)
        : null;
    }
    case 'phone': {
      if (strValue === '') return null;
      const digits = strValue.replace(/\D/g, '');
      return digits.length < PHONE_MIN_DIGITS
        ? (rule.message ?? DEFAULT_MESSAGES.phone)
        : null;
    }
    case 'minLength': {
      if (strValue === '') return null;
      return strValue.length < rule.value
        ? (rule.message ?? DEFAULT_MESSAGES.minLength(rule.value))
        : null;
    }
    case 'maxLength': {
      return strValue.length > rule.value
        ? (rule.message ?? DEFAULT_MESSAGES.maxLength(rule.value))
        : null;
    }
    case 'pattern': {
      if (strValue === '') return null;
      return !rule.value.test(strValue)
        ? (rule.message ?? DEFAULT_MESSAGES.pattern)
        : null;
    }
    case 'custom': {
      return rule.validate(value);
    }
    default:
      return null;
  }
};

export const validateField = (
  value: unknown,
  rules: ValidationRule[]
): string | null => {
  for (const rule of rules) {
    const error = validateRule(value, rule);
    if (error) return error;
  }
  return null;
};

export const validateForm = (
  values: BodyType,
  schema: ValidationSchema
): IValidationResult => {
  const errors: ValidationErrors = {};

  for (const [fieldName, rules] of Object.entries(schema)) {
    const value = values[fieldName];
    const error = validateField(value, rules);
    if (error) {
      errors[fieldName] = error;
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
