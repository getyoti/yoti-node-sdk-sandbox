const Validation = require('yoti/src/yoti_common/validation');
const SandboxRecommendationResponse = require('./sandbox.recommendation.response');

class SandboxRecommendationResponseBuilder {
  /**
   * @param {string} value
   *
   * @returns {this}
   */
  withValue(value) {
    Validation.isString(value, 'value');
    this.value = value;
    return this;
  }

  /**
   * @param {string} value
   *
   * @returns {this}
   */
  withReason(reason) {
    Validation.isString(reason, 'reason');
    this.reason = reason;
    return this;
  }

  /**
   * @param {string} value
   *
   * @returns {this}
   */
  withRecoverySuggestion(recoverySuggestion) {
    Validation.isString(recoverySuggestion, 'recoverySuggestion');
    this.recoverySuggestion = recoverySuggestion;
    return this;
  }

  /**
   * @returns {SandboxRecommendationResponse}
   */
  build() {
    return new SandboxRecommendationResponse(this.value, this.reason, this.recoverySuggestion);
  }
}

module.exports = SandboxRecommendationResponseBuilder;
