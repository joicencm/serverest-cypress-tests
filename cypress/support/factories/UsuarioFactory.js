const UsuarioFactory = {

  novoUsuario(administrador = 'true') {
    return {
      nome: 'Usuário Teste',
      email: `usuario${Date.now()}@teste.com`,
      password: 'Teste@123',
      administrador
    };
  },
  
  admin() {
    return {
      nome: 'Administrador Teste',
      email: `admin${Date.now()}@teste.com`,
      password: 'Teste@123',
      administrador: 'true'
    };
  }

};

export default UsuarioFactory;