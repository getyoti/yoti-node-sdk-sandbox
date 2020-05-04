const DocScanError = require('yoti/src/doc_scan_service/doc.scan.error');

/**
 * Signals that a problem occurred in a Yoti Doc Scan Sandbox
 *
 * @class DocScanSandboxError
 */
class DocScanSandboxError extends DocScanError {
  constructor(error) {
    super(error);
    this.name = this.constructor.name;
  }
}

module.exports = DocScanSandboxError;
