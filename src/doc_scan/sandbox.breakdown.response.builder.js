const Validation = require('yoti/src/yoti_common/validation');
const SandboxBreakdownResponse = require('./sandbox.breakdown.response');
const SandboxDetail = require('./sandbox.detail');

class SandboxBreakdownResponseBuilder {
  constructor() {
    this.details = [];
  }

  /**
   * @param {string} check
   *
   * @returns {SandboxBreakdownResponse}
   */
  static passForCheck(check) {
    Validation.isString(check, 'check');
    return new SandboxBreakdownResponse(check, 'PASS', []);
  }

  /**
   * @param {string} check
   *
   * @returns {SandboxBreakdownResponse}
   */
  static failForCheck(check) {
    Validation.isString(check, 'check');
    return new SandboxBreakdownResponse(check, 'FAIL', []);
  }

  /**
   * @param {string} subCheck
   *
   * @returns {this}
   */
  withSubCheck(subCheck) {
    Validation.isString(subCheck, 'subCheck');
    this.subCheck = subCheck;
    return this;
  }

  /**
   * @param {string} result
   *
   * @returns {this}
   */
  withResult(result) {
    Validation.isString(result, 'result');
    this.result = result;
    return this;
  }

  /**
   * @param {string} key
   * @param {string} value
   *
   * @returns {this}
   */
  withDetail(key, value) {
    this.details.push(new SandboxDetail(key, value));
    return this;
  }

  /**
   * @returns {SandboxBreakdownResponse}
   */
  build() {
    Validation.notNullOrEmpty(this.subCheck, 'subCheck');
    Validation.notNullOrEmpty(this.result, 'result');

    return new SandboxBreakdownResponse(this.subCheck, this.result, this.details);
  }
}

module.exports = SandboxBreakdownResponseBuilder;
