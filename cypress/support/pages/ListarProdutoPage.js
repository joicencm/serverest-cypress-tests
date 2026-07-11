import ListarProdutoElements from '../elements/ListarProdutoElements';

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
    cy.wait(3000); // Adiciona uma espera para garantir que a página seja carregada antes de verificar o produto
    cy.contains(nomeProduto).should('be.visible');
  }

  removerProdutoDaLista() {
    cy.get(ListarProdutoElements.botaoLimpar)
      .click();
  }

  alterarQuantidade(quantidade) {
    cy.get(ListarProdutoElements.quantidadeInput).clear().type(quantidade);
  }

  finalizarCompra() {
    cy.get(ListarProdutoElements.botaoCheckout).click();
  }

  verificarPrecoTotal(preco) {
    cy.get(ListarProdutoElements.precoTotal).should('contain', preco);
  }

  verificarCarrinhoVazio() {
    cy.get(ListarProdutoElements.carrinhoVazio).should('be.visible');
  }

  verificarQuantidadeItens(quantidade) {
    cy.get(ListarProdutoElements.itemCarrinho).should('have.length', quantidade);
  }
}

export default new ListarProdutoPage();
