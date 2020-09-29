const { Validation } = require('../../../util');
const SandboxDocumentTextDataExtractionTask = require('./sandbox.document.text.data.extraction.task');
const SandboxDocumentTextDataExtractionTaskResult = require('./sandbox.document.text.data.extraction.task.result');
const SandboxDocumentFilter = require('../sandbox.document.filter');
const SandboxDocumentIdPhoto = require('./sandbox.document.id.photo');

class SandboxDocumentTextDataExtractionTaskBuilder {
  /**
   * @param {string} key
   * @param {*} value
   *
   * @returns {this}
   */
  withDocumentField(key, value) {
    Validation.isString(key, 'key');
    this.documentFields = this.documentFields || {};
    this.documentFields[key] = value;
    return this;
  }

  /**
   * @param {Object.<string,*>} documentFields
   *
   * @returns {this}
   */
  withDocumentFields(documentFields) {
    this.documentFields = documentFields;
    return this;
  }

  /**
   * @param {SandboxDocumentFilter} documentFilter
   *
   * @returns {this}
   */
  withDocumentFilter(documentFilter) {
    Validation.instanceOf(documentFilter, SandboxDocumentFilter, 'documentFilter');
    this.documentFilter = documentFilter;
    return this;
  }

  /**
   * @param {string} contentType
   * @param {Buffer} data
   */
  withDocumentIdPhoto(contentType, data) {
    this.documentIdPhoto = new SandboxDocumentIdPhoto(contentType, data);
    return this;
  }

  /**
   * @returns {SandboxDocumentTextDataExtractionTask}
   */
  build() {
    const result = new SandboxDocumentTextDataExtractionTaskResult(
      this.documentFields,
      this.documentIdPhoto
    );
    return new SandboxDocumentTextDataExtractionTask(result, this.documentFilter);
  }
}

module.exports = SandboxDocumentTextDataExtractionTaskBuilder;
