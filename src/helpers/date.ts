export function isDateExpired(date: Date | string) {
  const targetDate = date instanceof Date ? date : new Date(date);
  const now = new Date();

  return now >= targetDate;
}
