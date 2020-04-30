const { Validation } = require('../../../../util');
const SandboxDefinition = require('./definition');

class SandboxIssuingAttributes {
  /**
   * @param {YotiDate} expiryDate
   * @param {SandboxDefinition[]} definitions
   */
  constructor(expiryDate, definitions) {
    Validation.isYotiDate(expiryDate, 'expiryDate');
    this.expiryDate = expiryDate;

    Validation.isArrayOfType(definitions, SandboxDefinition, 'definitions');
    this.definitions = definitions;
  }

  /**
   * @returns {Object}
   */
  toJSON() {
    return {
      expiry_date: this.expiryDate.getMicrosecondTimestamp(),
      definitions: this.definitions,
    };
  }
}

module.exports = SandboxIssuingAttributes;
