import { BodyType, NullableType } from "../../../../common";

export type PreparationDistributionType = 'separate_syringe' | 'single_syringe';

export interface IPreparationDistributionSelectProps {
  value: NullableType<PreparationDistributionType>;
  preparationName: string;
  skipInFuture: boolean;
  onChange: (partial: Partial<BodyType>) => void;
  onSubmit: () => void;
}
