const BASE_URL = 'https://serverest.dev/produtos';

const LoginService = {
  login(credenciais) {
    return cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      body: credenciais,
      failOnStatusCode: false
    });
  },

  logout() {
    return cy.request({
      method: 'POST',
      url: 'https://serverest.dev/logout',
      failOnStatusCode: false
    });
  }
};

export default LoginService;
