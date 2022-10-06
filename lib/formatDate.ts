import { MONTHS } from '../constants/months';

export const formatDate = (date: string, isFull?: boolean) => {
  const day = date.slice(8, 10);
  const month = MONTHS[parseInt(date.slice(5, 7), 10) - 1];
  const year = date.slice(0, 4);

  return isFull ? `${day} ${month} ${year}` : `${day} ${month}`;
};
