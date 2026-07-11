import AuthService from "../../../support/services/AuthService";
import ProdutoService from "../../../support/services/ProdutoService";
import ProdutoFactory from "../../../support/factories/ProdutoFactory";
import { messageSchema } from "../../../support/schemas/messageSchema";
import { errorSchema } from "../../../support/schemas/errorSchema";
import { produtoInvalidoSchema } from "../../../support/schemas/produtoInvalidoSchema";
import Ajv from "ajv";

const ajv = new Ajv();

describe("API - Atualizar Produtos", () => {
  let token;

  before(() => {
    AuthService.obterToken().then((authorization) => {
      token = authorization;
    });
  });

  it("Deve atualizar produto com sucesso", () => {
    const produto = ProdutoFactory.valido();

    ProdutoService.criarProduto(produto, token).then((createResponse) => {
      const produtoId = createResponse.body._id;

      const produtoAtualizado = {
        ...produto,
        nome: `Produto Atualizado ${Date.now()}`,
        preco: 150,
      };

      ProdutoService.atualizarProduto(produtoId, produtoAtualizado, token).then(
        (response) => {
          expect(response.status).to.equal(200);

          const valid = ajv.validate(messageSchema, response.body);

          expect(valid, JSON.stringify(ajv.errors)).to.be.true;

          expect(response.body.message).to.equal(
            "Registro alterado com sucesso",
          );
        },
      );
    });
  });

  it("Deve retornar erro ao atualizar produto sem token de autenticação", () => {
    const produto = ProdutoFactory.valido();

    ProdutoService.criarProduto(produto, token).then((createResponse) => {
      const produtoId = createResponse.body._id;

      ProdutoService.atualizarProduto(produtoId, produto).then((response) => {
        expect(response.status).to.equal(401);

        const valid = ajv.validate(errorSchema, response.body);

        expect(valid, JSON.stringify(ajv.errors)).to.be.true;
      });
    });
  });

  it("Deve retornar erro ao atualizar produto com dados inválidos", () => {
    const produto = ProdutoFactory.valido();

    ProdutoService.criarProduto(produto, token).then((createResponse) => {
      const produtoId = createResponse.body._id;

      const produtoAtualizado = ProdutoFactory.invalido();

      ProdutoService.atualizarProduto(produtoId, produtoAtualizado, token).then(
        (response) => {
          expect(response.status).to.equal(400);

          const valid = ajv.validate(produtoInvalidoSchema, response.body);

          expect(valid, JSON.stringify(ajv.errors)).to.be.true;
        },
      );
    });
  });
});
