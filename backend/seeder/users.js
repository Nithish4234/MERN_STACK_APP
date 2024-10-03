const bcrypt = require("bcryptjs")
const ObjectId = require("mongodb").ObjectId;

const users = [
      {
    name: 'admin',
    lastName: 'admin',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('admin@admin.com', 10),
    isAdmin: true,
  },
  {
    _id: new ObjectId("66e92187fbe32be9bc13e435"),
    name: 'Nithish',
    lastName: 'Kumar',
    email: 'nithish@kumar.com',
    password: bcrypt.hashSync('nithish@kumar.com', 10),
  },
]

module.exports = users
