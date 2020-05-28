const { Validation } = require('../../util');
const SandboxDocumentTextDataCheck = require('./check/sandbox.document.text.data.check');
const SandboxLivenessCheck = require('./check/sandbox.liveness.check');
const SandboxDocumentFaceMatchCheck = require('./check/sandbox.document.face.match.check');
const SandboxDocumentAuthenticityCheck = require('./check/sandbox.document.authenticity.check');
const SandboxCheckReports = require('./sandbox.check.reports');

class SandboxCheckReportsBuilder {
  constructor() {
    this.livenessChecks = [];
    this.documentTextDataChecks = [];
    this.documentAuthenticityChecks = [];
    this.documentFaceMatchChecks = [];
  }

  /**
   * @param {SandboxDocumentTextDataCheck} documentTextDataCheck
   *
   * @returns {this}
   */
  withDocumentTextDataCheck(documentTextDataCheck) {
    Validation.instanceOf(documentTextDataCheck, SandboxDocumentTextDataCheck, 'documentTextDataCheck');
    this.documentTextDataChecks.push(documentTextDataCheck);
    return this;
  }

  /**
   * @param {SandboxDocumentAuthenticityCheck} documentAuthenticityCheck
   *
   * @returns {this}
   */
  withDocumentAuthenticityCheck(documentAuthenticityCheck) {
    Validation.instanceOf(documentAuthenticityCheck, SandboxDocumentAuthenticityCheck, 'documentAuthenticityCheck');
    this.documentAuthenticityChecks.push(documentAuthenticityCheck);
    return this;
  }

  /**
   * @param {SandboxLivenessCheck} livenessCheck
   *
   * @returns {this}
   */
  withLivenessCheck(livenessCheck) {
    Validation.instanceOf(livenessCheck, SandboxLivenessCheck, 'livenessCheck');
    this.livenessChecks.push(livenessCheck);
    return this;
  }

  /**
   * @param {SandboxDocumentFaceMatchCheck} documentFaceMatchCheck
   *
   * @returns {this}
   */
  withDocumentFaceMatchCheck(documentFaceMatchCheck) {
    Validation.instanceOf(documentFaceMatchCheck, SandboxDocumentFaceMatchCheck, 'documentFaceMatchCheck');
    this.documentFaceMatchChecks.push(documentFaceMatchCheck);
    return this;
  }

  /**
   * @param {int} asyncReportDelay
   *
   * @returns {this}
   */
  withAsyncReportDelay(asyncReportDelay) {
    Validation.isInteger(asyncReportDelay, 'asyncReportsDelay');
    this.asyncReportDelay = asyncReportDelay;
    return this;
  }

  /**
   * @returns {SandboxCheckReports}
   */
  build() {
    return new SandboxCheckReports(
      this.documentTextDataChecks,
      this.documentAuthenticityChecks,
      this.livenessChecks,
      this.documentFaceMatchChecks,
      this.asyncReportDelay
    );
  }
}

module.exports = SandboxCheckReportsBuilder;
