const {
  SandboxCheckReportsBuilder,
  SandboxDocumentTextDataCheckBuilder,
  SandboxRecommendationBuilder,
  SandboxDocumentAuthenticityCheckBuilder,
  SandboxZoomLivenessCheckBuilder,
  SandboxDocumentFaceMatchCheckBuilder,
} = require('../../..');
const SandboxCheckReports = require('../../../src/doc_scan/request/sandbox.check.reports');
const { SandboxIdDocumentComparisonCheckBuilder } = require('../../../src/doc_scan');

const SOME_VALUE = 'some-value';
const SOME_RECOMMENDATION = new SandboxRecommendationBuilder()
  .withValue(SOME_VALUE)
  .build();

describe('SandboxCheckReportsBuilder', () => {
  describe('#build', () => {
    it('builds a SandboxCheckReports', () => {
      const checkReport = new SandboxCheckReportsBuilder().build();

      expect(checkReport).toBeInstanceOf(SandboxCheckReports);

      expect(JSON.stringify(checkReport))
        .toEqual(JSON.stringify({
          ID_DOCUMENT_TEXT_DATA_CHECK: [],
          ID_DOCUMENT_AUTHENTICITY: [],
          ID_DOCUMENT_FACE_MATCH: [],
          LIVENESS: [],
          ID_DOCUMENT_COMPARISON: [],
        }));
    });
  });

  describe('#withDocumentTextDataCheck', () => {
    it('builds a SandboxCheckReport with text data check', () => {
      const SOME_DOCUMENT_TEXT_DATA_CHECK = new SandboxDocumentTextDataCheckBuilder()
        .withRecommendation(SOME_RECOMMENDATION)
        .build();

      const checkReport = new SandboxCheckReportsBuilder()
        .withDocumentTextDataCheck(SOME_DOCUMENT_TEXT_DATA_CHECK)
        .build();

      expect(checkReport).toBeInstanceOf(SandboxCheckReports);

      expect(JSON.stringify(checkReport))
        .toEqual(JSON.stringify({
          ID_DOCUMENT_TEXT_DATA_CHECK: [{
            result: {
              report: {
                recommendation: {
                  value: SOME_VALUE,
                },
                breakdown: [],
              },
              document_fields: {},
            },
          }],
          ID_DOCUMENT_AUTHENTICITY: [],
          ID_DOCUMENT_FACE_MATCH: [],
          LIVENESS: [],
          ID_DOCUMENT_COMPARISON: [],
        }));
    });
  });

  describe('#withDocumentAuthenticityCheck', () => {
    it('builds a SandboxCheckReport with authenticity check', () => {
      const check = new SandboxDocumentAuthenticityCheckBuilder()
        .withRecommendation(SOME_RECOMMENDATION)
        .build();

      const checkReport = new SandboxCheckReportsBuilder()
        .withDocumentAuthenticityCheck(check)
        .build();

      expect(checkReport).toBeInstanceOf(SandboxCheckReports);

      expect(JSON.stringify(checkReport))
        .toEqual(JSON.stringify({
          ID_DOCUMENT_TEXT_DATA_CHECK: [],
          ID_DOCUMENT_AUTHENTICITY: [{
            result: {
              report: {
                recommendation: {
                  value: SOME_VALUE,
                },
                breakdown: [],
              },
            },
          }],
          ID_DOCUMENT_FACE_MATCH: [],
          LIVENESS: [],
          ID_DOCUMENT_COMPARISON: [],
        }));
    });
  });

  describe('#withIdDocumentComparisonCheck', () => {
    it('builds a SandboxCheckReport with ID document comparison check', () => {
      const check = new SandboxIdDocumentComparisonCheckBuilder()
        .withRecommendation(SOME_RECOMMENDATION)
        .build();

      const checkReport = new SandboxCheckReportsBuilder()
        .withIdDocumentComparisonCheck(check)
        .build();

      expect(checkReport).toBeInstanceOf(SandboxCheckReports);

      expect(JSON.stringify(checkReport))
        .toEqual(JSON.stringify({
          ID_DOCUMENT_TEXT_DATA_CHECK: [],
          ID_DOCUMENT_AUTHENTICITY: [],
          ID_DOCUMENT_FACE_MATCH: [],
          LIVENESS: [],
          ID_DOCUMENT_COMPARISON: [{
            result: {
              report: {
                recommendation: {
                  value: SOME_VALUE,
                },
                breakdown: [],
              },
            },
          }],
        }));
    });
  });

  describe('#withLivenessCheck', () => {
    it('builds a SandboxCheckReport with liveness check', () => {
      const check = new SandboxZoomLivenessCheckBuilder()
        .withRecommendation(SOME_RECOMMENDATION)
        .build();

      const checkReport = new SandboxCheckReportsBuilder()
        .withLivenessCheck(check)
        .build();

      expect(checkReport).toBeInstanceOf(SandboxCheckReports);

      expect(JSON.stringify(checkReport))
        .toEqual(JSON.stringify({
          ID_DOCUMENT_TEXT_DATA_CHECK: [],
          ID_DOCUMENT_AUTHENTICITY: [],
          ID_DOCUMENT_FACE_MATCH: [],
          LIVENESS: [
            {
              result: {
                report: {
                  recommendation: {
                    value: SOME_VALUE,
                  },
                  breakdown: [],
                },
              },
              liveness_type: 'ZOOM',
            },
          ],
          ID_DOCUMENT_COMPARISON: [],
        }));
    });
  });

  describe('#withDocumentFaceMatchCheck', () => {
    it('builds a SandboxCheckReport with FaceMatch check', () => {
      const check = new SandboxDocumentFaceMatchCheckBuilder()
        .withRecommendation(SOME_RECOMMENDATION)
        .build();

      const checkReport = new SandboxCheckReportsBuilder()
        .withDocumentFaceMatchCheck(check)
        .build();

      expect(checkReport).toBeInstanceOf(SandboxCheckReports);

      expect(JSON.stringify(checkReport))
        .toEqual(JSON.stringify({
          ID_DOCUMENT_TEXT_DATA_CHECK: [],
          ID_DOCUMENT_AUTHENTICITY: [],
          ID_DOCUMENT_FACE_MATCH: [{
            result: {
              report: {
                recommendation: {
                  value: SOME_VALUE,
                },
                breakdown: [],
              },
            },
          }],
          LIVENESS: [],
          ID_DOCUMENT_COMPARISON: [],
        }));
    });
  });

  describe('#withAsyncReportDelay', () => {
    it('builds a SandboxCheckReport with async report delay', () => {
      const checkReport = new SandboxCheckReportsBuilder()
        .withAsyncReportDelay(5)
        .build();

      expect(checkReport).toBeInstanceOf(SandboxCheckReports);

      expect(JSON.stringify(checkReport))
        .toEqual(JSON.stringify({
          ID_DOCUMENT_TEXT_DATA_CHECK: [],
          ID_DOCUMENT_AUTHENTICITY: [],
          ID_DOCUMENT_FACE_MATCH: [],
          LIVENESS: [],
          ID_DOCUMENT_COMPARISON: [],
          async_report_delay: 5,
        }));
    });
  });
});
