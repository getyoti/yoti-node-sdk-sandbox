const Validation = require('yoti/src/yoti_common/validation');
const SandboxRecommendationResponse = require('./sandbox.recommendation.response');

class SandboxRecommendationResponseBuilder {
  /**
   * @returns {SandboxRecommendationResponse}
   */
  static approvedRecommendation() {
    return new SandboxRecommendationResponse('APPROVE');
  }

  /**
   * @returns {SandboxRecommendationResponse}
   */
  static notAvailableRecommendation() {
    return new SandboxRecommendationResponse('NOT_AVAILABLE', 'PICTURE_TOO_DARK', 'BETTER_LIGHTING');
  }

  /**
   * @returns {SandboxRecommendationResponse}
   */
  static rejectedRecommendation() {
    return new SandboxRecommendationResponse('REJECT', 'NOT_GENUINE');
  }

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
