import type { Dispatch, SetStateAction } from 'react';
import XDate from 'xdate';

export interface ICalendarHeaderProps {
  date: XDate;
  info?: {
    testID?: string;
  };
  setModalState?: Dispatch<SetStateAction<boolean>>;
  setIsVisible?: Dispatch<SetStateAction<boolean>>;
}