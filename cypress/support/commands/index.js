// Comando de login reutilizável
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login');
  cy.get('input[data-testid="email"]').type(email);
  cy.get('input[data-testid="senha"]').type(password);
  cy.get('button:contains("Entrar")').click();
});

// Comando de logout reutilizável
Cypress.Commands.add('logout', () => {
  cy.get('button:contains("Sair")').click();
});

// Comando para limpar dados de teste
Cypress.Commands.add('limparDados', () => {
  localStorage.clear();
  sessionStorage.clear();
});

// Comando customizado para aguardar elemento com timeout
Cypress.Commands.add('aguardarElemento', (seletor, timeout = 10000) => {
  cy.get(seletor, { timeout }).should('be.visible');
});
