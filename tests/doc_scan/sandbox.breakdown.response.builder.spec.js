const { SandboxBreakdownResponseBuilder } = require('../..');
const SandboxBreakdownResponse = require('../../src/doc_scan/sandbox.breakdown.response');

const SOME_SUB_CHECK = 'some-sub-check';
const SOME_DETAIL_KEY = 'some-detail-key';
const SOME_DETAIL_VALUE = 'some-detail-value';
const SOME_RESULT = 'some-result';

describe('SandboxBreakdownResponseBuilder', () => {
  describe('#build', () => {
    it('builds a SandboxBreakdownResponse', () => {
      const sandboxBreakdownResponse = new SandboxBreakdownResponseBuilder()
        .withSubCheck(SOME_SUB_CHECK)
        .withDetail(SOME_DETAIL_KEY, SOME_DETAIL_VALUE)
        .withResult(SOME_RESULT)
        .build();

      expect(sandboxBreakdownResponse).toBeInstanceOf(SandboxBreakdownResponse);

      expect(JSON.stringify(sandboxBreakdownResponse))
        .toEqual(JSON.stringify({
          sub_check: SOME_SUB_CHECK,
          result: SOME_RESULT,
          details: [
            {
              name: SOME_DETAIL_KEY,
              value: SOME_DETAIL_VALUE,
            },
          ],
        }));
    });
  });
});
