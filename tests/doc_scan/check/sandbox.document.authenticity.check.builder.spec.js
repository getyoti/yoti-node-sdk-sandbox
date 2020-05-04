const SandboxDocumentAuthenticityCheck = require('../../../src/doc_scan/check/sandbox.document.authenticity.check');

const {
  SandboxDocumentFilterBuilder,
  SandboxDocumentAuthenticityCheckBuilder,
  SandboxRecommendationResponseBuilder,
  SandboxBreakdownResponseBuilder,
} = require('../../..');

const SOME_RECOMMENDATION = new SandboxRecommendationResponseBuilder()
  .withValue('some-value')
  .build();

const SOME_BREAKDOWN = new SandboxBreakdownResponseBuilder()
  .withResult('some-result')
  .withSubCheck('some-check')
  .build();

const SOME_FILTER = new SandboxDocumentFilterBuilder().build();

describe('SandboxDocumentAuthenticityCheckBuilder', () => {
  describe('#withRecommendation', () => {
    it('Should build SandboxDocumentAuthenticityCheck with recommendation', () => {
      const check = new SandboxDocumentAuthenticityCheckBuilder()
        .withRecommendation(SOME_RECOMMENDATION)
        .build();

      expect(check)
        .toBeInstanceOf(SandboxDocumentAuthenticityCheck);

      expect(JSON.stringify(check))
        .toEqual(JSON.stringify({
          result: {
            report: {
              recommendation: SOME_RECOMMENDATION,
              breakdown: [],
            },
          },
        }));
    });
  });

  describe('#withBreakdown', () => {
    it('Should build SandboxDocumentAuthenticityCheck with breakdown', () => {
      const check = new SandboxDocumentAuthenticityCheckBuilder()
        .withRecommendation(SOME_RECOMMENDATION)
        .withBreakdown(SOME_BREAKDOWN)
        .build();

      expect(check)
        .toBeInstanceOf(SandboxDocumentAuthenticityCheck);

      expect(JSON.stringify(check))
        .toEqual(JSON.stringify({
          result: {
            report: {
              recommendation: SOME_RECOMMENDATION,
              breakdown: [SOME_BREAKDOWN],
            },
          },
        }));
    });
  });

  describe('#withBreakdownList', () => {
    it('Should build SandboxDocumentAuthenticityCheck with breakdown', () => {
      const check = new SandboxDocumentAuthenticityCheckBuilder()
        .withRecommendation(SOME_RECOMMENDATION)
        .withBreakdownList([SOME_BREAKDOWN])
        .build();

      expect(check)
        .toBeInstanceOf(SandboxDocumentAuthenticityCheck);

      expect(JSON.stringify(check))
        .toEqual(JSON.stringify({
          result: {
            report: {
              recommendation: SOME_RECOMMENDATION,
              breakdown: [SOME_BREAKDOWN],
            },
          },
        }));
    });
  });

  describe('#withDocumentFilter', () => {
    it('Should build SandboxDocumentAuthenticityCheck with document filter', () => {
      const check = new SandboxDocumentAuthenticityCheckBuilder()
        .withRecommendation(SOME_RECOMMENDATION)
        .withDocumentFilter(SOME_FILTER)
        .build();

      expect(check)
        .toBeInstanceOf(SandboxDocumentAuthenticityCheck);

      expect(JSON.stringify(check))
        .toEqual(JSON.stringify({
          result: {
            report: {
              recommendation: SOME_RECOMMENDATION,
              breakdown: [],
            },
          },
          document_filter: SOME_FILTER,
        }));
    });
  });
});
