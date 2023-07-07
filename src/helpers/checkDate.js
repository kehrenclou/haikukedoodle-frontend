export function checkDate(date, days) {
  //current date stamp to compare with restricted date
  const currentDate = new Date();

  //determine restricted date=[${couterTimeStamp}+${days} )
  const timeStampDate = new Date(date); //mutates counterTimeStamp variable 
  const endRestrictionDate = new Date(); //makes an initial expiration date
  endRestrictionDate.setDate(timeStampDate.getDate() + days); //mutates the expiration date

  //set hours to zero
  currentDate.setHours(0, 0, 0, 0);
  timeStampDate.setHours(0, 0, 0, 0);
  endRestrictionDate.setHours(0, 0, 0, 0);

  //debugging
  // console.log(currentDate.getTime());
  // console.log(timeStampDate.getTime());
  // console.log(endRestrictionDate.getTime());

//if current date is less than restriction date - set true -  restrict Access
  return currentDate.getTime() < endRestrictionDate.getTime();
}
