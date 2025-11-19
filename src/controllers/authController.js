const authService = require('../services/authService');

module.exports = {
  async login(req, res, next) {
    try {
      const { token } = await authService.login(req.body);
      res.json({ token });
    } catch (err) {
      next(err);
    }
  }
};