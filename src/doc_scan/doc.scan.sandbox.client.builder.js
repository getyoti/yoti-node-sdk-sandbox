const { Validation } = require('../util');
const DocScanSandboxClient = require('./doc.scan.sandbox.client');

/**
 * @class DocScanSandboxClientBuilder
 */
class DocScanSandboxClientBuilder {
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
   * @returns {DocScanSandboxClient}
   */
  build() {
    return new DocScanSandboxClient(this.sdkId, this.pem, this.sandboxUrl);
  }
}

module.exports = DocScanSandboxClientBuilder;
