class SandboxDocumentTextDataExtractionTaskResult {
  /**
   * @param {Object.<string,*>} documentFields
   */
  constructor(documentFields) {
    this.documentFields = documentFields;
  }

  toJSON() {
    return {
      document_fields: this.documentFields,
    };
  }
}

module.exports = SandboxDocumentTextDataExtractionTaskResult;
