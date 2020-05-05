const { RequestBuilder, Payload, constants } = require('yoti');
const { Validation } = require('../util');
const SandboxExpectation = require('./sandbox.expectation');
const DocScanSandboxError = require('./doc.scan.sandbox.error');

const DOC_SCAN_SANDBOX_API_BASE_URL = `${constants.API_BASE_URL}/sandbox/idverify/v1`;

/**
 * @class DocScanSandboxClient
 */
class DocScanSandboxClient {
  /**
   * @param {string} sdkId
   * @param {string|Buffer} pem
   * @param {string} sandboxUrl
   */
  constructor(sdkId, pem, sandboxUrl) {
    Validation.isString(sdkId, 'sdkId');
    this.sdkId = sdkId;

    Validation.notNullOrEmpty(pem, 'pem');
    this.pem = pem;

    if (sandboxUrl) {
      Validation.isString(sandboxUrl, 'sandboxUrl');
      this.sandboxUrl = sandboxUrl;
    } else {
      this.sandboxUrl = DOC_SCAN_SANDBOX_API_BASE_URL;
    }
  }

  /**
   * @param {string} sessionId
   * @param {SandboxExpectation} sandboxExpectation
   *
   * @returns {Promise}
   */
  setExpectationForSession(sessionId, sandboxExpectation) {
    Validation.isString(sessionId, 'sessionId');
    Validation.instanceOf(sandboxExpectation, SandboxExpectation, 'sandboxExpectation');

    const request = (new RequestBuilder())
      .withBaseUrl(this.sandboxUrl)
      .withEndpoint(`/sessions/${sessionId}/response-config`)
      .withPemString(this.pem)
      .withPayload(new Payload(sandboxExpectation))
      .withMethod('PUT')
      .withQueryParam('sdkId', this.sdkId)
      .build();

    return new Promise((resolve, reject) => {
      request.execute()
        .then(() => resolve())
        .catch(err => reject(new DocScanSandboxError(err)));
    });
  }

  /**
   * @param {SandboxExpectation} sandboxExpectation
   *
   * @returns {Promise}
   */
  setExpectationForApplication(sandboxExpectation) {
    Validation.instanceOf(sandboxExpectation, SandboxExpectation, 'sandboxExpectation');

    const request = (new RequestBuilder())
      .withBaseUrl(this.sandboxUrl)
      .withEndpoint(`/apps/${this.sdkId}/response-config`)
      .withPemString(this.pem)
      .withPayload(new Payload(sandboxExpectation))
      .withMethod('PUT')
      .withQueryParam('sdkId', this.sdkId)
      .build();

    return new Promise((resolve, reject) => {
      request.execute()
        .then(() => resolve())
        .catch(err => reject(new DocScanSandboxError(err)));
    });
  }
}

module.exports = DocScanSandboxClient;
