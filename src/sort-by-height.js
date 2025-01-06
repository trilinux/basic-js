const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const result = [...arr];
  const sortedValues = result.filter((x) => x !== -1).sort((a, b) => a - b);
  let index = 0;
  return result.map((x) => (x === -1 ? -1 : sortedValues[index++]));
}

module.exports = {
  sortByHeight,
};
