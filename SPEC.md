# Especificação Técnica do Projeto

## Objetivo

Desenvolver um projeto de automação de testes utilizando **Cypress** e **JavaScript** para validar funcionalidades do Frontend e da API da aplicação ServeRest.

### Aplicações

Frontend

https://front.serverest.dev/

API

https://serverest.dev/

---

# Objetivos Técnicos

O projeto deverá seguir boas práticas de desenvolvimento visando:

- Código limpo (Clean Code)
- Reutilização de código (DRY)
- Baixo acoplamento
- Alta coesão
- Fácil manutenção
- Escalabilidade
- Organização por responsabilidades

---

# Tecnologias

- Cypress
- JavaScript (ES6+)
- Node.js
- Git
- GitHub

---

# Estrutura do Projeto

```text
serverest-cypress-tests/
│
├── cypress/
│   ├── e2e/
│   │   ├── frontend/
│   │   │   ├── login.cy.js
│   │   │   ├── cadastro.cy.js
│   │   │   └── carrinho.cy.js
│   │   │
│   │   └── api/
│   │       ├── login-api.cy.js
│   │       ├── usuarios-api.cy.js
│   │       └── produtos-api.cy.js
│   │
│   ├── fixtures/
│   │
│   └── support/
│       ├── commands/
│       ├── elements/
│       ├── pages/
│       ├── steps/
│       ├── services/
│       ├── validations/
│       ├── utils/
│       └── e2e.js
│
├── cypress.config.js
├── package.json
├── README.md
└── SPEC.md
```

---

# Arquitetura

## Frontend

Utilizar:

- Page Object Model
- Elements
- Steps

Fluxo

Teste

↓

Step

↓

Page

↓

Elements

↓

Cypress

---

## API

Utilizar

Service Layer

Fluxo

Teste

↓

Service

↓

cy.request()

---

# Responsabilidade das Camadas

## e2e

Contém apenas os casos de teste.

Não deve conter:

- Seletores
- cy.get()
- cy.request()
- Regras de negócio

Apenas:

- describe
- context
- beforeEach
- it
- chamadas para Steps ou Services
- assertivas

---

## elements

Responsável por armazenar todos os seletores da aplicação.

Não deve possuir regras de negócio.

---

## pages

Responsável pelas ações da interface.

Exemplos

- acessar página
- preencher campo
- clicar botão
- selecionar produto

---

## steps

Responsável por orquestrar fluxos completos.

Exemplo

Realizar login

↓

Abrir página

↓

Informar email

↓

Informar senha

↓

Clicar Entrar

---

## services

Responsável pelas chamadas da API.

Utilizar

cy.request()

Todas as chamadas HTTP deverão estar nesta camada.

---

## fixtures

Todos os dados utilizados nos testes deverão ser armazenados nesta pasta.

Não utilizar dados hardcoded.

---

## commands

Criar comandos reutilizáveis.

Exemplo

login

logout

---

## validations

Centralizar validações reutilizáveis.

---

## utils

Métodos auxiliares.

Exemplo

Gerador de e-mail

Gerador de CPF

Datas

Randomização

---

# Convenção de Nomes

Pages

LoginPage.js

CadastroPage.js

CarrinhoPage.js

Elements

LoginElements.js

CadastroElements.js

CarrinhoElements.js

Steps

loginSteps.js

cadastroSteps.js

carrinhoSteps.js

Services

LoginService.js

UsuarioService.js

ProdutoService.js

Testes

login.cy.js

cadastro.cy.js

carrinho.cy.js

usuarios-api.cy.js

login-api.cy.js

produtos-api.cy.js

---

# Frontend

Criar os seguintes cenários

## Login

Realizar login com sucesso

Validar

- URL

- Nome do usuário

- Botão Logout

---

## Cadastro

Cadastrar novo usuário

Validar mensagem de sucesso.

---

## Carrinho

Adicionar produto ao carrinho.

Validar quantidade de produtos.

---

# API

Criar

## Usuário

POST

/usuarios

Validar

Status

Mensagem

ID

---

## Login

POST

/login

Validar

Token

Status

Authorization

---

## Produto

POST

/produtos

Utilizar token obtido no login.

---

# Seletores

Utilizar prioritariamente

data-testid

Evitar XPath.

---

# Assertivas

Utilizar

should

expect

Validar

- HTTP Status
- URL
- Mensagens
- Conteúdo
- Elementos visíveis
- Regras de negócio

---

# Clean Code

Métodos pequenos.

Evitar duplicação.

Evitar comentários desnecessários.

Utilizar nomes descritivos.

---

# Git

Utilizar Conventional Commits.

Exemplos

feat:

fix:

docs:

refactor:

test:

style:

chore:

---

# Critérios de Qualidade

Todo código deverá ser:

Legível

Reutilizável

Escalável

Organizado

Padronizado

---

# Objetivo Final

Gerar um projeto profissional utilizando Cypress, organizado em camadas, seguindo boas práticas de automação de testes e pronto para execução através dos comandos:

npm install

npx cypress open

ou

npx cypress run
