const SandboxDocumentCheckBuilder = require('../../../../src/idv/request/check/sandbox.document.check.builder');

describe('SandboxDocumentCheckBuilder', () => {
  it('Cannot be instantiated', () => {
    expect(() => new SandboxDocumentCheckBuilder())
      .toThrow(new Error('SandboxDocumentCheckBuilder cannot be instantiated'));
  });
});
