const Validation = require('yoti/src/yoti_common/validation');
const SandboxCheckReport = require('./sandbox.check.report');

class SandboxCheckResult {
  /**
   * @param {SandboxCheckReport} report
   */
  constructor(report) {
    Validation.instanceOf(report, SandboxCheckReport, 'report');
    this.report = report;
  }

  toJSON() {
    return {
      report: this.report,
    };
  }
}

module.exports = SandboxCheckResult;
