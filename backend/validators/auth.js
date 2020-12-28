const { check, validationResult } = require('express-validator');

exports.signUpValidation = [
  check('name').notEmpty().withMessage('Name is required'),
  check('email').isEmail().withMessage('Email required'),
  check('password')
    .isLength({ min: 5 })
    .withMessage('Password must be atleast 5 characters long'),
];

exports.signInValidation = [
  check('email').isEmail().withMessage('Valid email is required'),
  check('password')
    .isLength({ min: 5 })
    .withMessage('Password must be atleast 6 characters long'),
];

exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    return res.status(400).json({
      errors: errors.array()[0].msg,
    });
  }
  next();
};
