import { criarUsuario } from "../../support/helpers/usuarioHelper";

import listarProdutoSteps from "../../support/steps/listarProduto";
import utils from "../../support/utils";

import validation from "../../support/validations/index";

describe("Frontend - Lista de Produtos", () => {
  beforeEach(() => {
    cy.visit("/cadastrarusuarios");
  });

  it("Deve adicionar produto a lista com sucesso", () => {
    criarUsuario();

    utils.aguardar(1000);
    listarProdutoSteps.pesquisarProduto("Logitech MX Vertical");
    listarProdutoSteps.adicionarProdutoNaLista("Logitech MX Vertical");
    cy.contains("Logitech MX Vertical").should("be.visible");
  });

  it("Deve remover produto da lista", () => {
    criarUsuario();

    listarProdutoSteps.pesquisarProduto("Logitech MX Vertical");
    listarProdutoSteps.adicionarProdutoNaLista("Logitech MX Vertical");
    validation.verificarProduto("Logitech MX Vertical");
    listarProdutoSteps.ListaProdutoAdicionado("Logitech MX Vertical");
    listarProdutoSteps.removerProdutoDaLista("Logitech MX Vertical");

    validation.verificarProduto("Seu carrinho está vazio");
  });
});
