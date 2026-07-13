import { criarUsuario } from "../../../support/helpers/usuarioHelper";

import loginSteps from "../../../support/steps/loginSteps";
import LoginFactory from "../../../support/factories/loginFactory";

import validation from "../../../support/validations/index";

describe("Frontend - Login", () => {
  beforeEach(() => {
    cy.visit("/cadastrarusuarios");
  });

  it("Deve realizar login com sucesso", () => {
    criarUsuario("usuarioComum");

    validation.verificarLoginComSucesso();
  });

  it("Deve exibir erro ao fazer login com credenciais inválidas", () => {
    loginSteps.realizarLogin(LoginFactory.usuarioInvalido());

    validation.validaMensagem("Email e/ou senha inválidos");
  });

  it("Deve exibir erro ao fazer login com campos em brancos", () => {
    cy.visit("/");
    loginSteps.clicarEntrar();

    validation.validaMensagem("Email é obrigatório");
    validation.validaMensagem("Password é obrigatório");
  });
});
