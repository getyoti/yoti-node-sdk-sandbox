const Validation = require('yoti/src/yoti_common/validation');

class SandboxDocumentTextDataExtractionTaskResult {
  /**
   * @param {Object<string, string>} documentFields
   */
  constructor(documentFields) {
    Validation.isArrayOfStrings(
      Object.keys(documentFields).map(k => documentFields[k]),
      'documentFields'
    );
    this.documentFields = documentFields;
  }

  toJSON() {
    return {
      document_fields: this.documentFields,
    };
  }
}

module.exports = SandboxDocumentTextDataExtractionTaskResult;
