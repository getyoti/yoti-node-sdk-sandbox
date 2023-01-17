const SandboxTaskResults = require('../../../src/idv/request/sandbox.task.results');

describe('SandboxTaskResults', () => {
  describe('without optional tasks', () => {
    it('serialises without optional JSON properties', () => {
      const taskResults = new SandboxTaskResults([]);

      expect(JSON.stringify(taskResults))
        .toEqual(JSON.stringify({
          ID_DOCUMENT_TEXT_DATA_EXTRACTION: [],
        }));
    });
  });
});
