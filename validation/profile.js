const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = "Handle needs to between 2 and 40 characters";
  }

  if (isEmpty(data.handle)) {
    errors.handle = "Profile handle is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
 