import usuarioCadastroSteps from "../steps/usuarioCadastroSteps";
import UsuarioFactory from "../factories/usuarioFactory";

export function criarUsuario(tipo = "usuarioComum") {
  const usuario =
    tipo === "admin" ? UsuarioFactory.admin() : UsuarioFactory.usuarioComum();

  usuarioCadastroSteps.realizarCadastro(usuario);

  return usuario;
}
