export interface IHeaderProps {
  backClick: () => void;
  title: string;
  subtitle?: string;
  rightElement?: React.ReactNode;
  titleColor?: string;
}