const { Validation } = require('../../../util');
const SandboxCheckResult = require('./sandbox.check.result');

class SandboxDocumentTextDataCheckResult extends SandboxCheckResult {
  /**
   * @param {SandboxCheckReport} report
   * @param {Object<string, string>} documentFields
   */
  constructor(report, documentFields) {
    super(report);

    Validation.isArrayOfStrings(
      Object.keys(documentFields).map(k => documentFields[k]),
      'documentFields'
    );
    this.documentFields = documentFields;
  }

  toJSON() {
    const jsonData = super.toJSON();
    jsonData.document_fields = this.documentFields;
    return jsonData;
  }
}

module.exports = SandboxDocumentTextDataCheckResult;
