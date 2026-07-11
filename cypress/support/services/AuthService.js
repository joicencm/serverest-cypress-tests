import UsuarioService from '../services/UsuarioService';
import LoginService from '../services/LoginService';
import UsuarioFactory from '../factories/UsuarioFactory'

const AuthService = {

  obterToken() {
   const usuario = UsuarioFactory.admin();

    return UsuarioService.criarUsuario(usuario)
      .then(() => {

        return LoginService.login({
          email: usuario.email,
          password: usuario.password
        });

      })
      .then(response => {
        return response.body.authorization;
      });

  }

};

export default AuthService;