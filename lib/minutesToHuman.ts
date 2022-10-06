export const minutesToHuman = (minute: number) => {
  if (minute % 10 === 1 && minute !== 11) {
    return 'минута';
  }
  if (minute >= 10 && minute <= 20) {
    return 'минут';
  }
  if (minute % 10 >= 2 && minute % 10 <= 4) {
    return 'минуты';
  }
  return 'минут';
};
