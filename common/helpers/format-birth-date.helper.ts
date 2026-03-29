import { months } from "../datas";

export function formatBirthDate(date?: Date): string {
  if (!date) return "";
  const day = date.getDate();
  
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}