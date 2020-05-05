const { Validation } = require('../util');
const { DocScanConstants } = require('yoti');
const SandboxDocumentTextDataCheck = require('./check/sandbox.document.text.data.check');
const SandboxDocumentFaceMatchCheck = require('./check/sandbox.document.face.match.check');
const SandboxDocumentAuthenticityCheck = require('./check/sandbox.document.authenticity.check');
const SandboxLivenessCheck = require('./check/sandbox.liveness.check');

class SandboxCheckReports {
  /**
   * @param {SandboxTextDataCheck[]} documentTextDataChecks
   * @param {SandboxDocumentAuthenticityCheck[]} documentAuthenticityChecks
   * @param {SandboxLivenessCheck[]} livenessChecks
   * @param {SandboxDocumentFaceMatchCheck[]} documentFaceMatchChecks
   * @param {int} asyncReportDelay
   */
  constructor(
    documentTextDataChecks,
    documentAuthenticityChecks,
    livenessChecks,
    documentFaceMatchChecks,
    asyncReportDelay
  ) {
    Validation.isArrayOfType(documentTextDataChecks, SandboxDocumentTextDataCheck, 'documentTextDataCheck');
    this.documentTextDataChecks = documentTextDataChecks;

    Validation.isArrayOfType(documentAuthenticityChecks, SandboxDocumentAuthenticityCheck, 'documentAuthenticityCheck');
    this.documentAuthenticityChecks = documentAuthenticityChecks;

    Validation.isArrayOfType(livenessChecks, SandboxLivenessCheck, 'livenessCheck');
    this.livenessChecks = livenessChecks;

    Validation.isArrayOfType(documentFaceMatchChecks, SandboxDocumentFaceMatchCheck, 'documentFaceMatchCheck');
    this.documentFaceMatchChecks = documentFaceMatchChecks;

    Validation.isInteger(asyncReportDelay, 'asyncReportDelay', true);
    this.asyncReportDelay = asyncReportDelay;
  }

  toJSON() {
    return {
      [DocScanConstants.ID_DOCUMENT_TEXT_DATA_CHECK]: this.documentTextDataChecks,
      [DocScanConstants.ID_DOCUMENT_AUTHENTICITY]: this.documentAuthenticityChecks,
      [DocScanConstants.ID_DOCUMENT_FACE_MATCH]: this.documentFaceMatchChecks,
      [DocScanConstants.LIVENESS]: this.livenessChecks,
      async_report_delay: this.asyncReportDelay,
    };
  }
}

module.exports = SandboxCheckReports;
