const { Validation } = require('../../../util');
const SandboxDocumentCheckBuilder = require('./sandbox.document.check.builder');
const SandboxDocumentTextDataCheck = require('./sandbox.document.text.data.check');
const SandboxCheckReport = require('./sandbox.check.report');
const SandboxDocumentTextDataCheckResult = require('./sandbox.document.text.data.check.result');

class SandboxDocumentTextDataCheckBuilder extends SandboxDocumentCheckBuilder {
  constructor() {
    super();
    this.documentFields = {};
  }

  /**
   * @param {string} key
   * @param {*} value
   */
  withDocumentField(key, value) {
    Validation.isString(key, 'key');
    this.documentFields[key] = value;
    return this;
  }

  /**
   * @param {Object.<string,*>} documentFields
   */
  withDocumentFields(documentFields) {
    Validation.instanceOf(documentFields, Object, 'documentFields');
    this.documentFields = documentFields;
    return this;
  }

  /**
   * @returns {SandboxDocumentTextDataCheck}
   */
  build() {
    const report = new SandboxCheckReport(this.recommendation, this.breakdown);
    const result = new SandboxDocumentTextDataCheckResult(report, this.documentFields);
    return new SandboxDocumentTextDataCheck(result, this.documentFilter);
  }
}

module.exports = SandboxDocumentTextDataCheckBuilder;
