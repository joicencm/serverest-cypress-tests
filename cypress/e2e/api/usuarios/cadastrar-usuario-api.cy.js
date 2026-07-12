import UsuarioService from "../../../support/services/usuarioService";
import UsuarioFactory from "../../../support/factories/usuarioFactory";

import { cadastrarUsuarioSchema } from "../../../support/schemas/usuario/cadastrarUsuarioSchema";
import { fieldValidationErrorSchema } from "../../../support/schemas/common/fieldValidationErrorSchema";

describe("API - Cadastrar Usuário", () => {
  it("Deve criar novo usuário", () => {
    const novoUsuario = UsuarioFactory.admin();

    UsuarioService.criarUsuario(novoUsuario).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body).to.have.property("_id");

      cy.validarSchema(cadastrarUsuarioSchema, response.body);
    });
  });

  it("Deve retornar erro ao buscar email invalido", () => {
    const usuarioInvalido = UsuarioFactory.usuarioInvalido();

    UsuarioService.criarUsuario(usuarioInvalido).then((response) => {
      expect(response.status).to.equal(400);
      expect(response.body.email).to.equal("email deve ser um email válido");

      cy.validarSchema(fieldValidationErrorSchema, response.body);
    });
  });
});
