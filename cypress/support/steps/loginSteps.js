import LoginPage from '../pages/LoginPage';

const loginSteps = {
  realizarLogin(credenciais) {
    LoginPage.acessarPagina();
    LoginPage.preencherEmail(credenciais.email);
    LoginPage.preencherSenha(credenciais.password);
    LoginPage.clicarBotaoEntrar();
  },

  realizarLogout() {
    cy.get('button:contains("Sair")').click();
  }
};

export default loginSteps;
