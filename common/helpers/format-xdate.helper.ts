import XDate from "xdate";

export const formatXDate = (date: XDate): string => {
  const xdate = new XDate(date);

  const day = String(xdate.getDate()).padStart(2, "0");
  const month = String(xdate.getMonth() + 1).padStart(2, "0");
  const year = xdate.getFullYear();

  return `${day}.${month}.${year}`;
};
