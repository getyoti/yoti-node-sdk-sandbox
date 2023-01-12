const SandboxCheck = require('../../../../src/idv/request/check/sandbox.check');

describe('SandboxCheck', () => {
  it('Cannot be instantiated', () => {
    expect(() => new SandboxCheck())
      .toThrow(new Error('SandboxCheck cannot be instantiated'));
  });
});
