import usuarioCadastroSteps from "../steps/usuarioCadastroSteps";
import UsuarioFactory from "../factories/usuarioFactory";

export function criarUsuario() {
  const usuario = UsuarioFactory.novoUsuario();

  usuarioCadastroSteps.realizarCadastro(usuario);

  return usuario;
}
