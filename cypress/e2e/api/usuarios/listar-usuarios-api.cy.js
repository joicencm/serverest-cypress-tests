import UsuarioService from "../../../support/services/UsuarioService";

import { listarUsuariosSchema } from "../../../support/schemas/usuario/listarUsuariosSchema";

describe("API - Listar Usuários", () => {
  it("Deve listar usuários", () => {
    UsuarioService.listarUsuarios().then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("usuarios");

      cy.validarSchema(listarUsuariosSchema, response.body);
    });
  });
});
