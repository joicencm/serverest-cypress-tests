import UsuarioCadastroPage from "../pages/usuarioCadastroPage";

const usuarioCadastroSteps = {
  realizarCadastro(usuario) {
    UsuarioCadastroPage.preencherNome(usuario.nome);
    UsuarioCadastroPage.preencherEmail(usuario.email);
    UsuarioCadastroPage.preencherSenha(usuario.password);

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
