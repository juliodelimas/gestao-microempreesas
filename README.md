1) Funcionalidade: Registro de Microempreendedores
Como um microempreendedor,
Eu quero ser capaz de me registrar na plataforma,
Para que eu possa ter acesso às ferramentas de gestão da minha microempresa.

Regras de Negócio:

- Não pode haver duplicidade de registro (CPF, CNPJ ou e-mail já cadastrados devem ser rejeitados).
- Todos os campos obrigatórios (nome, CPF/CNPJ, e-mail, senha) devem ser preenchidos.
- A senha deve conter pelo menos 8 caracteres, incluindo letras e números.

2) Funcionalidade: Login de Microempreendedores
Como um microempreendedor registrado,
Eu quero fazer login no sistema,
Para que eu possa acessar minha conta e gerenciar meu negócio com segurança.

Regras de Negócio:

- O login deve ser feito com e-mail e senha válidos.
- Após 3 tentativas de login incorretas, o sistema deve bloquear temporariamente o acesso por 15 minutos.
- O sistema deve manter sessão ativa por tempo limitado (ex: 30 minutos de inatividade).

3) Funcionalidade: Agendamento de Serviços para Clientes
Como um microempreendedor,
Eu quero registrar e agendar serviços para meus clientes,
Para que eu possa organizar melhor meu tempo e oferecer atendimentos com horários definidos.

Regras de Negócio:

- Não pode haver conflito de horário para o mesmo serviço ou cliente.
- Deve ser possível definir data, hora, tipo de serviço e cliente vinculado ao agendamento.

4) Funcionalidade: Listagem de Agendamento de Serviços
Como um microempreendedor,
Eu quero visualizar a lista dos meus agendamentos de serviços,
Para que eu possa acompanhar, organizar e gerenciar melhor meus compromissos diários.

Regras de Negócio:

- A listagem deve exibir data, hora, nome do cliente, serviço e status (pendente, concluído, cancelado).
- Deve ser possível filtrar os agendamentos por período (ex: dia, semana, mês) e por status.
- Deve haver ordenação padrão por data e hora crescente.