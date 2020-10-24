const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  if (!Validator.isLength(data.text, { min: 1, max: 300 })) {
    errors.text = "Post must be between 1 and 300 characters";
  }

  if (isEmpty(data.text)) {
    errors.text = "Text field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
