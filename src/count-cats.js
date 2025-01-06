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
  let stack = [...matrix];

  while (stack.length > 0) {
    const item = stack.pop();

    if (Array.isArray(item)) {
      stack.push(...item);
    } else {
      if (item === "^^") {
        cats_counter += 1;
      }
    }
  }

  return cats_counter;
}

module.exports = {
  countCats,
};
