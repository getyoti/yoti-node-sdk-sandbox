
const SandboxCheck = require('../../../src/doc_scan/check/sandbox.check');

describe('SandboxCheck', () => {
  it('Cannot be instantiated', () => {
    expect(() => new SandboxCheck())
      .toThrow(new Error('SandboxCheck cannot be instantiated'));
  });
});
