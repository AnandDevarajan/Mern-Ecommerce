const User = require('../models/User');
const { generateToken } = require('../utils/auth');
exports.authUser = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }).exec((err, user) => {
    if (err) return res.status(400).json({ err });
    if (user && user.authenticate(password)) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({
        message: 'Invalid email or password',
      });
    }
  });
};
