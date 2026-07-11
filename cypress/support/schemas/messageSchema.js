export const messageSchema = {
  type: 'object',
  required: ['message'],
  properties: {
    message: {
      type: 'string'
    }
  },
  additionalProperties: false
};