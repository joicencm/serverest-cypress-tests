import UsuarioService from "../../support/services/UsuarioService";

describe("API - Usuários", () => {
  it("Deve listar usuários", () => {
    UsuarioService.listarUsuarios().then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("usuarios");
    });
  });

  it("Deve criar novo usuário", () => {
    const novoUsuario = {
      nome: "Novo Usuário",
      email: `user${Date.now()}@email.com`,
      password: "Senha@123",
      administrador: "true",
    };

    UsuarioService.criarUsuario(novoUsuario).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body).to.have.property("_id");
    });
  });

  it("Deve buscar usuário por ID", () => {
    const usuarioId = "1";
    UsuarioService.obterUsuario(usuarioId).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("_id");
    });
  });
});
