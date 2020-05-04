const nock = require('nock');
const fs = require('fs');
const path = require('path');
const {
  DocScanSandboxClientBuilder,
  SandboxExpectationBuilder,
  SandboxCheckReportsBuilder,
} = require('../..');
const DocScanSandboxClient = require('../../src/doc_scan/doc.scan.sandbox.client');

const SOME_SANDBOX_URL = 'https://example.com';
const SOME_SESSION_ID = 'some-session-id';
const SOME_PEM = fs.readFileSync(path.join(__dirname, '../sample-data/keys/test.pem'));

describe('DocScanSandboxClientBuilder', () => {
  describe('#build', () => {
    it('Builds DocScanSandboxClient', () => {
      const client = new DocScanSandboxClientBuilder()
        .withClientSdkId('some-sdk-id')
        .withPemString(SOME_PEM)
        .build();

      expect(client).toBeInstanceOf(DocScanSandboxClient);
    });

    it('Builds DocScanSandboxClient with custom sandbox URL', () => {
      const client = new DocScanSandboxClientBuilder()
        .withClientSdkId('some-sdk-id')
        .withPemString(SOME_PEM)
        .withSandboxUrl(SOME_SANDBOX_URL)
        .build();

      nock(SOME_SANDBOX_URL)
        .put(new RegExp(`^/sessions/${SOME_SESSION_ID}/response-config`))
        .reply(200);

      const expectation = client.setExpectationForSession(
        SOME_SESSION_ID,
        new SandboxExpectationBuilder()
          .withCheckReports(new SandboxCheckReportsBuilder().build())
          .build()
      );

      expect(expectation).resolves.toBeUndefined();
    });
  });
});
