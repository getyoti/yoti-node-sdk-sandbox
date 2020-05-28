const { Validation } = require('../../../util');
const SandboxDocumentTextDataExtractionTask = require('./sandbox.document.text.data.extraction.task');
const SandboxDocumentTextDataExtractionTaskResult = require('./sandbox.document.text.data.extraction.task.result');
const SandboxDocumentFilter = require('../sandbox.document.filter');

class SandboxDocumentTextDataExtractionTaskBuilder {
  constructor() {
    this.documentFields = {};
  }

  /**
   * @param {string} key
   * @param {string} value
   *
   * @returns {this}
   */
  withDocumentField(key, value) {
    Validation.isString(key, 'key');
    Validation.isString(value, 'value');
    this.documentFields[key] = value;
    return this;
  }

  /**
   * @param {Object<string, string>} documentFields
   *
   * @returns {this}
   */
  withDocumentFields(documentFields) {
    Validation.isArrayOfStrings(
      Object.keys(documentFields).map(k => documentFields[k]),
      'documentFields'
    );
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
   * @returns {SandboxDocumentTextDataExtractionTask}
   */
  build() {
    const result = new SandboxDocumentTextDataExtractionTaskResult(this.documentFields);
    return new SandboxDocumentTextDataExtractionTask(result, this.documentFilter);
  }
}

module.exports = SandboxDocumentTextDataExtractionTaskBuilder;
