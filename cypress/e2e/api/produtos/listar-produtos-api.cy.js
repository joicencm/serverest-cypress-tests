import ProdutoService from "../../../support/services/ProdutoService";
import { listarProdutosSchema } from "../../../support/schemas/listarProdutosSchema";
import Ajv from "ajv";

const ajv = new Ajv();

describe("API - Listar Produtos", () => {
  it("Deve listar produtos", () => {
    ProdutoService.listarProdutos().then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("produtos");
      const valid = ajv.validate(listarProdutosSchema, response.body);

      expect(valid, JSON.stringify(ajv.errors)).to.be.true;
    });
  });
});
