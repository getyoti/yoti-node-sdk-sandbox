const Validation = require('yoti/src/yoti_common/validation');
const SandboxRecommendationResponse = require('../sandbox.recommendation.response');
const SandboxBreakdownResponse = require('../sandbox.breakdown.response');

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
   * @param {SandboxRecommendationResponse} recommendation
   *
   * @returns {this}
   */
  withRecommendation(recommendation) {
    Validation.instanceOf(recommendation, SandboxRecommendationResponse, 'recommendation');
    this.recommendation = recommendation;
    return this;
  }

  /**
   * @param {SandboxBreakdownResponse} recommendation
   *
   * @returns {this}
   */
  withBreakdown(breakdown) {
    Validation.instanceOf(breakdown, SandboxBreakdownResponse, 'breakdown');
    this.breakdown.push(breakdown);
    return this;
  }

  /**
   * @param {SandboxBreakdownResponse[]} recommendation
   *
   * @returns {this}
   */
  withBreakdownList(breakdownList) {
    Validation.isArrayOfType(breakdownList, SandboxBreakdownResponse, 'breakdownList');
    this.breakdown = breakdownList;
    return this;
  }
}

module.exports = SandboxCheckBuilder;
