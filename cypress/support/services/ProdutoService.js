const BASE_URL = 'https://serverest.dev/produtos';

const ProdutoService = {
  listarProdutos(filtros = {}) {
    return cy.request({
      method: 'GET',
      url: BASE_URL,
      qs: filtros,
      failOnStatusCode: false
    });
  },

  obterProduto(produtoId) {
    return cy.request({
      method: 'GET',
      url: `${BASE_URL}/${produtoId}`,
      failOnStatusCode: false
    });
  },

  criarProduto(produto, token) {
    console.log('Token enviado:', token);
    console.log('Produto enviado:', produto);
    return cy.request({
      method: 'POST',
      url: BASE_URL,
      headers: {
        authorization: token
      },
      body: produto,
      failOnStatusCode: false
    }).then((response) => {

    console.log('Status retorno:', response.status);
    console.log('Body retorno:', response.body);

    return response;
    });
  },

  atualizarProduto(produtoId, dadosAtualizados, token) {
    return cy.request({
      method: 'PUT',
      url: `${BASE_URL}/${produtoId}`,
      headers: {
        authorization: token
      },
      body: dadosAtualizados,
      failOnStatusCode: false
    });
  },

  deletarProduto(produtoId, token) {
    return cy.request({
      method: 'DELETE',
      url: `${BASE_URL}/${produtoId}`,
      headers: {
        authorization: token
      },
      failOnStatusCode: false
    });
  }
};

export default ProdutoService;
