const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const determineErrorMessage = 'Unable to determine the time of year!';
  if (!date instanceof Date) throw new Error('Invalid date!');
  if (date == undefined) return determineErrorMessage;
  let mountsDate = date.getMonth();
  if (mountsDate >= 2 && mountsDate <= 4) return 'spring';
  else if (mountsDate >= 5 && mountsDate <= 7) return 'summer';
  else if (mountsDate >= 8 && mountsDate <= 10) return 'autumn';
  else if (mountsDate >= 11 || mountsDate <= 1) return 'winter';
};

module.exports = {
  getSeason
};
