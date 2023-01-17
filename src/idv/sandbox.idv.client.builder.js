'use strict';

const { Validation } = require('../util');
const SandboxIDVClient = require('./sandbox.idv.client');

/**
 * @class SandboxIDVClientBuilder
 */
class SandboxIDVClientBuilder {
  /**
   * @param {string} sdkId
   */
  withClientSdkId(sdkId) {
    Validation.isString(sdkId, 'sdkId');
    this.sdkId = sdkId;
    return this;
  }

  /**
   * @param {string|Buffer} pemString
   *
   * @returns {this}
   */
  withPemString(pem) {
    Validation.notNullOrEmpty(pem, 'pem');
    this.pem = pem;
    return this;
  }

  /**
   * @param {string} sandboxUrl
   *
   * @returns {this}
   */
  withSandboxUrl(sandboxUrl) {
    Validation.isString(sandboxUrl, 'sandboxUrl');
    this.sandboxUrl = sandboxUrl;
    return this;
  }

  /**
   * @returns {SandboxIDVClient}
   */
  build() {
    return new SandboxIDVClient(this.sdkId, this.pem, this.sandboxUrl);
  }
}

module.exports = SandboxIDVClientBuilder;
