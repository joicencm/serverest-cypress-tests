export const unauthorizedResponseSchema = {
  type: "object",
  properties: {
    message: {
      type: "string",
    },
    idCarrinho: {
      type: "string",
    },
  },
  additionalProperties: true,
};
