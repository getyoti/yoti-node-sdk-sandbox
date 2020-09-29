'use strict';

const SandboxCheckResult = require('./sandbox.check.result');

class SandboxDocumentTextDataCheckResult extends SandboxCheckResult {
  /**
   * @param {SandboxCheckReport} report
   * @param {Object.<string,*>} documentFields
   */
  constructor(report, documentFields) {
    super(report);

    this.documentFields = documentFields;
  }

  toJSON() {
    const jsonData = super.toJSON();
    jsonData.document_fields = this.documentFields;
    return jsonData;
  }
}

module.exports = SandboxDocumentTextDataCheckResult;
