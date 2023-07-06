export function checkDate(date, days) {
  const currentDate = new Date();
  const timeStampDate = new Date(date); //makes a copy of timestamp date
  const endRestrictionDate = new Date(); //expiration date
  endRestrictionDate.setDate(timeStampDate.getDate() + days);

  //set time values to 0
  currentDate.setHours(0, 0, 0, 0);
  timeStampDate.setHours(0, 0, 0, 0);
  endRestrictionDate.setHours(0, 0, 0, 0);

  return currentDate.getTime() < endRestrictionDate.getTime();
}
