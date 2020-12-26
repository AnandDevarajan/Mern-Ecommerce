const bcrypt = require('bcryptjs');
const users = [
  {
    name: 'Admin User',
    email: 'admin@123',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@123',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@123',
    password: bcrypt.hashSync('123456', 10),
  },
];

module.exports = users;
