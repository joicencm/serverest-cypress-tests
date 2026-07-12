import { criarUsuario } from "../../support/helpers/UsuarioHelper";

import usuarioCadastroSteps from "../../support/steps/UsuarioCadastroSteps";
import UsuarioFactory from "../../support/factories/UsuarioFactory";

import validation from "../../support/validations/index";
import utils from "../../support/utils/index";

describe("Frontend - Cadastro de Usuário", () => {
  beforeEach(() => {
    cy.visit("/cadastrarusuarios");
  });

  it("Deve realizar cadastro com sucesso", function () {
    criarUsuario();

    validation.validaMensagem("Cadastro realizado com sucesso");
  });

  //Não retorna erro padrão. Retorna do navegador
  // it("Deve exibir mensagem para e-mail inválido", function () {
  //   criarUsuario();

  // validation.validaMensagem('Inclua um "@" no endereço de e-mail');
  // });

  it("Deve exibir mensagem para email já cadastrado", function () {
    const usuario = UsuarioFactory.novoUsuario();

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
    console.log(usuarioCadastroSteps);
    usuarioCadastroSteps.clicarCadastrar();
    utils.aguardar(1000);
    validation.validaMensagem("Nome é obrigatório");
    validation.validaMensagem("Email é obrigatório");
    validation.validaMensagem("Password é obrigatório");
  });
});
