const SandboxLivenessCheck = require('../../../../src/idv/request/check/sandbox.liveness.check');

describe('SandboxLivenessCheck', () => {
  it('Cannot be instantiated', () => {
    expect(() => new SandboxLivenessCheck())
      .toThrow(new TypeError('SandboxLivenessCheck cannot be instantiated'));
  });
});
