const validations = {
  // Validações de autenticação
  verificarLoginComSucesso() {
    cy.url().should("not.include", "/login");
    cy.contains("Bem-vindo").should("be.visible");
  },

  verificarLogout() {
    cy.url().should("include", "/login");
  },

  // Validações de mensagens
  verificarMensagemSucesso(mensagem) {
    cy.get(".success-message").should("contain", mensagem);
  },

  verificarMensagemErro(mensagem) {
    cy.get(".error-message").should("contain", mensagem);
  },

  // Validações de carrinho
  verificarProdutoNoCarrinho(nomeProduto) {
    cy.contains(nomeProduto).should("be.visible");
  },

  verificarCarrinhoVazio() {
    cy.get(".carrinho-vazio").should("be.visible");
  },

  // Validações de dados
  verificarEmail(email) {
    cy.get('input[type="email"]').should("have.value", email);
  },
};

export default validations;
