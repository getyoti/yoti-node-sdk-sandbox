const Validation = require('yoti/src/yoti_common/validation');
const SandboxRecommendation = require('../sandbox.recommendation');
const SandboxBreakdown = require('../sandbox.breakdown');

/**
 * Base check builder.
 */
class SandboxCheckBuilder {
  constructor() {
    if (new.target === SandboxCheckBuilder) {
      throw TypeError('SandboxCheckBuilder cannot be instantiated');
    }

    this.breakdown = [];
  }

  /**
   * @param {SandboxRecommendation} recommendation
   *
   * @returns {this}
   */
  withRecommendation(recommendation) {
    Validation.instanceOf(recommendation, SandboxRecommendation, 'recommendation');
    this.recommendation = recommendation;
    return this;
  }

  /**
   * @param {SandboxBreakdown} recommendation
   *
   * @returns {this}
   */
  withBreakdown(breakdown) {
    Validation.instanceOf(breakdown, SandboxBreakdown, 'breakdown');
    this.breakdown.push(breakdown);
    return this;
  }

  /**
   * @param {SandboxBreakdown[]} recommendation
   *
   * @returns {this}
   */
  withBreakdownList(breakdownList) {
    Validation.isArrayOfType(breakdownList, SandboxBreakdown, 'breakdownList');
    this.breakdown = breakdownList;
    return this;
  }
}

module.exports = SandboxCheckBuilder;
