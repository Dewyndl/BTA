import type { TSortOption } from '../../../../common';

export interface IPatientSortProps {
  selectedOption: TSortOption
  onSelect: (option: TSortOption) => void
}