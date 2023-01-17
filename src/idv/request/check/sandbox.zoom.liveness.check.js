'use strict';

const { IDVConstants } = require('yoti');
const SandboxLivenessCheck = require('./sandbox.liveness.check');

class SandboxZoomLivenessCheck extends SandboxLivenessCheck {
  /**
   * @param {SandboxCheckResult} result
   */
  constructor(result) {
    super(result, IDVConstants.ZOOM);
  }
}

module.exports = SandboxZoomLivenessCheck;
