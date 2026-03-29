import { IAppointment, IPatient } from "../../../../features"
import type { TSortOption } from '../../../../common';

export interface IPatientListProps {
  patients: IPatient[]
  searchQuery: string
  sortOption: TSortOption
  appointments?: IAppointment[]
  onPatientPress?: (patient: IPatient) => void
  isLoading?: boolean
  isRefreshing?: boolean
  onRefresh?: () => void
  searchError?: string
  ListHeaderComponent?: React.ReactElement
}