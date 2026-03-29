export interface ISettingsProps {
  onNavigate: (screen: string) => void;
  onLogoutConfirm?: () => void;
  onDeleteAccount?: () => void;
}
