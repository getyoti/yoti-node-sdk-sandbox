
const fs = require('fs');
const path = require('path');
const nock = require('nock');


const {
  SandboxDocScanClientBuilder,
  SandboxExpectationBuilder,
  SandboxCheckReportsBuilder,
} = require('../..');

const DocScanSandboxError = require('../../src/doc_scan/doc.scan.sandbox.error');

const SOME_PEM = fs.readFileSync(path.join(__dirname, '../sample-data/keys/test.pem'));
const SOME_URL = 'https://example.com/';
const SOME_SDK_ID = 'some-sdk-id';
const SOME_SESSION_ID = 'some-session-id';

describe('SandboxDocScanClient', () => {
  const client = new SandboxDocScanClientBuilder()
    .withClientSdkId(SOME_SDK_ID)
    .withPemString(SOME_PEM)
    .withSandboxUrl(SOME_URL)
    .build();

  describe('#setExpectationForSession', () => {
    it('Resolves on success', () => {
      const SOME_EXPECTATION = new SandboxExpectationBuilder()
        .withCheckReports(new SandboxCheckReportsBuilder().build())
        .build();

      nock(SOME_URL)
        .put(
          new RegExp(`^/sessions/${SOME_SESSION_ID}/response-config`),
          JSON.stringify(SOME_EXPECTATION)
        )
        .reply(200);

      expect(client.setExpectationForSession(SOME_SESSION_ID, SOME_EXPECTATION))
        .resolves
        .toBeUndefined();
    });

    it('Rejects on failure', () => {
      const SOME_EXPECTATION = new SandboxExpectationBuilder()
        .withCheckReports(new SandboxCheckReportsBuilder().build())
        .build();

      nock(SOME_URL)
        .put(
          new RegExp(`^/sessions/${SOME_SESSION_ID}/response-config`),
          JSON.stringify(SOME_EXPECTATION)
        )
        .reply(400, {});

      return expect(client.setExpectationForSession(SOME_SESSION_ID, SOME_EXPECTATION))
        .rejects
        .toEqual(new DocScanSandboxError(new Error('Bad Request')));
    });
  });

  describe('#setExpectationForApplication', () => {
    it('Resolves on success', () => {
      const SOME_EXPECTATION = new SandboxExpectationBuilder()
        .withCheckReports(new SandboxCheckReportsBuilder().build())
        .build();

      nock(SOME_URL)
        .put(
          new RegExp(`^/apps/${SOME_SDK_ID}/response-config`),
          JSON.stringify(SOME_EXPECTATION)
        )
        .reply(200);

      expect(client.setExpectationForApplication(SOME_EXPECTATION))
        .resolves
        .toBeUndefined();
    });

    it('Rejects on failure', () => {
      const SOME_EXPECTATION = new SandboxExpectationBuilder()
        .withCheckReports(new SandboxCheckReportsBuilder().build())
        .build();

      nock(SOME_URL)
        .put(
          new RegExp(`^/apps/${SOME_SDK_ID}/response-config`),
          JSON.stringify(SOME_EXPECTATION)
        )
        .reply(400, {});

      return expect(client.setExpectationForApplication(SOME_EXPECTATION))
        .rejects
        .toEqual(new DocScanSandboxError(new Error('Bad Request')));
    });
  });
});
