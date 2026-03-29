import type { SelectOption } from '../../../../common';

export type DirectionType = { top: number; left: number };

export interface ISelectModalProps {
  title?: string;
  options: Array<SelectOption<number>>;
  directions: DirectionType;
  onPress: (value: number) => void;
}