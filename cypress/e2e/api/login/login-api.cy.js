import UsuarioService from "../../../support/services/UsuarioService";
import UsuarioFactory from "../../../support/factories/UsuarioFactory";

import LoginService from "../../../support/services/LoginService";
import LoginFactory from "../../../support/factories/LoginFactory";

import { loginSchema } from "../../../support/schemas/login/loginSchema";
import { fieldValidationErrorSchema } from "../../../support/schemas/common/fieldValidationErrorSchema";

describe("API - Login", () => {
  it("Deve fazer login com sucesso via API", () => {
    const usuario = UsuarioFactory.admin();

    UsuarioService.criarUsuario(usuario).then(() => {
      LoginService.login({
        email: usuario.email,
        password: usuario.password,
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property("authorization");

        cy.validarSchema(loginSchema, response.body);
      });
    });
  });

  it("Deve retornar erro ao fazer login com credenciais inválidas", function () {
    const loginInvalido = LoginFactory.usuarioInvalido();

    LoginService.login(loginInvalido).then((response) => {
      expect(response.status).to.equal(401);
      expect(response.body).to.have.property("message");
      expect(response.body.message).to.equal("Email e/ou senha inválidos");

      cy.validarSchema(fieldValidationErrorSchema, response.body);
    });
  });

  it("Deve retornar erro ao fazer login com email em formato inválido", function () {
    const loginInvalido = LoginFactory.emailMalFormatado();

    LoginService.login(loginInvalido).then((response) => {
      expect(response.status).to.equal(400);
      expect(response.body).to.have.property("email");
      expect(response.body.email).to.equal("email deve ser um email válido");

      cy.validarSchema(fieldValidationErrorSchema, response.body);
    });
  });
});
