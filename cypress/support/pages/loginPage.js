import LoginElements from "../elements/loginElements";

class LoginPage {
  acessarPagina() {
    cy.visit("/login");
  }

  preencherEmail(email) {
    cy.get(LoginElements.emailInput).clear().type(email);
  }

  preencherSenha(password) {
    cy.get(LoginElements.senhaInput).clear().type(password);
  }

  clicarBotaoEntrar() {
    cy.get(LoginElements.botaoEntrar).click();
  }

  verificarMensagemErro(mensagem) {
    cy.get(LoginElements.mensagemErro).should("contain", mensagem);
  }

  clicarLinkCadastro() {
    cy.get(LoginElements.linkCadastro).click();
  }

  clicarLinkEsqueciSenha() {
    cy.get(LoginElements.linkEsqueciSenha).click();
  }
}

export default new LoginPage();
