# 🚀 ServeRest Cypress Tests

Projeto de automação de testes desenvolvido utilizando **Cypress + JavaScript**, com o objetivo de validar a qualidade e confiabilidade da aplicação **ServeRest**, contemplando testes automatizados de **Frontend (E2E)** e **API (REST)**.

A automação foi estruturada seguindo boas práticas de engenharia de testes, buscando maior organização, reutilização de código, facilidade de manutenção e integração com pipelines de CI/CD.

---

# 🎯 Objetivo do Projeto

Criar uma suíte de testes automatizados capaz de validar os principais fluxos de negócio da aplicação, garantindo:

- Funcionamento dos fluxos críticos da aplicação;
- Validação de regras de negócio;
- Redução de testes manuais repetitivos;
- Maior confiança em novas entregas;
- Detecção antecipada de possíveis regressões.

---

## 🧪 Estratégia de Testes

O projeto contempla testes automatizados de interface (E2E) e de API, cobrindo os principais fluxos da aplicação.

### Frontend (E2E)

- Fluxo de autenticação de usuários;
- Cadastro de usuários;
- Pesquisa de produtos;
- Gerenciamento da lista de produtos.

### API

- Cadastro de usuários;
- Autenticação;
- CRUD de produtos;
- Validação de códigos de status HTTP;
- Validação de contratos (JSON Schema);
- Validação de regras de negócio.

---

# 🛠️ Tecnologias Utilizadas

- JavaScript (ES6+)
- Cypress
- Node.js
- Git
- GitHub Actions (CI/CD)
- Allure - Status Report

---

# 🌐 Aplicações Testadas

## Frontend

https://front.serverest.dev/

## API / Swagger

https://serverest.dev/

---

# 📁 Estrutura do Projeto

```text
serverest-cypress-tests
│
├── cypress
│   │
│   ├── e2e
│   │   ├── frontend
│   │   │   └── Testes de interface (E2E)
│   │   │
│   │   └── api
│   │       └── Testes de serviços REST
│   │
│   ├── fixtures
│   │   └── Massa de dados para testes
│   │
│   └── support
│       │
│       ├── pages
│       │   └── Page Objects
│       │
│       ├── steps
│       │   └── Fluxos reutilizáveis
│       │
│       ├── services
│       │   └── Comunicação com APIs
│       │
│       ├── helpers
│       │   └── Funções auxiliares
│       │
│       └── validations
│           └── Validações compartilhadas
│
├── cypress.config.js
├── package.json
├── .gitignore
└── README.md
```

---

## ✅ Cenários Automatizados

### Frontend

- ✔ Login com sucesso
- ✔ Cadastro de usuário
- ✔ Pesquisa de produtos
- ✔ Adição de produto à lista
- ✔ Remoção de produto da lista

### API

- ✔ Criar usuário
- ✔ Realizar login
- ✔ Criar produto
- ✔ Listar produtos
- ✔ Atualizar produto
- ✔ Excluir produto

---

## 💡 Boas Práticas Aplicadas

O projeto utiliza práticas comuns em projetos profissionais de automação:

- ✅ Page Object Model (POM);
- ✅ Service Layer para testes de API;
- ✅ Separação de responsabilidades;
- ✅ Uso de Fixtures para massa de dados;
- ✅ Custom Commands do Cypress;
- ✅ Código reutilizável;
- ✅ Organização por camadas;
- ✅ Padronização de nomenclatura;
- ✅ Versionamento utilizando Git.

---

## 🔄 Integração Contínua (CI/CD)

Os testes automatizados podem ser executados através de pipeline utilizando **GitHub Actions**.

O processo contempla:

- Instalação das dependências;
- Execução da suíte automatizada;
- Validação dos resultados;
- Identificação rápida de falhas.

---

## ▶️ Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/joicencm/serverest-cypress-tests.git
```

### 2. Acessar a pasta do projeto

```bash
cd serverest-cypress-tests
```

### 3. Instalar dependências

```bash
npm install
```

### 4. Executar Cypress

#### Modo interativo

```bash
npx cypress open
```

#### Modo headless

```bash
npx cypress run
```

---

## 🐞 Gestão de Defeitos

Durante a execução dos testes foram identificados cenários de melhoria na aplicação.

Os bugs encontrados foram documentados utilizando GitHub Issues, contendo:

- Descrição do problema;
- Ambiente de execução;
- Passos para reprodução;
- Resultado esperado;
- Evidências.

---

## 🚀 Evoluções Planejadas

- [ ] Adicionar testes de acessibilidade com **cypress-axe**.
- [ ] Executar testes em múltiplos navegadores via GitHub Actions.
- [ ] Aumentar a cobertura de cenários negativos e casos de borda.
- [ ] Implementar **Cucumber (BDD)** para escrita de cenários em Gherkin.

---

## 👩‍💻 Sobre a autora

**Joice Nascimento**  
QA Engineer com foco em automação de testes, qualidade de software e desenvolvimento de soluções para aumentar a confiabilidade das aplicações.

Atuação com:

- Automação de testes E2E utilizando Cypress;
- Testes de API REST;
- JavaScript;
- Boas práticas de engenharia de testes;
- Integração contínua com pipelines CI/CD.

### Contatos

🔗 GitHub:  
https://github.com/joicencm

🔗 LinkedIn:  
https://www.linkedin.com/in/joiceanalistadequalidadedesoftware/
