const { Validation } = require('../util');
const SandboxTaskResults = require('./sandbox.task.results');
const SandboxCheckReports = require('./sandbox.check.reports');
const SandboxExpectation = require('./sandbox.expectation');

class SandboxExpectationBuilder {
  /**
   * @param {SandboxTaskResults} taskResults
   */
  withTaskResults(taskResults) {
    Validation.instanceOf(taskResults, SandboxTaskResults, 'taskResults');
    this.taskResults = taskResults;
    return this;
  }

  /**
   * @param {SandboxCheckReports} checkReports
   */
  withCheckReports(checkReports) {
    Validation.instanceOf(checkReports, SandboxCheckReports, 'checkReports');
    this.checkReports = checkReports;
    return this;
  }

  /**
   * @returns {SandboxExpectation}
   */
  build() {
    return new SandboxExpectation(this.taskResults, this.checkReports);
  }
}

module.exports = SandboxExpectationBuilder;
