export function isTimeInRestrictedZone(counterTimeStamp) {
  const currentTimeStamp = new Date(); // current Date Stamp
  const lastCounterTimeStamp = new Date(counterTimeStamp); //last Time Stamp from last counted Haiku
  lastCounterTimeStamp.setHours(0, 0, 0, 0); //set counter time stamp to zero. this will allow access on next day starting at midnight.

  const diffBetweenNowAndCounterTimeStamp =
    currentTimeStamp - lastCounterTimeStamp;

  return diffBetweenNowAndCounterTimeStamp < 86400000;
}

export function checkCounterLimit(count, max) {
  const isCounterLimit = count >= max;
  return isCounterLimit;
}
