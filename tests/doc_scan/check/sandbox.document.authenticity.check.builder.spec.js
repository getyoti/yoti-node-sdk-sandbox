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
              recommendation: {
                value: 'some-value',
              },
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
              recommendation: {
                value: 'some-value',
              },
              breakdown: [{
                sub_check: 'some-check',
                result: 'some-result',
                details: [],
              }],
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
              recommendation: {
                value: 'some-value',
              },
              breakdown: [{
                sub_check: 'some-check',
                result: 'some-result',
                details: [],
              }],
            },
          },
        }));
    });
  });

  describe('#withDocumentFilter', () => {
    it('Should build SandboxDocumentAuthenticityCheck with document filter', () => {
      const check = new SandboxDocumentAuthenticityCheckBuilder()
        .withRecommendation(SOME_RECOMMENDATION)
        .withDocumentFilter(new SandboxDocumentFilterBuilder().build())
        .build();

      expect(check)
        .toBeInstanceOf(SandboxDocumentAuthenticityCheck);

      expect(JSON.stringify(check))
        .toEqual(JSON.stringify({
          result: {
            report: {
              recommendation: {
                value: 'some-value',
              },
              breakdown: [],
            },
          },
          document_filter: {
            document_types: [],
            country_codes: [],
          },
        }));
    });
  });
});
