/**
 * @class TokenRequest
 */
class TokenRequest {
  /**
   * @param {string} rememberMeId
   * @param {SandboxAttribute[]} sandboxAttributes
   * @param {SandboxExtraData} extraData
   */
  constructor(rememberMeId, sandboxAttributes, extraData) {
    this.rememberMeId = rememberMeId;
    this.sandboxAttributes = sandboxAttributes;
    this.extraData = extraData;
  }

  /**
   * @returns {Object} data for JSON.stringify()
   */
  toJSON() {
    return {
      remember_me_id: this.rememberMeId,
      profile_attributes: this.sandboxAttributes,
      extra_data: this.extraData,
    };
  }
}

module.exports = TokenRequest;
