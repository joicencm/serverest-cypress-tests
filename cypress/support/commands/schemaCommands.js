import Ajv from "ajv";

const ajv = new Ajv();

Cypress.Commands.add("validarSchema", (schema, body) => {
  const valid = ajv.validate(schema, body);

  expect(valid, JSON.stringify(ajv.errors)).to.be.true;
});
