const { YotiDate } = require('yoti');

const {
  SandboxAttributeBuilder,
  SandboxAnchorBuilder,
} = require('../../../..');

const SOME_NAME = 'someName';
const SOME_VALUE = 'someValue';
const SOME_DERIVATION = 'someDerivation';
const SOME_ANCHOR_TYPE = 'someAnchorType';
const SOME_ANCHOR_VALUE = 'someAnchorValue';
const SOME_ANCHOR_SUB_TYPE = 'someAnchorSubType';
const SOME_DATE = YotiDate.fromDateString('2020-01-01');

describe('SandboxAttribute', () => {
  it('should build with required properties', () => {
    const sandboxAttribute = new SandboxAttributeBuilder()
      .withName(SOME_NAME)
      .withValue(SOME_VALUE)
      .build();

    const expectedData = {
      name: SOME_NAME,
      value: SOME_VALUE,
    };

    expect(JSON.stringify(sandboxAttribute))
      .toBe(JSON.stringify(expectedData));
  });
  it('should build with derivation', () => {
    const sandboxAttribute = new SandboxAttributeBuilder()
      .withName(SOME_NAME)
      .withValue(SOME_VALUE)
      .withDerivation(SOME_DERIVATION)
      .build();

    const expectedData = {
      name: SOME_NAME,
      value: SOME_VALUE,
      derivation: SOME_DERIVATION,
    };

    expect(JSON.stringify(sandboxAttribute))
      .toBe(JSON.stringify(expectedData));
  });
  it('should build with anchors', () => {
    const sandboxAnchor = new SandboxAnchorBuilder()
      .withType(SOME_ANCHOR_TYPE)
      .withValue(SOME_ANCHOR_VALUE)
      .withSubType(SOME_ANCHOR_SUB_TYPE)
      .withTimestamp(SOME_DATE)
      .build();

    const sandboxAttribute = new SandboxAttributeBuilder()
      .withName(SOME_NAME)
      .withValue(SOME_VALUE)
      .withAnchors([sandboxAnchor])
      .build();

    const expectedData = {
      name: SOME_NAME,
      value: SOME_VALUE,
      anchors: [
        sandboxAnchor,
      ],
    };

    expect(JSON.stringify(sandboxAttribute))
      .toBe(JSON.stringify(expectedData));
  });
  it('should not include optional property in JSON', () => {
    const sandboxAttribute = new SandboxAttributeBuilder()
      .withName(SOME_NAME)
      .withValue(SOME_VALUE)
      .withOptional(true)
      .build();

    const expectedData = {
      name: SOME_NAME,
      value: SOME_VALUE,
    };

    expect(JSON.stringify(sandboxAttribute))
      .toBe(JSON.stringify(expectedData));

    expect(sandboxAttribute.getOptional()).toBe(true);
  });
});
