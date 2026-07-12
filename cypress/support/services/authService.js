import UsuarioService from "../services/usuarioService";
import LoginService from "../services/loginService";
import UsuarioFactory from "../factories/usuarioFactory";

const AuthService = {
  obterToken() {
    const usuario = UsuarioFactory.admin();

    return UsuarioService.criarUsuario(usuario)
      .then(() => {
        return LoginService.login({
          email: usuario.email,
          password: usuario.password,
        });
      })
      .then((response) => {
        return response.body.authorization;
      });
  },
};

export default AuthService;
