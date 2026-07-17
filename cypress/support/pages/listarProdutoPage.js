import ListarProdutoElements from "../elements/listarProdutoElements";

class ListarProdutoPage {
  pesquisarProduto(nomeProduto) {
    cy.get(ListarProdutoElements.pesquisaInput).type(nomeProduto);
    cy.get(ListarProdutoElements.botaoPesquisar).click();
  }

  adicionarProdutoAoCarrinho() {
    cy.get(ListarProdutoElements.botaoAdicionarItem).click();
  }

  ListaProdutoAdicionado(nomeProduto) {
    cy.get(ListarProdutoElements.menuListarCompras).click();
    cy.contains(nomeProduto, { timeout: 10000 }).should("be.visible");
  }

  removerProdutoDaLista() {
    cy.get(ListarProdutoElements.botaoLimpar).click();
  }

  alterarQuantidade(quantidade) {
    cy.get(ListarProdutoElements.quantidadeInput).clear().type(quantidade);
  }

  finalizarCompra() {
    cy.get(ListarProdutoElements.botaoCheckout).click();
  }

  verificarPrecoTotal(preco) {
    cy.get(ListarProdutoElements.precoTotal).should("contain", preco);
  }

  verificarCarrinhoVazio() {
    cy.get(ListarProdutoElements.carrinhoVazio).should("be.visible");
  }

  verificarQuantidadeItens(quantidade) {
    cy.get(ListarProdutoElements.itemCarrinho).should(
      "have.length",
      quantidade,
    );
  }
}

export default new ListarProdutoPage();
