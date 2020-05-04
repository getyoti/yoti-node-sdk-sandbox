const Validation = require('yoti/src/yoti_common/validation');

class SandboxDocumentFilter {
  constructor(documentTypes, countryCodes) {
    Validation.isArrayOfStrings(documentTypes, 'documentTypes');
    this.documentTypes = documentTypes;

    Validation.isArrayOfStrings(countryCodes, 'countryCodes');
    this.countryCodes = countryCodes;
  }

  toJSON() {
    return {
      document_types: this.documentTypes,
      country_codes: this.countryCodes,
    };
  }
}

module.exports = SandboxDocumentFilter;
