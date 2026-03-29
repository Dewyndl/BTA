/**
 * Нормализует номер для API и ссылок: только цифры, для РФ 8… → 7…
 */
export const normalizePhone = (phone: string): string => {
  const digits = phone.replace(/\D/g, '');
  if (digits.startsWith('8') && digits.length === 11) {
    return '7' + digits.slice(1);
  }
  if (digits.startsWith('7') && digits.length === 11) {
    return digits;
  }
  return digits;
};
