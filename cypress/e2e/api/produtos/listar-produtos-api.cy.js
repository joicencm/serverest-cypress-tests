import ProdutoService from "../../../support/services/ProdutoService";

import { listarProdutosSchema } from "../../../support/schemas/produto/listarProdutosSchema";
import Ajv from "ajv";

const ajv = new Ajv();

describe("API - Listar Produtos", () => {
  it("Deve listar produtos", () => {
    ProdutoService.listarProdutos().then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("produtos");

      cy.validarSchema(listarProdutosSchema, response.body);
    });
  });
});
