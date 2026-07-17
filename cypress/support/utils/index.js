const utils = {
  // Gerador de email aleatório
  gerarEmail(prefixo = "user") {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000);
    return `${prefixo}${timestamp}${random}@email.com`;
  },

  // Gerador de nome aleatório
  gerarNome() {
    const nomes = [
      "João",
      "Maria",
      "Pedro",
      "Ana",
      "Carlos",
      "Juliana",
      "Felipe",
      "Beatriz",
    ];
    const sobrenomes = [
      "Silva",
      "Santos",
      "Oliveira",
      "Pereira",
      "Costa",
      "Ferreira",
      "Rocha",
      "Alves",
    ];
    const nome = nomes[Math.floor(Math.random() * nomes.length)];
    const sobrenome = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
    return `${nome} ${sobrenome}`;
  },

  // Gerador função genérica
  gerarTextoUnico(prefixo = "") {
    return `${prefixo}${Date.now()}${Math.floor(Math.random() * 10000)}`;
  },
};

export default utils;
