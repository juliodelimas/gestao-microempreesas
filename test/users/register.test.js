
require('dotenv').config();
const chai = require('chai');
const supertest = require('supertest');
const expect = chai.expect;
const baseURL = process.env.BASE_URL || 'http://localhost:3000';
const users = require('../fixtures/users.json');
const request = supertest(baseURL);

describe('JIRA-9165: Registro de Microempreendedores', function () {
  afterEach(async () => {
    // Limpeza opcional: pode implementar deleção de usuário de teste se a API permitir
  });

  it('Deve registrar um novo usuário com sucesso', async function () {
    const user = users[0];
    const res = await request.post('/users').send(user);
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('id');
    expect(res.body).to.include({ nome: user.nome, cpfCnpj: user.cpfCnpj, email: user.email });
  });

  it('Deve falhar ao registrar usuário já existente', async function () {
    const user = users[0];
    // Primeiro registro
    await request.post('/users').send(user);
    // Segundo registro (duplicidade)
    const res = await request.post('/users').send(user);
    expect(res.status).to.be.oneOf([400, 409]);
    expect(res.body).to.have.property('error');
  });
});
