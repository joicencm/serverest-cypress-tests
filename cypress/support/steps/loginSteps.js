import LoginPage from "../pages/LoginPage";

const loginSteps = {
  realizarLogin(credenciais) {
    LoginPage.acessarPagina();
    LoginPage.preencherEmail(credenciais.email);
    LoginPage.preencherSenha(credenciais.password);
    this.clicarEntrar();
  },

  realizarLogout() {
    cy.get('button:contains("Sair")').click();
  },

  clicarEntrar() {
    LoginPage.clicarBotaoEntrar();
  },
};

export default loginSteps;
