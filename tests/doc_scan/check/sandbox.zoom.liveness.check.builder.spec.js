const SandboxLivenessCheck = require('../../../src/doc_scan/check/sandbox.liveness.check');
const SandboxZoomLivenessCheck = require('../../../src/doc_scan/check/sandbox.zoom.liveness.check');

const {
  SandboxZoomLivenessCheckBuilder,
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

const LIVENESS_TYPE_ZOOM = 'ZOOM';

describe('SandboxZoomLivenessCheckBuilder', () => {
  describe('#withRecommendation', () => {
    it('Should build SandboxZoomLivenessCheck with recommendation', () => {
      const check = new SandboxZoomLivenessCheckBuilder()
        .withRecommendation(SOME_RECOMMENDATION)
        .build();

      expect(check)
        .toBeInstanceOf(SandboxLivenessCheck);

      expect(check)
        .toBeInstanceOf(SandboxZoomLivenessCheck);

      expect(JSON.stringify(check))
        .toEqual(JSON.stringify({
          result: {
            report: {
              recommendation: SOME_RECOMMENDATION,
              breakdown: [],
            },
          },
          liveness_type: LIVENESS_TYPE_ZOOM,
        }));
    });
  });

  describe('#withBreakdown', () => {
    it('Should build SandboxZoomLivenessCheck with breakdown', () => {
      const check = new SandboxZoomLivenessCheckBuilder()
        .withRecommendation(SOME_RECOMMENDATION)
        .withBreakdown(SOME_BREAKDOWN)
        .build();

      expect(check)
        .toBeInstanceOf(SandboxLivenessCheck);

      expect(check)
        .toBeInstanceOf(SandboxZoomLivenessCheck);

      expect(JSON.stringify(check))
        .toEqual(JSON.stringify({
          result: {
            report: {
              recommendation: SOME_RECOMMENDATION,
              breakdown: [SOME_BREAKDOWN],
            },
          },
          liveness_type: LIVENESS_TYPE_ZOOM,
        }));
    });
  });

  describe('#withBreakdownList', () => {
    it('Should build SandboxZoomLivenessCheck with breakdown', () => {
      const check = new SandboxZoomLivenessCheckBuilder()
        .withRecommendation(SOME_RECOMMENDATION)
        .withBreakdownList([SOME_BREAKDOWN])
        .build();

      expect(check)
        .toBeInstanceOf(SandboxLivenessCheck);

      expect(check)
        .toBeInstanceOf(SandboxZoomLivenessCheck);

      expect(JSON.stringify(check))
        .toEqual(JSON.stringify({
          result: {
            report: {
              recommendation: SOME_RECOMMENDATION,
              breakdown: [SOME_BREAKDOWN],
            },
          },
          liveness_type: LIVENESS_TYPE_ZOOM,
        }));
    });
  });
});
