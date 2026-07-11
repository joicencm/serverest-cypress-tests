import loginSteps from "../../support/steps/loginSteps";
import LoginFactory from "../../support/factories/LoginFactory";

describe("Frontend - Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Deve realizar login com sucesso", () => {
    loginSteps.realizarLogin(LoginFactory.usuarioValido());

    cy.contains("Serverest Store").should("be.visible");
  });

  it("Deve exibir erro ao fazer login com credenciais inválidas", () => {
    loginSteps.realizarLogin(LoginFactory.usuarioInvalido());

    cy.contains("Email e/ou senha inválidos").should("be.visible");
  });
});
