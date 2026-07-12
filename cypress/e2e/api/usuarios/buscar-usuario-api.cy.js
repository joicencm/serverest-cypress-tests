import UsuarioService from "../../../support/services/usuarioService";
import UsuarioFactory from "../../../support/factories/usuarioFactory";

import { fieldValidationErrorSchema } from "../../../support/schemas/common/fieldValidationErrorSchema";

describe("API - Buscar Usuário", () => {
  it("Deve buscar usuário por ID", () => {
    const usuario = UsuarioFactory.admin();

    UsuarioService.criarUsuario(usuario).then((createResponse) => {
      const usuarioId = createResponse.body._id;

      UsuarioService.obterUsuario(usuarioId).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property("_id");
      });
    });
  });

  it("Deve retornar erro ao buscar usuário inexistente", () => {
    const usuarioId = "0uxuPY0cbmQhpEz2";

    UsuarioService.obterUsuario(usuarioId).then((response) => {
      expect(response.status).to.equal(400);
      expect(response.body.message).to.equal("Usuário não encontrado");

      cy.validarSchema(fieldValidationErrorSchema, response.body);
    });
  });
});
