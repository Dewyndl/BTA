export interface IMainWrapperProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  back: () => void;
  headerRightElement?: React.ReactNode;
  titleColor?: string;
  noScroll?: boolean;
}