const SandboxDocumentFaceMatchCheck = require('../../../src/doc_scan/check/sandbox.document.face.match.check');

const {
  SandboxDocumentFilterBuilder,
  SandboxDocumentFaceMatchCheckBuilder,
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

describe('SandboxDocumentFaceMatchCheckBuilder', () => {
  describe('#withRecommendation', () => {
    it('Should build SandboxDocumentFaceMatchCheck with recommendation', () => {
      const check = new SandboxDocumentFaceMatchCheckBuilder()
        .withRecommendation(SOME_RECOMMENDATION)
        .build();

      expect(check)
        .toBeInstanceOf(SandboxDocumentFaceMatchCheck);

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
    it('Should build SandboxDocumentFaceMatchCheck with breakdown', () => {
      const check = new SandboxDocumentFaceMatchCheckBuilder()
        .withRecommendation(SOME_RECOMMENDATION)
        .withBreakdown(SOME_BREAKDOWN)
        .build();

      expect(check)
        .toBeInstanceOf(SandboxDocumentFaceMatchCheck);

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
    it('Should build SandboxDocumentFaceMatchCheck with breakdown', () => {
      const check = new SandboxDocumentFaceMatchCheckBuilder()
        .withRecommendation(SOME_RECOMMENDATION)
        .withBreakdownList([SOME_BREAKDOWN])
        .build();

      expect(check)
        .toBeInstanceOf(SandboxDocumentFaceMatchCheck);

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
    it('Should build SandboxDocumentFaceMatchCheck with document filter', () => {
      const check = new SandboxDocumentFaceMatchCheckBuilder()
        .withRecommendation(SOME_RECOMMENDATION)
        .withDocumentFilter(new SandboxDocumentFilterBuilder().build())
        .build();

      expect(check)
        .toBeInstanceOf(SandboxDocumentFaceMatchCheck);

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
