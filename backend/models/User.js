const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

// userSchema.virtual('password').set(function (password) {
//   this.encry_password = bcrypt.hashSync(password, 10);
// });

userSchema.methods = {
  authenticate: function (epassword) {
    return bcrypt.compareSync(epassword, this.password);
  },
};

const User = mongoose.model('User', userSchema);
module.exports = User;
