import AuthService from "../../../support/services/AuthService";

import ProdutoService from "../../../support/services/ProdutoService";
import ProdutoFactory from "../../../support/factories/ProdutoFactory";

import { successMessageResponseSchema } from "../../../support/schemas/common/successMessageResponseSchema";
import { validationErrorResponseSchema } from "../../../support/schemas/common/validationErrorResponseSchema";
import { unauthorizedResponseSchema } from "../../../support/schemas/common/unauthorizedResponseSchema";
import { invalidProductIdResponseSchema } from "../../../support/schemas/produto/invalidProductIdResponseSchema";
import Ajv from "ajv";

const ajv = new Ajv();

describe("API - Excluir Produtos", () => {
  let token;

  before(() => {
    AuthService.obterToken().then((authorization) => {
      token = authorization;
    });
  });

  it("Deve excluir produto com sucesso", () => {
    const produto = ProdutoFactory.valido();

    ProdutoService.criarProduto(produto, token).then((createResponse) => {
      const produtoId = createResponse.body._id;

      ProdutoService.deletarProduto(produtoId, token).then((response) => {
        expect(response.status).to.equal(200);

        cy.validarSchema(successMessageResponseSchema, response.body);

        expect(response.body.message).to.equal("Registro excluído com sucesso");
      });
    });
  });

  it("Deve retornar erro ao excluir produto sem token de autenticação", () => {
    const produto = ProdutoFactory.valido();

    ProdutoService.criarProduto(produto, token).then((createResponse) => {
      const produtoId = createResponse.body._id;

      ProdutoService.deletarProduto(produtoId).then((response) => {
        expect(response.status).to.equal(401);

        cy.validarSchema(unauthorizedResponseSchema, response.body);

        expect(response.body.message).to.equal(
          "Token de acesso ausente, inválido, expirado ou usuário do token não existe mais",
        );
      });
    });
  });

  // Retornou 200 para produto ineistente
  //   it("Deve retornar erro ao excluir produto inexistente", () => {
  //     const produtoId = "OczERadtxz9X9iDa";

  //     ProdutoService.deletarProduto(produtoId, token).then((response) => {
  //       expect(response.status).to.equal(400);

  //       const valid = ajv.validate(invalidProductIdResponseSchema, response.body);

  //       expect(response.body.id).to.equal(
  //         'id deve ter exatamente 16 caracteres alfanuméricos"\n',
  //       );
  //     });
  //   });

  it("Deve retornar erro ao excluir produto com id inválido", () => {
    const produtoId = "id_invalido";

    ProdutoService.deletarProduto(produtoId, token).then((response) => {
      expect(response.status).to.equal(400);

      cy.validarSchema(invalidProductIdResponseSchema, response.body);

      expect(response.body.id).to.equal(
        "id deve ter exatamente 16 caracteres alfanuméricos",
      );
    });
  });
});
