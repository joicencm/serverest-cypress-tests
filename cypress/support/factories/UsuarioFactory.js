import utils from "../utils";

const UsuarioFactory = {
  novoUsuario(administrador = false) {
    return {
      nome: utils.gerarNome(),
      email: utils.gerarEmail(this.comum),
      password: "Teste@123",
      administrador,
    };
  },

  admin() {
    return {
      nome: `Administrador${utils.gerarNome()}`,
      email: utils.gerarEmail(admin),
      password: "Teste@123",
      administrador: "true",
    };
  },

  usuarioInvalido() {
    return {
      nome: "Administrador Teste",
      email: `adminteste.com`,
      password: "Teste@123",
      administrador: "true",
    };
  },

  emailMalFormatado() {
    return {
      nome: "Administrador Teste",
      email: "fulanoqa.com",
      password: "teste",
      administrador: "false",
    };
  },
};

export default UsuarioFactory;
