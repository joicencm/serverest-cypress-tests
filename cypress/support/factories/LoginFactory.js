const LoginFactory = {

  usuarioValido() {
    return {
      email: 'teste@teste.com.br',
      password: '123123'
    };
  },

  admin() {
    return {
      email: 'fulano@qa.com',
      password: 'teste'
    };
  },

  usuarioInvalido() {
    return {
      email: 'email-invalido@test.com',
      password: 'senhaerrada'
    };
  }

};

export default LoginFactory;