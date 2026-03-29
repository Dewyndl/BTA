export interface IPatientSearchProps {
  value: string
  onChangeText: (text: string) => void
  error?: boolean
}