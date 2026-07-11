import AuthService from "../../../support/services/AuthService";
import ProdutoService from "../../../support/services/ProdutoService";
import { cadastrarProdutoSchema } from "../../../support/schemas/cadastrarProdutoSchema";
import { messageSchema } from "../../../support/schemas/messageSchema";
import { produtoInvalidoSchema } from "../../../support/schemas/produtoInvalidoSchema";
import ProdutoFactory from "../../../support/factories/ProdutoFactory";
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
      const valid = ajv.validate(cadastrarProdutoSchema, response.body);
      expect(valid, JSON.stringify(ajv.errors)).to.be.true;
    });
  });

  it("Deve retornar erro ao criar produto sem token de autenticação", () => {
    const novoProduto = ProdutoFactory.valido();

    ProdutoService.criarProduto(novoProduto).then((response) => {
      expect(response.status).to.equal(401);

      const valid = ajv.validate(messageSchema, response.body);
      expect(valid, JSON.stringify(ajv.errors)).to.be.true;
    });
  });

  it("Deve retornar erro ao criar produto com dados inválidos", () => {
    const produtoInvalido = ProdutoFactory.invalido();

    ProdutoService.criarProduto(produtoInvalido, token).then((response) => {
      expect(response.status).to.equal(400);
      const valid = ajv.validate(produtoInvalidoSchema, response.body);
      expect(valid, JSON.stringify(ajv.errors)).to.be.true;
    });
  });
});
