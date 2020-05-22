const SandboxDocumentTextDataCheck = require('../../../../src/doc_scan/request/check/sandbox.document.text.data.check');

const {
  SandboxDocumentFilterBuilder,
  SandboxDocumentTextDataCheckBuilder,
  SandboxRecommendationBuilder,
  SandboxBreakdownBuilder,
} = require('../../../..');

const SOME_RECOMMENDATION = new SandboxRecommendationBuilder()
  .withValue('some-value')
  .build();

const SOME_BREAKDOWN = new SandboxBreakdownBuilder()
  .withResult('some-result')
  .withSubCheck('some-check')
  .build();

const SOME_FILTER = new SandboxDocumentFilterBuilder().build();

describe('SandboxDocumentTextDataCheckBuilder', () => {
  describe('#withRecommendation', () => {
    it('Should build SandboxDocumentTextDataCheck with recommendation', () => {
      const check = new SandboxDocumentTextDataCheckBuilder()
        .withRecommendation(SOME_RECOMMENDATION)
        .build();

      expect(check)
        .toBeInstanceOf(SandboxDocumentTextDataCheck);

      expect(JSON.stringify(check))
        .toEqual(JSON.stringify({
          result: {
            report: {
              recommendation: SOME_RECOMMENDATION,
              breakdown: [],
            },
            document_fields: {},
          },
        }));
    });
  });

  describe('#withBreakdown', () => {
    it('Should build SandboxDocumentTextDataCheck with breakdown', () => {
      const check = new SandboxDocumentTextDataCheckBuilder()
        .withRecommendation(SOME_RECOMMENDATION)
        .withBreakdown(SOME_BREAKDOWN)
        .build();

      expect(check)
        .toBeInstanceOf(SandboxDocumentTextDataCheck);

      expect(JSON.stringify(check))
        .toEqual(JSON.stringify({
          result: {
            report: {
              recommendation: SOME_RECOMMENDATION,
              breakdown: [SOME_BREAKDOWN],
            },
            document_fields: {},
          },
        }));
    });
  });

  describe('#withBreakdowns', () => {
    it('Should build SandboxDocumentTextDataCheck with breakdown', () => {
      const check = new SandboxDocumentTextDataCheckBuilder()
        .withRecommendation(SOME_RECOMMENDATION)
        .withBreakdowns([SOME_BREAKDOWN])
        .build();

      expect(check)
        .toBeInstanceOf(SandboxDocumentTextDataCheck);

      expect(JSON.stringify(check))
        .toEqual(JSON.stringify({
          result: {
            report: {
              recommendation: SOME_RECOMMENDATION,
              breakdown: [SOME_BREAKDOWN],
            },
            document_fields: {},
          },
        }));
    });
  });

  describe('#withDocumentFields', () => {
    it('Should build SandboxDocumentTextDataCheck with document fields', () => {
      const SOME_DOCUMENT_FIELDS = {
        'some-key': 'some-value',
      };

      const check = new SandboxDocumentTextDataCheckBuilder()
        .withRecommendation(SOME_RECOMMENDATION)
        .withDocumentFields(SOME_DOCUMENT_FIELDS)
        .build();

      expect(check)
        .toBeInstanceOf(SandboxDocumentTextDataCheck);

      expect(JSON.stringify(check))
        .toEqual(JSON.stringify({
          result: {
            report: {
              recommendation: SOME_RECOMMENDATION,
              breakdown: [],
            },
            document_fields: SOME_DOCUMENT_FIELDS,
          },
        }));
    });
  });

  describe('#withDocumentField', () => {
    it('Should build SandboxDocumentTextDataCheck with document fields', () => {
      const check = new SandboxDocumentTextDataCheckBuilder()
        .withRecommendation(SOME_RECOMMENDATION)
        .withDocumentField('some-key', 'some-value')
        .withDocumentField('some-other-key', 'some-other-value')
        .build();

      expect(check)
        .toBeInstanceOf(SandboxDocumentTextDataCheck);

      expect(JSON.stringify(check))
        .toEqual(JSON.stringify({
          result: {
            report: {
              recommendation: SOME_RECOMMENDATION,
              breakdown: [],
            },
            document_fields: {
              'some-key': 'some-value',
              'some-other-key': 'some-other-value',
            },
          },
        }));
    });
  });

  describe('#withDocumentFilter', () => {
    it('Should build SandboxDocumentTextDataCheck with document filter', () => {
      const check = new SandboxDocumentTextDataCheckBuilder()
        .withRecommendation(SOME_RECOMMENDATION)
        .withDocumentFilter(new SandboxDocumentFilterBuilder().build())
        .build();

      expect(check)
        .toBeInstanceOf(SandboxDocumentTextDataCheck);

      expect(JSON.stringify(check))
        .toEqual(JSON.stringify({
          result: {
            report: {
              recommendation: SOME_RECOMMENDATION,
              breakdown: [],
            },
            document_fields: {},
          },
          document_filter: SOME_FILTER,
        }));
    });
  });
});
