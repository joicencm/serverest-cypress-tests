import UsuarioCadastroPage from "../pages/UsuarioCadastroPage";

const usuarioCadastroSteps = {
  realizarCadastro(usuario) {
    UsuarioCadastroPage.preencherNome(usuario.nome);
    UsuarioCadastroPage.preencherEmail(usuario.email);
    UsuarioCadastroPage.preencherSenha(usuario.password);
    UsuarioCadastroPage.preencherConfirmaSenha(usuario.password);

    if (usuario.administrador) {
      UsuarioCadastroPage.marcarCheckboxAdministrador();
    }

    this.clicarCadastrar();
  },

  clicarCadastrar() {
    UsuarioCadastroPage.clicarBotaoCadastrar();
  },
};

export default usuarioCadastroSteps;
