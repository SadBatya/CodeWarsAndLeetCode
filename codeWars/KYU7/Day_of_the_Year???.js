// Work out what number day of the year it is.

// toDayOfYear([1, 1, 2000]) => 1
// The argument passed into the function is an array with the format [D, M, YYYY], e.g. [1, 2, 2000] for February 1st, 2000 or [22, 12, 1999] for December 22nd, 1999.

// Don't forget to check for whether it's a leap year! Three criteria must be taken into account to identify leap years:

// The year can be evenly divided by 4;
// If the year can be evenly divided by 100, it is NOT a leap year, unless;
// The year is also evenly divisible by 400. Then it is a leap year.

function toDayOfYear([day, month, year]) {
  const startYear = new Date(year.toString(), '1', '0');
  const nowDate = new Date(year.toString(), month.toString(), day.toString());

  let allDaysPast = 0;

  allDaysPast = (nowDate - startYear) / 86400000;

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    allDaysPast + 1;
  } else {
    allDaysPast;
  }

  return allDaysPast;
}


