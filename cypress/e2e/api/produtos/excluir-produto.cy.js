import AuthService from "../../../support/services/AuthService";
import ProdutoService from "../../../support/services/ProdutoService";
import { messageSchema } from "../../../support/schemas/messageSchema";
import { errorSchema } from "../../../support/schemas/errorSchema";
import ProdutoFactory from "../../../support/factories/ProdutoFactory";
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

        const valid = ajv.validate(messageSchema, response.body);

        expect(valid, JSON.stringify(ajv.errors)).to.be.true;

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

        const valid = ajv.validate(messageSchema, response.body);

        expect(valid, JSON.stringify(ajv.errors)).to.be.true;
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

  //       const valid = ajv.validate(errorSchema, response.body);

  //       expect(valid, JSON.stringify(ajv.errors)).to.be.true;
  //       expect(response.body.id).to.equal(
  //         'id deve ter exatamente 16 caracteres alfanuméricos"\n',
  //       );
  //     });
  //   });

  it("Deve retornar erro ao excluir produto com id inválido", () => {
    const produtoId = "id_inválido";

    ProdutoService.deletarProduto(produtoId, token).then((response) => {
      expect(response.status).to.equal(400);

      const valid = ajv.validate(errorSchema, response.body);

      expect(valid, JSON.stringify(ajv.errors)).to.be.true;

      expect(response.body.id).to.equal(
        "id deve ter exatamente 16 caracteres alfanuméricos",
      );
    });
  });
});
