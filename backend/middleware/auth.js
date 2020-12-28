const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.verifyAuth = (req, res, next) => {
  if (req.headers.authorization) {
    let token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
  } else {
    return res.status(401).json({
      message: 'Authorization Required',
    });
  }
  next();
};
