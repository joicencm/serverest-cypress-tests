import loginSteps from "../../support/steps/loginSteps";
import listarProdutoSteps from "../../support/steps/listarProduto";

describe("Frontend - Lista de Produtos", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.fixture("login").as("login");
  });

  beforeEach(function () {
    loginSteps.realizarLogin(this.login.credenciais_validas);
  });

  it("Deve adicionar produto ao carrinho com sucesso", () => {
    listarProdutoSteps.pesquisarProduto("Mouse Gamer 1783714247907");
    listarProdutoSteps.adicionarProdutoNaLista("Mouse Gamer 1783714247907");
    cy.contains("Mouse Gamer 1783714247907").should("be.visible");
  });

  it("Deve remover produto do carrinho", () => {
    listarProdutoSteps.pesquisarProduto("Mouse Gamer 1783714247907");
    listarProdutoSteps.adicionarProdutoNaLista("Mouse Gamer 1783714247907");
    cy.contains("Mouse Gamer 1783714247907").should("be.visible");
    listarProdutoSteps.ListaProdutoAdicionado("Mouse Gamer 1783714247907");
    cy.wait(3000); // Adiciona uma espera para garantir que a página seja carregada antes de remover o produto
    listarProdutoSteps.removerProdutoDaLista("Mouse Gamer 1783714247907");
    cy.contains("Seu carrinho está vazio").should("be.visible");
  });
});
