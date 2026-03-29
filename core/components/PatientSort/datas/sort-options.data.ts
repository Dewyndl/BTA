import type { TSelectOption, TSortOption } from '../../../../common';

export const SORT_OPTIONS: TSelectOption<TSortOption>[] = [
  { label: "По алфавиту А-Я", value: "alphabet-asc" },
  { label: "По алфавиту Я-А", value: "alphabet-desc" },
  { label: "Ближайший приём", value: "nearest-appointment" },
  { label: "По дате регистрации, новые", value: "registration-new" },
  { label: "По дате регистрации, старые", value: "registration-old" },
]