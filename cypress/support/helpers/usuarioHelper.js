import usuarioCadastroSteps from "../steps/UsuarioCadastroSteps";
import UsuarioFactory from "../factories/UsuarioFactory";

export function criarUsuario() {
  const usuario = UsuarioFactory.novoUsuario();

  usuarioCadastroSteps.realizarCadastro(usuario);

  return usuario;
}
