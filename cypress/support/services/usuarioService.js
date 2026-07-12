const BASE_URL = 'https://serverest.dev/usuarios';

const UsuarioService = {
  listarUsuarios(filtros = {}) {
    return cy.request({
      method: 'GET',
      url: BASE_URL,
      qs: filtros,
      failOnStatusCode: false
    });
  },

  obterUsuario(usuarioId) {
    return cy.request({
      method: 'GET',
      url: `${BASE_URL}/${usuarioId}`,
      failOnStatusCode: false
    });
  },

  criarUsuario(usuario) {
    return cy.request({
      method: 'POST',
      url: BASE_URL,
      body: usuario,
      failOnStatusCode: false
    });
  },

  atualizarUsuario(usuarioId, dadosAtualizados) {
    return cy.request({
      method: 'PUT',
      url: `${BASE_URL}/${usuarioId}`,
      body: dadosAtualizados,
      failOnStatusCode: false
    });
  },

  deletarUsuario(usuarioId) {
    return cy.request({
      method: 'DELETE',
      url: `${BASE_URL}/${usuarioId}`,
      failOnStatusCode: false
    });
  }
};

export default UsuarioService;
