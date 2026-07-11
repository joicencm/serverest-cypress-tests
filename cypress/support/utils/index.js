const utils = {
  // Gerador de email aleatório
  gerarEmail(prefixo = 'user') {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000);
    return `${prefixo}${timestamp}${random}@email.com`;
  },

  // Gerador de CPF (apenas numérico, sem validação)
  gerarCPF() {
    const numeros = [];
    for (let i = 0; i < 11; i++) {
      numeros.push(Math.floor(Math.random() * 10));
    }
    return numeros.join('');
  },

  // Gerador de nome aleatório
  gerarNome() {
    const nomes = ['João', 'Maria', 'Pedro', 'Ana', 'Carlos', 'Juliana', 'Felipe', 'Beatriz'];
    const sobrenomes = ['Silva', 'Santos', 'Oliveira', 'Pereira', 'Costa', 'Ferreira', 'Rocha', 'Alves'];
    const nome = nomes[Math.floor(Math.random() * nomes.length)];
    const sobrenome = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
    return `${nome} ${sobrenome}`;
  },

  // Utilitário para datas
  obterDataAtual() {
    const hoje = new Date();
    return hoje.toLocaleDateString('pt-BR');
  },

  // Utilitário para aguardar
  aguardar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  // Randomização entre valores
  selecionarAleatorio(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
};

export default utils;
