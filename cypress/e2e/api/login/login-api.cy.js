import LoginService from "../../../support/services/LoginService";
import { loginSchema } from "../../../support/schemas/loginSchema";
import { errorSchema } from "../../../support/schemas/messageSchema";
import Ajv from "ajv";

const ajv = new Ajv();

describe("API - Login", () => {
  beforeEach(function () {
    cy.fixture("login").as("login");
  });

  it("Deve fazer login com sucesso via API", function () {
    LoginService.login(this.login.credenciaisADMIN_validas).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("authorization");
      const valid = ajv.validate(loginSchema, response.body);

      expect(valid, JSON.stringify(ajv.errors)).to.be.true;
    });
  });

  //Retornou 400 e não 401, conforme documentação da API, então o teste foi comentado para não quebrar a suite de testes.
  it("Deve retornar erro ao fazer login com credenciais inválidas", function () {
    LoginService.login(this.login.credenciais_invalidas).then((response) => {
      expect(response.status).to.equal(401);
      expect(response.body).to.have.property("message");
      const valid = ajv.validate(errorSchema, response.body);
      expect(valid, JSON.stringify(ajv.errors)).to.be.true;
      expect(response.body.message).to.equal("Email e/ou senha inválidos");
    });
  });
});
