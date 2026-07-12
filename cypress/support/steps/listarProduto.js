import ListarProdutoPage from '../pages/ListarProdutoPage';

const listarProdutoSteps = {
  pesquisarProduto(nomeProduto) {
    ListarProdutoPage.pesquisarProduto(nomeProduto);
  },
  adicionarProdutoNaLista(nomeProduto) {
    ListarProdutoPage.adicionarProdutoAoCarrinho();
    cy.contains(nomeProduto);
  },

  ListaProdutoAdicionado(nomeProduto) {
    ListarProdutoPage.ListaProdutoAdicionado(nomeProduto);
  },

  removerProdutoDaLista() {
    ListarProdutoPage.removerProdutoDaLista();
  },

};

export default listarProdutoSteps;
