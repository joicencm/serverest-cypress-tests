import AuthService from "../../../support/services/AuthService";

import ProdutoService from "../../../support/services/ProdutoService";
import ProdutoFactory from "../../../support/factories/ProdutoFactory";

import { cadastrarProdutoSchema } from "../../../support/schemas/produto/cadastrarProdutoSchema";
import { unauthorizedResponseSchema } from "../../../support/schemas/common/unauthorizedResponseSchema";
import { produtoInvalidoSchema } from "../../../support/schemas/produto/produtoInvalidoSchema";
import Ajv from "ajv";

const ajv = new Ajv();

describe("API - Cadastrar Produtos", () => {
  let token;

  before(() => {
    AuthService.obterToken().then((authorization) => {
      token = authorization;
    });
  });

  it("Deve criar novo produto", () => {
    const novoProduto = ProdutoFactory.valido();

    ProdutoService.criarProduto(novoProduto, token).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body).to.have.property("_id");

      cy.validarSchema(cadastrarProdutoSchema, response.body);
    });
  });

  it("Deve retornar erro ao criar produto sem token de autenticação", () => {
    const novoProduto = ProdutoFactory.valido();

    ProdutoService.criarProduto(novoProduto).then((response) => {
      expect(response.status).to.equal(401);

      cy.validarSchema(unauthorizedResponseSchema, response.body);
    });
  });

  it("Deve retornar erro ao criar produto com dados inválidos", () => {
    const produtoInvalido = ProdutoFactory.invalido();

    ProdutoService.criarProduto(produtoInvalido, token).then((response) => {
      expect(response.status).to.equal(400);

      cy.validarSchema(produtoInvalidoSchema, response.body);
    });
  });
});
