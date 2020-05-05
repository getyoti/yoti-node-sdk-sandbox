const Validation = require('yoti/src/yoti_common/validation');
const SandboxRecommendation = require('./sandbox.recommendation');

class SandboxRecommendationBuilder {
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
   * @returns {SandboxRecommendation}
   */
  build() {
    return new SandboxRecommendation(this.value, this.reason, this.recoverySuggestion);
  }
}

module.exports = SandboxRecommendationBuilder;
