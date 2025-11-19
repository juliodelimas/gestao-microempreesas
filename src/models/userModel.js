const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');

const users = [
];

module.exports = {
  create(user) {
    const newUser = { id: uuidv4(), ...user };
    users.push(newUser);
    return newUser;
  },
  findByEmail(email) {
    return users.find(u => u.email === email);
  },
  findByCpfCnpj(cpfCnpj) {
    return users.find(u => u.cpfCnpj === cpfCnpj);
  },
  findById(id) {
    return users.find(u => u.id === id);
  },
  getAll() {
    return users;
  }
};