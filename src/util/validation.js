const YotiValidation = require('yoti/src/yoti_common/validation');
const { YotiDate } = require('yoti');

class Validation extends YotiValidation {
  /**
   * Checks that provided date is a YotiDate
   *
   * @param {*} value
   * @param {string} name
   */
  static isYotiDate(value, name) {
    if (
      !(value instanceof Date) ||
      value.constructor.name !== YotiDate.name
    ) {
      throw TypeError(`${name} must be instance of ${YotiDate.name}`);
    }
  }
}

module.exports = Validation;
