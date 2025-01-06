const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  depth = 0;
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    this.depth = 1;
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        this.depth = Math.max(this.depth, this.calculateDepth(item) + 1);
      }
    });
    return this.depth;
  }
}

module.exports = {
  DepthCalculator,
};
