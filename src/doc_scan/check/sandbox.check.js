const Validation = require('yoti/src/yoti_common/validation');
const SandboxCheckResult = require('./sandbox.check.result');

class SandboxCheck {
  /**
   * @param {SandboxCheckResult} result
   */
  constructor(result) {
    if (new.target === SandboxCheck) {
      throw TypeError('SandboxCheck cannot be instantiated');
    }

    Validation.instanceOf(result, SandboxCheckResult, 'result');
    this.result = result;
  }

  toJSON() {
    return {
      result: this.result,
    };
  }
}

module.exports = SandboxCheck;
