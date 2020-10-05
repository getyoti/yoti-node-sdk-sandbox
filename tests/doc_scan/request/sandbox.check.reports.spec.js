const SandboxCheckReports = require('../../../src/doc_scan/request/sandbox.check.reports');

describe('SandboxCheckReports', () => {
  describe('without ID document comparison checks', () => {
    it('serializes without ID document comparison checks', () => {
      const checkReport = new SandboxCheckReports([], [], [], []);

      expect(JSON.stringify(checkReport))
        .toEqual(JSON.stringify({
          ID_DOCUMENT_TEXT_DATA_CHECK: [],
          ID_DOCUMENT_AUTHENTICITY: [],
          ID_DOCUMENT_FACE_MATCH: [],
          LIVENESS: [],
        }));
    });
  });
});
