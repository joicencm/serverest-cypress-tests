export const listarProdutosSchema = {
  type: 'object',
  required: ['quantidade', 'produtos'],
  additionalProperties: false,

  properties: {
    quantidade: {
      type: 'integer'
    },

    produtos: {
      type: 'array',

      items: {
        type: 'object',
        required: [
          '_id',
          'nome',
          'preco',
          'descricao',
          'quantidade'
        ],

        additionalProperties: false,

        properties: {
          _id: {
            type: 'string'
          },
          nome: {
            type: 'string'
          },
          preco: {
            type: 'integer'
          },
          descricao: {
            type: 'string'
          },
          quantidade: {
            type: 'integer'
          },
          imagem: {
            type: 'string'
          }
        }
      }
    }
  }
};