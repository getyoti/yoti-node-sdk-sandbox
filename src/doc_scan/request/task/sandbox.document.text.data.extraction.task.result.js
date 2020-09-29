const { Validation } = require('../../../util');
const SandboxDocumentIdPhoto = require('./sandbox.document.id.photo');

class SandboxDocumentTextDataExtractionTaskResult {
  /**
   * @param {Object.<string,*>} documentFields
   * @param {SandboxDocumentIdPhoto} documentIdPhoto
   */
  constructor(documentFields, documentIdPhoto) {
    this.documentFields = documentFields;

    if (documentIdPhoto) {
      Validation.instanceOf(documentIdPhoto, SandboxDocumentIdPhoto, 'documentIdPhoto');
      this.documentIdPhoto = documentIdPhoto;
    }
  }

  toJSON() {
    return {
      document_fields: this.documentFields,
      document_id_photo: this.documentIdPhoto,
    };
  }
}

module.exports = SandboxDocumentTextDataExtractionTaskResult;
