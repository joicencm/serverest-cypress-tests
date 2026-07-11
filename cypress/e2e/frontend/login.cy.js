import { criarUsuario } from "../../support/helpers/usuarioHelper";

import loginSteps from "../../support/steps/loginSteps";
import LoginFactory from "../../support/factories/LoginFactory";

describe("Frontend - Login", () => {
  beforeEach(() => {
    cy.visit("/cadastrarusuarios");
  });

  it("Deve realizar login com sucesso", () => {
    criarUsuario();

    cy.contains("Serverest Store").should("be.visible");
  });

  it("Deve exibir erro ao fazer login com credenciais inválidas", () => {
    loginSteps.realizarLogin(LoginFactory.usuarioInvalido());

    cy.contains("Email e/ou senha inválidos").should("be.visible");
  });

  it("Deve exibir erro ao fazer login com campos em brancos", () => {
    cy.visit("/");
    loginSteps.clicarEntrar();

    cy.contains("Email é obrigatório").should("be.visible");
    cy.contains("Password é obrigatório").should("be.visible");
  });
});
