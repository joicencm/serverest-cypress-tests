import ListarProdutoPage from "../pages/listarProdutoPage";

const listarProdutoSteps = {
  pesquisarProduto(nomeProduto) {
    ListarProdutoPage.pesquisarProduto(nomeProduto);
  },
  adicionarProdutoNaLista(nomeProduto) {
    ListarProdutoPage.adicionarProdutoAoCarrinho();
    cy.contains(nomeProduto, { timeout: 10000 }).should("be.visible");
  },

  ListaProdutoAdicionado(nomeProduto) {
    ListarProdutoPage.ListaProdutoAdicionado(nomeProduto);
  },

  removerProdutoDaLista() {
    ListarProdutoPage.removerProdutoDaLista();
  },
};

export default listarProdutoSteps;
