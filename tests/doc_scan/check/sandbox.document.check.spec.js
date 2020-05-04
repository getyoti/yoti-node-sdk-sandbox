
const SandboxDocumentCheck = require('../../../src/doc_scan/check/sandbox.document.check');

describe('SandboxDocumentCheck', () => {
  it('Cannot be instantiated', () => {
    expect(() => new SandboxDocumentCheck())
      .toThrow(new Error('SandboxDocumentCheck cannot be instantiated'));
  });
});
