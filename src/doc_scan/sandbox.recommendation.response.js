const Validation = require('yoti/src/yoti_common/validation');

class SandboxRecommendationResponse {
  /**
   * @param {string} value
   * @param {string} reason
   * @param {string} recoverySuggestion
   */
  constructor(value, reason, recoverySuggestion) {
    Validation.isString(value, 'value');
    this.value = value;

    Validation.isString(reason, 'reason', true);
    this.reason = reason;

    Validation.isString(recoverySuggestion, 'recovery_suggestion', true);
    this.recoverySuggestion = recoverySuggestion;
  }

  toJSON() {
    return {
      value: this.value,
      reason: this.reason,
      recovery_suggestion: this.recoverySuggestion,
    };
  }
}

module.exports = SandboxRecommendationResponse;
