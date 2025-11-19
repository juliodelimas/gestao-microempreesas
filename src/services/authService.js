const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SESSIONS = {};
const JWT_SECRET = 'segredo_super_secreto';

module.exports = {
  async login({ email, senha }) {
    const user = userModel.findByEmail(email);
    if (!user) {
      const err = new Error('E-mail ou senha inválidos');
      err.status = 401;
      throw err;
    }
    if (!SESSIONS[email]) SESSIONS[email] = { attempts: 0, blockedUntil: null };
    const session = SESSIONS[email];
    if (session.blockedUntil && Date.now() < session.blockedUntil) {
      const err = new Error('Acesso temporariamente bloqueado. Tente novamente mais tarde.');
      err.status = 403;
      throw err;
    }
    const valid = await bcrypt.compare(senha, user.senha);
    if (!valid) {
      session.attempts++;
      if (session.attempts >= 3) {
        session.blockedUntil = Date.now() + 15 * 60 * 1000;
        session.attempts = 0;
      }
      const err = new Error('E-mail ou senha inválidos');
      err.status = 401;
      throw err;
    }
    session.attempts = 0;
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '30m' });
    return { token };
  },
  verifyToken(token) {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch {
      return null;
    }
  }
};