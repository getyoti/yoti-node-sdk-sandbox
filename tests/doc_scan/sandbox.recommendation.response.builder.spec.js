const {
  SandboxRecommendationResponseBuilder,
} = require('../..');
const SandboxRecommendationResponse = require('../../src/doc_scan/sandbox.recommendation.response');

const SOME_VALUE = 'some-value';
const SOME_REASON = 'some-reason';
const SOME_SUGGESTION = 'some-suggestion';

describe('SandboxRecommendationResponseBuilder', () => {
  describe('#build', () => {
    it('builds a SandboxRecommendationResponse', () => {
      const recommendation = new SandboxRecommendationResponseBuilder()
        .withValue(SOME_VALUE)
        .withReason(SOME_REASON)
        .withRecoverySuggestion(SOME_SUGGESTION)
        .build();

      expect(recommendation).toBeInstanceOf(SandboxRecommendationResponse);

      expect(JSON.stringify(recommendation))
        .toEqual(JSON.stringify({
          value: SOME_VALUE,
          reason: SOME_REASON,
          recovery_suggestion: SOME_SUGGESTION,
        }));
    });
  });

  describe('#approvedRecommendation', () => {
    it('builds a SandboxRecommendationResponse with approved recommendation', () => {
      const recommendation = SandboxRecommendationResponseBuilder.approvedRecommendation();

      expect(recommendation).toBeInstanceOf(SandboxRecommendationResponse);

      expect(JSON.stringify(recommendation))
        .toEqual(JSON.stringify({
          value: 'APPROVE',
        }));
    });
  });

  describe('#notAvailableRecommendation', () => {
    it('builds a SandboxRecommendationResponse with not available recommendation', () => {
      const recommendation = SandboxRecommendationResponseBuilder.notAvailableRecommendation();

      expect(recommendation).toBeInstanceOf(SandboxRecommendationResponse);

      expect(JSON.stringify(recommendation))
        .toEqual(JSON.stringify({
          value: 'NOT_AVAILABLE',
          reason: 'PICTURE_TOO_DARK',
          recovery_suggestion: 'BETTER_LIGHTING',
        }));
    });
  });

  describe('#rejectedRecommendation', () => {
    it('builds a SandboxRecommendationResponse with rejected recommendation', () => {
      const recommendation = SandboxRecommendationResponseBuilder.rejectedRecommendation();

      expect(recommendation).toBeInstanceOf(SandboxRecommendationResponse);

      expect(JSON.stringify(recommendation))
        .toEqual(JSON.stringify({
          value: 'REJECT',
          reason: 'NOT_GENUINE',
        }));
    });
  });
});
