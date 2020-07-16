const SandboxDocumentTextDataExtractionTask = require('../../../../src/doc_scan/request/task/sandbox.document.text.data.extraction.task');

const {
  SandboxDocumentTextDataExtractionTaskBuilder,
  SandboxDocumentFilterBuilder,
} = require('../../../..');

const SOME_KEY = 'some-key';
const SOME_VALUE = 'some-value';

describe('SandboxDocumentTextDataExtractionTaskBuilder', () => {
  describe('#build', () => {
    it('Builds SandboxDocumentTextDataExtractionTask', () => {
      const task = new SandboxDocumentTextDataExtractionTaskBuilder().build();

      expect(task).toBeInstanceOf(SandboxDocumentTextDataExtractionTask);
    });
  });

  describe('#withDocumentField', () => {
    it('Builds SandboxDocumentTextDataExtractionTask with document fields', () => {
      const task = new SandboxDocumentTextDataExtractionTaskBuilder()
        .withDocumentField(SOME_KEY, SOME_VALUE)
        .build();

      expect(task).toBeInstanceOf(SandboxDocumentTextDataExtractionTask);

      expect(JSON.stringify(task))
        .toEqual(JSON.stringify({
          result: {
            document_fields: {
              [SOME_KEY]: SOME_VALUE,
            },
          },
        }));
    });
  });

  describe('#withDocumentFields', () => {
    it('Builds SandboxDocumentTextDataExtractionTask with document fields', () => {
      const task = new SandboxDocumentTextDataExtractionTaskBuilder()
        .withDocumentFields({
          [SOME_KEY]: SOME_VALUE,
        })
        .build();

      expect(task).toBeInstanceOf(SandboxDocumentTextDataExtractionTask);

      expect(JSON.stringify(task))
        .toEqual(JSON.stringify({
          result: {
            document_fields: {
              [SOME_KEY]: SOME_VALUE,
            },
          },
        }));
    });
  });

  describe('#withDocumentFilter', () => {
    it('Builds SandboxDocumentTextDataExtractionTask with document filter', () => {
      const SOME_FILTER = new SandboxDocumentFilterBuilder().build();

      const task = new SandboxDocumentTextDataExtractionTaskBuilder()
        .withDocumentFilter(SOME_FILTER)
        .build();

      expect(task).toBeInstanceOf(SandboxDocumentTextDataExtractionTask);

      expect(JSON.stringify(task))
        .toEqual(JSON.stringify({
          result: {
            document_fields: {},
          },
          document_filter: SOME_FILTER,
        }));
    });
  });
});
