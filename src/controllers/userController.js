const userService = require('../services/userService');

module.exports = {
  async register(req, res, next) {
    try {
      const user = await userService.register(req.body);
      res.status(201).json({ id: user.id, nome: user.nome, cpfCnpj: user.cpfCnpj, email: user.email });
    } catch (err) {
      next(err);
    }
  },
  async getAll(req, res, next) {
    try {
      const users = userService.getAll();
      res.json(users.map(u => ({ id: u.id, nome: u.nome, cpfCnpj: u.cpfCnpj, email: u.email })));
    } catch (err) {
      next(err);
    }
  }
};