import UsuarioCadastroElements from '../elements/UsuarioCadastroElements';

class UsuarioCadastroPage {
  acessarPagina() {
    cy.visit('/cadastrarusuarios');
  }

  preencherNome(nome) {
    cy.get(UsuarioCadastroElements.nomeInput).type(nome);
  }

  preencherEmail(email) {
    cy.get(UsuarioCadastroElements.emailInput).type(email);
  }

  preencherSenha(senha) {
    cy.get(UsuarioCadastroElements.senhaInput).type(senha);
  }

  preencherConfirmaSenha(confirmaSenha) {
    cy.get(UsuarioCadastroElements.confirmaSenhaInput).type(confirmaSenha);
  }

  marcarCheckboxAdministrador() {
    cy.get(UsuarioCadastroElements.checkboxAdministrador).check();
  }

  clicarBotaoCadastrar() {
    cy.get(UsuarioCadastroElements.botaoCadastrar).click();
  }

  verificarMensagemErro(mensagem) {
    cy.get(UsuarioCadastroElements.mensagemErro).should('contain', mensagem);
  }

  verificarMensagemSucesso(mensagem) {
    cy.get(UsuarioCadastroElements.mensagemSucesso).should('contain', mensagem);
  }
}

export default new UsuarioCadastroPage();
