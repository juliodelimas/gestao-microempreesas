// test/helpers/auth.js
require('dotenv').config();
const supertest = require('supertest');
const baseURL = process.env.BASE_URL || 'http://localhost:3000';
const request = supertest(baseURL);

async function getToken(email, senha) {
  const res = await request.post('/auth/login').send({ email, senha });
  if (res.status === 200 && res.body.token) {
    return res.body.token;
  }
  throw new Error('Não foi possível obter token JWT');
}

module.exports = { getToken };
