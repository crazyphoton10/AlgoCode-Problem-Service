const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class BadReuest extends BaseError {
  constructor(propertyName, details) {
    super(
      "Bad Request",
      StatusCodes.BAD_REQUEST,
      `Invalid structure for ${propertyName} provided`,
      this.details
    );
  }
}
module.exports = BadReuest;
