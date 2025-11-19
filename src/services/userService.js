const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');

module.exports = {
  async register({ nome, cpfCnpj, email, senha }) {
    if (userModel.findByEmail(email) || userModel.findByCpfCnpj(cpfCnpj)) {
      const err = new Error('Usuário já cadastrado');
      err.status = 409;
      throw err;
    }
    if (!nome || !cpfCnpj || !email || !senha) {
      const err = new Error('Campos obrigatórios não preenchidos');
      err.status = 400;
      throw err;
    }
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(senha)) {
      const err = new Error('Senha deve conter pelo menos 8 caracteres, incluindo letras e números');
      err.status = 400;
      throw err;
    }
    const hash = await bcrypt.hash(senha, 10);
    return userModel.create({ nome, cpfCnpj, email, senha: hash });
  },
  findByEmail(email) {
    return userModel.findByEmail(email);
  },
  getAll() {
    return userModel.getAll();
  },
  findById(id) {
    return userModel.findById(id);
  }
};