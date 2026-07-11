import UsuarioCadastroPage from '../pages/UsuarioCadastroPage';

const usuarioCadastroSteps = {
  realizarCadastro(usuario) {
    UsuarioCadastroPage.acessarPagina();
    UsuarioCadastroPage.preencherNome(usuario.nome);
    UsuarioCadastroPage.preencherEmail(usuario.email);
    UsuarioCadastroPage.preencherSenha(usuario.senha);
    UsuarioCadastroPage.preencherConfirmaSenha(usuario.senha);

    if (usuario.administrador) {
      UsuarioCadastroPage.marcarCheckboxAdministrador();
    }

    this.clicarCadastrar();
  },

  clicarCadastrar() {
    UsuarioCadastroPage.clicarBotaoCadastrar();
  }
};



export default usuarioCadastroSteps;
