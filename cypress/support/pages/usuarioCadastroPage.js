import UsuarioCadastroElements from "../elements/usuarioCadastroElements";

class UsuarioCadastroPage {
  acessarPagina() {
    cy.visit("/cadastrarusuarios");
  }

  preencherNome(nome) {
    cy.get(UsuarioCadastroElements.nomeInput).clear().type(nome);
  }

  preencherEmail(email) {
    cy.get(UsuarioCadastroElements.emailInput).clear().type(email);
  }

  preencherSenha(password) {
    cy.get(UsuarioCadastroElements.senhaInput).clear().type(password);
  }

  preencherConfirmaSenha(confirmaSenha) {
    this.preencherSenha(confirmaSenha);
  }

  marcarCheckboxAdministrador() {
    cy.get(UsuarioCadastroElements.checkboxAdministrador).check({
      force: true,
    });
  }

  clicarBotaoCadastrar() {
    cy.get(UsuarioCadastroElements.botaoCadastrar).click();
  }

  verificarMensagemErro(mensagem) {
    cy.get(UsuarioCadastroElements.mensagemErro).should("contain", mensagem);
  }

  verificarMensagemSucesso(mensagem) {
    cy.get(UsuarioCadastroElements.mensagemSucesso).should("contain", mensagem);
  }
}

export default new UsuarioCadastroPage();
