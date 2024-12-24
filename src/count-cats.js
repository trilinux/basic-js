const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function countCats(matrix) {
  let cats_counter = 0;

  function isCat(data) {
    if (data === "^^") cats_counter += 1;
  }

  for (let i = 0; i < matrix.length; i += 1) {
    if (matrix[i] instanceof Array) {
      for (let k = 0; k < matrix[i].length; k += 1) {
        isCat(matrix[i][k]);
      }
    } else isCat(matrix[i]);
  }
  return cats_counter;
}

module.exports = {
  countCats,
};
