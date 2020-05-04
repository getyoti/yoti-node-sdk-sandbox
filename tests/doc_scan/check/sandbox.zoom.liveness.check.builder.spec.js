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
              recommendation: {
                value: 'some-value',
              },
              breakdown: [],
            },
          },
          liveness_type: 'ZOOM',
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
          liveness_type: 'ZOOM',
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
          liveness_type: 'ZOOM',
        }));
    });
  });
});
