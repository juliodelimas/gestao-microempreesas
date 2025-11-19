## Gestão de Microempreendedores - API REST

API para registro, autenticação e agendamento de serviços para microempreendedores, construída em Node.js com Express, autenticação JWT, banco de dados em memória e documentação Swagger.

### Funcionalidades

1. **Registro de Microempreendedores**
	- Cadastro com nome, CPF/CNPJ, e-mail e senha.
	- Não permite duplicidade de CPF, CNPJ ou e-mail.
	- Senha deve conter pelo menos 8 caracteres, incluindo letras e números.

2. **Login de Microempreendedores**
	- Login via e-mail e senha.
	- Após 3 tentativas incorretas, bloqueio de 15 minutos.
	- Sessão expira após 30 minutos de inatividade.

3. **Agendamento de Serviços**
	- Agendamento de serviços para clientes, com data, hora, tipo de serviço e cliente.
	- Não permite conflito de horário para o mesmo usuário.

4. **Listagem de Agendamentos**
	- Listagem dos agendamentos do microempreendedor.
	- Filtros por período e status.
	- Ordenação por data/hora crescente.

### Arquitetura do Projeto

- **src/routes**: Rotas da API
- **src/controllers**: Lógica dos endpoints
- **src/services**: Regras de negócio
- **src/models**: Modelos e armazenamento em memória
- **src/middleware**: Middleware de autenticação JWT
- **resources/swagger.json**: Documentação Swagger

### Autenticação

Utiliza JWT. Para acessar rotas protegidas, envie o token no header:

```
Authorization: Bearer <token>
```

### Endpoints Principais

- `POST /users` — Cadastro de microempreendedor
- `POST /auth/login` — Login e obtenção do token JWT
- `GET /users` — Listar microempreendedores (protegido)
- `POST /schedules` — Criar agendamento (protegido)
- `GET /schedules` — Listar agendamentos (protegido)
- `PATCH /schedules/{id}/status` — Atualizar status do agendamento (protegido)
- `GET /api-docs` — Documentação Swagger

### Documentação Swagger

Acesse a documentação interativa em `/api-docs` após iniciar o servidor.
O arquivo Swagger (`resources/swagger.json`) detalha todos os endpoints, modelos de resposta, parâmetros e códigos de erro.

### Como rodar o projeto

1. Instale as dependências:
	```
	npm install
	```
2. Inicie o servidor:
	```
	npm start
	```
3. Acesse a documentação em [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

---

#### Regras de Negócio (Resumo)

- Não pode haver duplicidade de registro (CPF, CNPJ ou e-mail já cadastrados devem ser rejeitados).
- Todos os campos obrigatórios devem ser preenchidos.
- A senha deve conter pelo menos 8 caracteres, incluindo letras e números.
- Após 3 tentativas de login incorretas, o sistema bloqueia o acesso por 15 minutos.
- Sessão expira após 30 minutos de inatividade.
- Não pode haver conflito de horário para o mesmo serviço ou cliente.
- Listagem de agendamentos permite filtro por período e status.