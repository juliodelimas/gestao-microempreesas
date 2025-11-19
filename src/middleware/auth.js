const authService = require('../services/authService');

module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ error: 'Token não fornecido' });
  const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token inválido' });
  const payload = authService.verifyToken(token);
  if (!payload) return res.status(401).json({ error: 'Token inválido ou expirado' });
  req.user = payload;
  next();
};