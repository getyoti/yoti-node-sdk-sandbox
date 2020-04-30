const { YotiDate } = require('yoti');
const IssuingAttributes = require('../../../../../src/profile/request/extra_data/third_party/issuing.attributes');
const Definition = require('../../../../../src/profile/request/extra_data/third_party/definition');

const SOME_DEFINITION = new Definition('some-name');
const SOME_DATE = YotiDate.fromDateString('2020-01-02T00:00:00Z');

describe('SandboxIssuingAttributes', () => {
  it('should serialise to JSON', () => {
    const issuingAttributes = new IssuingAttributes(SOME_DATE, [SOME_DEFINITION]);

    expect(JSON.stringify(issuingAttributes))
      .toEqual(JSON.stringify({
        expiry_date: SOME_DATE.getMicrosecondTimestamp(),
        definitions: [SOME_DEFINITION],
      }));
  });
});
