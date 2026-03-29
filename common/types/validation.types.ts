export type RequiredFields<T extends string = string> = readonly T[];

export type ValidationRule =
  | { type: 'required'; message?: string }
  | { type: 'email'; message?: string }
  | { type: 'phone'; message?: string }
  | { type: 'minLength'; value: number; message?: string }
  | { type: 'maxLength'; value: number; message?: string }
  | { type: 'pattern'; value: RegExp; message?: string }
  | { type: 'custom'; validate: (value: unknown) => string | null };

export type ValidationSchema = Record<string, ValidationRule[]>;

export type ValidationErrors = Record<string, string>;

export interface IValidationResult {
  isValid: boolean;
  errors: ValidationErrors;
}
