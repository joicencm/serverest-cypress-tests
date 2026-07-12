export const produtoInvalidoSchema = {
  type: 'object',
  properties: {
    nome: {
      type: 'string'
    },
    preco: {
      type: 'string'
    },
    descricao: {
      type: 'string'
    },
    quantidade: {
      type: 'string'
    }
  },
  additionalProperties: false
};