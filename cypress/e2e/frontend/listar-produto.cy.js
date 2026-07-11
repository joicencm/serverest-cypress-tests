import { criarUsuario } from "../../support/helpers/usuarioHelper";

import listarProdutoSteps from "../../support/steps/listarProduto";

describe("Frontend - Lista de Produtos", () => {
  beforeEach(() => {
    cy.visit("/cadastrarusuarios");
  });

  it("Deve adicionar produto ao carrinho com sucesso", () => {
    criarUsuario();

    listarProdutoSteps.pesquisarProduto("Logitech MX Vertical");
    listarProdutoSteps.adicionarProdutoNaLista("Logitech MX Vertical");
    cy.contains("Logitech MX Vertical").should("be.visible");
  });

  it("Deve remover produto do carrinho", () => {
    criarUsuario();

    listarProdutoSteps.pesquisarProduto("Logitech MX Vertical");
    listarProdutoSteps.adicionarProdutoNaLista("Logitech MX Vertical");
    cy.contains("Logitech MX Vertical").should("be.visible");
    listarProdutoSteps.ListaProdutoAdicionado("Logitech MX Vertical");
    listarProdutoSteps.removerProdutoDaLista("Logitech MX Vertical");
    cy.contains("Seu carrinho está vazio").should("be.visible");
  });
});
