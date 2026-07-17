import { criarUsuario } from "../../../support/helpers/usuarioHelper";

import usuarioCadastroSteps from "../../../support/steps/usuarioCadastroSteps";
import UsuarioFactory from "../../../support/factories/usuarioFactory";

import validation from "../../../support/validations/index";

describe("Frontend - Cadastro de Usuário", () => {
  beforeEach(() => {
    cy.visit("/cadastrarusuarios");
  });

  it("Deve realizar cadastro com sucesso", function () {
    criarUsuario("usuarioComum");

    validation.validaMensagem("Cadastro realizado com sucesso");
  });

  it("Deve realizar cadastro de usuário administrador com sucesso", function () {
    const usuario = criarUsuario("admin");

    expect(usuario.administrador).to.equal("true");
    validation.validaMensagem("Cadastro realizado com sucesso");
  });

  //Não retorna erro padrão. Retorna do navegador
  // it("Deve exibir mensagem para e-mail inválido", function () {
  //   criarUsuario();

  // validation.validaMensagem('Inclua um "@" no endereço de e-mail');
  // });

  it("Deve exibir mensagem para email já cadastrado", function () {
    const usuario = UsuarioFactory.usuarioComum();

    // Primeiro cadastro
    usuarioCadastroSteps.realizarCadastro(usuario);

    validation.validaMensagem("Cadastro realizado com sucesso");

    // Volta para a tela de cadastro
    cy.visit("/cadastrarusuarios");

    // Tenta cadastrar novamente com o mesmo e-mail
    usuarioCadastroSteps.realizarCadastro(usuario);

    validation.validaMensagem("Este email já está sendo usado");
  });

  it("Deve exibir mensagem para camopos obrigatórios não preenchidos", function () {
    usuarioCadastroSteps.clicarCadastrar();
    validation.validaMensagem("Nome é obrigatório");
    validation.validaMensagem("Email é obrigatório");
    validation.validaMensagem("Password é obrigatório");
  });
});
