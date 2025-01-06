const { NotImplementedError } = require("../extensions/index.js");

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
  if (!date) return "Unable to determine the time of year!";
  try {
    const isDateInstance = date instanceof Date;
    const dateConverted = new Date(date);
    const isValidDate = !isNaN(dateConverted.getTime());
    if (
      !isDateInstance ||
      !isValidDate ||
      date.toString !== Date.prototype.toString
    ) {
      throw new Error();
    }
    const month = date.getMonth();
    if (month >= 2 && month <= 4) return "spring";
    if (month >= 5 && month <= 7) return "summer";
    if (month >= 8 && month <= 10) return "autumn";
    return "winter";
  } catch {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason,
};
