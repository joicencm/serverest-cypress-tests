const ProdutoFactory = {

  valido() {
    return {
      nome: `Produto Teste ${Date.now()}`,
      preco: 99,
      descricao: 'Descrição do produto teste',
      quantidade: 10
    };
  },

  invalido() {
    return {
      nome: '',
      preco: -1,
      descricao: '',
      quantidade: -1
    };
  }

};

export default ProdutoFactory;