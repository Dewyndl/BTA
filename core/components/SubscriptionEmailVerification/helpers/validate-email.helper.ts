const MAX_EMAIL_LENGTH = 64;
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const validateEmail = (value: string): boolean => {
  if (value.length > MAX_EMAIL_LENGTH) return false;
  if (!EMAIL_REGEX.test(value)) return false;
  return true;
};
