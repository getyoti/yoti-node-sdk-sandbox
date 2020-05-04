const {
  SandboxExpectationBuilder,
  SandboxCheckReportsBuilder,
  SandboxTaskResultsBuilder,
  SandboxDocumentTextDataExtractionTaskBuilder,
} = require('../..');
const SandboxExpectation = require('../../src/doc_scan/sandbox.expectation');

const SOME_CHECK_REPORTS = new SandboxCheckReportsBuilder().build();
const SOME_TASK = new SandboxDocumentTextDataExtractionTaskBuilder()
  .build();
const SOME_TASK_RESULTS = new SandboxTaskResultsBuilder()
  .withDocumentTextDataExtractionTask(SOME_TASK)
  .build();

describe('SandboxExpectationBuilder', () => {
  describe('#build', () => {
    it('builds a SandboxExpectation with check reports', () => {
      const expectation = new SandboxExpectationBuilder()
        .withCheckReports(SOME_CHECK_REPORTS)
        .build();

      expect(expectation).toBeInstanceOf(SandboxExpectation);

      expect(JSON.stringify(expectation))
        .toEqual(JSON.stringify({
          check_reports: SOME_CHECK_REPORTS,
        }));
    });
  });

  describe('#withTaskResults', () => {
    it('builds a SandboxExpectation with task results', () => {
      const expectation = new SandboxExpectationBuilder()
        .withCheckReports(SOME_CHECK_REPORTS)
        .withTaskResults(SOME_TASK_RESULTS)
        .build();

      expect(expectation).toBeInstanceOf(SandboxExpectation);

      expect(JSON.stringify(expectation))
        .toEqual(JSON.stringify({
          task_results: SOME_TASK_RESULTS,
          check_reports: SOME_CHECK_REPORTS,
        }));
    });
  });
});
