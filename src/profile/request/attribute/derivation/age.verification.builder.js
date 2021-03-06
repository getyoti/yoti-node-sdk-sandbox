'use strict';

const {
  YotiDate,
  constants,
} = require('yoti');
const SandboxAgeVerification = require('./age.verification');
const SandboxAnchor = require('../anchor');
const { Validation } = require('../../../../util');

/**
 * @class SandboxAgeVerificationBuilder
 */
class SandboxAgeVerificationBuilder {
  /**
   * @param {YotiDate} value
   *
   * @returns {SandboxAgeVerificationBuilder}
   */
  withDateOfBirth(value) {
    Validation.isYotiDate(value, 'value');
    this.dateOfBirth = value;
    return this;
  }

  /**
   * @param {string} value
   *
   * @returns {SandboxAgeVerificationBuilder}
   */
  withDateOfBirthString(value) {
    Validation.isString(value, 'value');
    return this.withDateOfBirth(YotiDate.fromDateString(value));
  }

  /**
   * @param {integer} value
   *
   * @returns {SandboxAgeVerificationBuilder}
   */
  withAgeOver(value) {
    Validation.isInteger(value);
    return this.withDerivation(constants.ATTR_AGE_OVER + value);
  }

  /**
   * @param {integer} value
   *
   * @returns {SandboxAgeVerificationBuilder}
   */
  withAgeUnder(value) {
    Validation.isInteger(value);
    return this.withDerivation(constants.ATTR_AGE_UNDER + value);
  }

  /**
   * @param {string} value
   *
   * @returns {SandboxAgeVerificationBuilder}
   */
  withDerivation(value) {
    Validation.isString(value, 'derivation');
    this.derivation = value;
    return this;
  }

  /**
   * @param {SandboxAnchor[]} value
   *
   * @returns {SandboxAgeVerificationBuilder}
   */
  withAnchors(anchors) {
    Validation.isArrayOfType(anchors, SandboxAnchor, 'anchors');
    this.anchors = anchors;
    return this;
  }

  /**
   * @returns {SandboxAgeVerification}
   */
  build() {
    return new SandboxAgeVerification(this.dateOfBirth, this.derivation, this.anchors);
  }
}

module.exports = SandboxAgeVerificationBuilder;
