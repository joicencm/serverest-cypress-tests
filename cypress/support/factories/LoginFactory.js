const LoginFactory = {
  admin() {
    return {
      email: "fulano@qa.com",
      password: "teste",
    };
  },

  usuarioInvalido() {
    return {
      email: "email-invalido@test.com",
      password: "senhaerrada",
    };
  },

  emailMalFormatado() {
    return {
      email: "fulanoqa.com",
      password: "teste",
    };
  },
};

export default LoginFactory;
