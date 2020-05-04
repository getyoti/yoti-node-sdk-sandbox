const Validation = require('yoti/src/yoti_common/validation');
const SandboxDocumentTextDataExtractionTask = require('./task/sandbox.document.text.data.extraction.task');
const SandboxTaskResults = require('./sandbox.task.results');

class SandboxTaskResultsBuilder {
  constructor() {
    this.documentTextDataExtractionTasks = [];
  }

  /**
   * @param {DocumentTextDataExtractionTask} documentTextDataExtractionTask
   *
   * @returns {this}
   */
  withDocumentTextDataExtractionTask(documentTextDataExtractionTask) {
    Validation.instanceOf(
      documentTextDataExtractionTask,
      SandboxDocumentTextDataExtractionTask,
      'documentTextDataExtractionTask'
    );
    this.documentTextDataExtractionTasks.push(documentTextDataExtractionTask);
    return this;
  }

  /**
   * @returns {SandboxTaskResults}
   */
  build() {
    return new SandboxTaskResults(this.documentTextDataExtractionTasks);
  }
}

module.exports = SandboxTaskResultsBuilder;
