export const invalidProductIdResponseSchema = {
  type: "object",
  required: ["id"],
  properties: {
    id: {
      type: "string",
    },
  },
  additionalProperties: false,
};
