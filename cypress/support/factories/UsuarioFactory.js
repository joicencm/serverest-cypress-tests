const UsuarioFactory = {
  novoUsuario(administrador = false) {
    return {
      nome: "Usuário Teste",
      email: `usuario${Date.now()}@teste.com`,
      password: "Teste@123",
      administrador,
    };
  },

  admin() {
    return {
      nome: "Administrador Teste",
      email: `admin${Date.now()}@teste.com`,
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
