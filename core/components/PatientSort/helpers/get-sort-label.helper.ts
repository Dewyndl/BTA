import type { TSortOption } from '../../../../common';
import { SORT_OPTIONS } from "../datas"

export function getSortLabel(option: TSortOption): string {
  const found = SORT_OPTIONS.find((opt) => opt.value === option)
  return found?.label || "По алфавиту А-Я"
}