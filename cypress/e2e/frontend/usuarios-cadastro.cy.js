import usuarioCadastroSteps from "../../support/steps/UsuarioCadastroSteps";

describe("Frontend - Cadastro de Usuário", () => {
  beforeEach(() => {
    cy.visit("/cadastrarusuarios");
    cy.fixture("cadastroUsuario").as("cadastroUsuario");
  });

  it("Deve realizar cadastro com sucesso", function () {
    const usuario = {
      ...this.cadastroUsuario.usuario_valido,
      email: `user${Date.now()}@email.com`,
    };

    console.log(usuario);
    cy.log(JSON.stringify(usuario));
    usuarioCadastroSteps.realizarCadastro(usuario);

    cy.contains("Cadastro realizado com sucesso").should("be.visible");
  });

  //Não retorna erro do navegador
  // it('Deve exibir mensagem para e-mail inválido', function () {

  //   usuarioCadastroSteps.realizarCadastro(
  //     this.cadastroUsuario.usuario_email_invalido
  //   );

  //   cy.contains('Inclua um "@" no endereço de e-mail')
  //     .should('exist');

  // });

  it("Deve exibir mensagem para email já cadastrado", function () {
    const usuario = {
      ...this.cadastroUsuario.usuario_valido,
      email: `user${Date.now()}@email.com`,
    };

    // Primeiro cadastro
    usuarioCadastroSteps.realizarCadastro(usuario);

    cy.contains("Cadastro realizado com sucesso").should("be.visible");

    // Volta para a tela de cadastro
    cy.visit("/cadastrarusuarios");

    // Tenta cadastrar novamente com o mesmo e-mail
    usuarioCadastroSteps.realizarCadastro(usuario);

    cy.contains("Este email já está sendo usado").should("be.visible");
  });

  it("Deve exibir mensagem para camopos obrigatórios não preenchidos", function () {
    console.log(usuarioCadastroSteps);
    usuarioCadastroSteps.clicarCadastrar();
    cy.wait(1000);
    cy.contains("Nome é obrigatório").should("exist");
    cy.contains("Email é obrigatório").should("exist");
    cy.contains("Password é obrigatório").should("exist");
  });
});
