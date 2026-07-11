import utils from "../utils";

const ProdutoFactory = {
  valido() {
    return {
      nome: utils.gerarTextoUnico("Produto "),
      preco: 99,
      descricao: "Descrição do produto teste",
      quantidade: 10,
    };
  },

  invalido() {
    return {
      nome: "",
      preco: -1,
      descricao: "",
      quantidade: -1,
    };
  },
};

export default ProdutoFactory;
