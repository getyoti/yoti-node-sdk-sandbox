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
});
