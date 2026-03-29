export interface ICustomCalendarProps {
  current?: string;
  markedDates?: Record<string, { marked?: boolean; selected?: boolean; selectedColor?: string; dotColor?: string }>;
  onDayPress?: (day: { dateString: string }) => void;
  setModalState?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsVisible?: React.Dispatch<React.SetStateAction<boolean>>;
  hideArrows?: boolean;
}