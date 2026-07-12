export const successMessageResponseSchema = {
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
