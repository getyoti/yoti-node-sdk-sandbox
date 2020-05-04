const SandboxDocumentTextDataCheck = require('../../../src/doc_scan/check/sandbox.document.text.data.check');

const {
  SandboxDocumentFilterBuilder,
  SandboxDocumentTextDataCheckBuilder,
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
              recommendation: {
                value: 'some-value',
              },
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
              recommendation: {
                value: 'some-value',
              },
              breakdown: [{
                sub_check: 'some-check',
                result: 'some-result',
                details: [],
              }],
            },
            document_fields: {},
          },
        }));
    });
  });

  describe('#withBreakdownList', () => {
    it('Should build SandboxDocumentTextDataCheck with breakdown', () => {
      const check = new SandboxDocumentTextDataCheckBuilder()
        .withRecommendation(SOME_RECOMMENDATION)
        .withBreakdownList([SOME_BREAKDOWN])
        .build();

      expect(check)
        .toBeInstanceOf(SandboxDocumentTextDataCheck);

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
            document_fields: {},
          },
        }));
    });
  });

  describe('#withDocumentFields', () => {
    it('Should build SandboxDocumentTextDataCheck with document fields', () => {
      const check = new SandboxDocumentTextDataCheckBuilder()
        .withRecommendation(SOME_RECOMMENDATION)
        .withDocumentFields({
          'some-key': 'some-value',
        })
        .build();

      expect(check)
        .toBeInstanceOf(SandboxDocumentTextDataCheck);

      expect(JSON.stringify(check))
        .toEqual(JSON.stringify({
          result: {
            report: {
              recommendation: {
                value: 'some-value',
              },
              breakdown: [],
            },
            document_fields: {
              'some-key': 'some-value',
            },
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
              recommendation: {
                value: 'some-value',
              },
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
              recommendation: {
                value: 'some-value',
              },
              breakdown: [],
            },
            document_fields: {},
          },
          document_filter: {
            document_types: [],
            country_codes: [],
          },
        }));
    });
  });
});
