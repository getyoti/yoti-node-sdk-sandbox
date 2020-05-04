const Validation = require('yoti/src/yoti_common/validation');
const SandboxRecommendationResponse = require('../sandbox.recommendation.response');
const SandboxBreakdownResponse = require('../sandbox.breakdown.response');

class SandboxCheckReport {
  /**
   * @param {SandboxRecommendationResponse} recommendation
   * @param {SandboxBreakdownResponse} breakdown
   */
  constructor(recommendation, breakdown) {
    Validation.instanceOf(recommendation, SandboxRecommendationResponse, 'recommendation');
    this.recommendation = recommendation;

    Validation.isArrayOfType(breakdown, SandboxBreakdownResponse, 'breakdown');
    this.breakdown = breakdown;
  }

  toJSON() {
    return {
      recommendation: this.recommendation,
      breakdown: this.breakdown,
    };
  }
}

module.exports = SandboxCheckReport;
