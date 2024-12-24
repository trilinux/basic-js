const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array))
    throw new Error("'arr' parameter must be an instance of the Array!");

  let skip_next_flag = false;

  function transformAction(action, index) {
    switch (action) {
      case "--discard-prev":
        if (skip_next_flag) {
          skip_next_flag = false;
          return index;
        }
        result.pop();
        return index;
      case "--double-next":
        arr[index + 1] &&
          result.push(arr[index + 1]) &&
          result.push(arr[index + 1]);
        return index + 1;
      case "--double-prev":
        if (skip_next_flag) {
          skip_next_flag = false;
          return index;
        }
        result.length && result.push(result[result.length - 1]);
        return index;
      case "--discard-next":
        skip_next_flag = true;
        return index + 1;
      default:
        result.push(action);
    }
    return index;
  }

  // SOLUTION
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    i = transformAction(arr[i], i);
  }

  return result;
}

module.exports = {
  transform,
};
