// Comando de login reutilizável
Cypress.Commands.add("login", (email, password) => {
  cy.visit("/login");
  cy.get("#email").clear().type(email);
  cy.get("#password").clear().type(password);
  cy.contains("button", "Entrar").click();
});

// Comando de logout reutilizável
Cypress.Commands.add("logout", () => {
  cy.get('button:contains("Sair")').click();
});

// Comando para limpar dados de teste
Cypress.Commands.add("limparDados", () => {
  localStorage.clear();
  sessionStorage.clear();
});
