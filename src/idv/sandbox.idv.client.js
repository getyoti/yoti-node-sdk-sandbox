'use strict';

const { RequestBuilder, Payload, constants } = require('yoti');
const { Validation } = require('../util');
const SandboxResponseConfig = require('./request/sandbox.response.config');
const IDVSandboxError = require('./idv.sandbox.error');

const IDV_SANDBOX_API_BASE_URL = `${constants.API_BASE_URL}/sandbox/idverify/v1`;

/**
 * @class SandboxIDVClient
 */
class SandboxIDVClient {
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
      this.sandboxUrl = IDV_SANDBOX_API_BASE_URL;
    }
  }

  /**
   * @param {string} sessionId
   * @param {SandboxResponseConfig} responseConfig
   *
   * @returns {Promise}
   */
  configureSessionResponse(sessionId, responseConfig) {
    Validation.isString(sessionId, 'sessionId');
    Validation.instanceOf(responseConfig, SandboxResponseConfig, 'responseConfig');

    const request = (new RequestBuilder())
      .withBaseUrl(this.sandboxUrl)
      .withEndpoint(`/sessions/${sessionId}/response-config`)
      .withPemString(this.pem)
      .withPayload(new Payload(responseConfig))
      .withMethod('PUT')
      .withQueryParam('sdkId', this.sdkId)
      .build();

    return new Promise((resolve, reject) => {
      request.execute()
        .then(() => resolve())
        .catch((err) => reject(new IDVSandboxError(err)));
    });
  }

  /**
   * @param {SandboxResponseConfig} responseConfig
   *
   * @returns {Promise}
   */
  configureApplicationResponse(responseConfig) {
    Validation.instanceOf(responseConfig, SandboxResponseConfig, 'responseConfig');

    const request = (new RequestBuilder())
      .withBaseUrl(this.sandboxUrl)
      .withEndpoint(`/apps/${this.sdkId}/response-config`)
      .withPemString(this.pem)
      .withPayload(new Payload(responseConfig))
      .withMethod('PUT')
      .build();

    return new Promise((resolve, reject) => {
      request.execute()
        .then(() => resolve())
        .catch((err) => reject(new IDVSandboxError(err)));
    });
  }
}

module.exports = SandboxIDVClient;
