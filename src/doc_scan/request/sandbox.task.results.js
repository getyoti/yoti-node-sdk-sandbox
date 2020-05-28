const { DocScanConstants } = require('yoti');
const { Validation } = require('../../util');
const SandboxDocumentTextDataExtractionTask = require('./task/sandbox.document.text.data.extraction.task');

class SandboxTaskResults {
  /**
   * @param {SandboxDocumentTextDataExtractionTask[]} documentTextDataExtractionTasks
   */
  constructor(documentTextDataExtractionTasks) {
    Validation.isArrayOfType(
      documentTextDataExtractionTasks,
      SandboxDocumentTextDataExtractionTask,
      'documentTextDataExtractionTasks'
    );
    this.documentTextDataExtractionTasks = documentTextDataExtractionTasks;
  }

  toJSON() {
    return {
      [DocScanConstants.ID_DOCUMENT_TEXT_DATA_EXTRACTION]: this.documentTextDataExtractionTasks,
    };
  }
}

module.exports = SandboxTaskResults;
