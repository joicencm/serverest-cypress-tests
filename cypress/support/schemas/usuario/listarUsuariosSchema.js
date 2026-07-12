export const listarUsuariosSchema = {
  type: "object",
  required: ["usuarios"],
  properties: {
    usuarios: {
      type: "array",
      items: {
        type: "object",
        required: ["nome", "email", "password", "administrador", "_id"],
        properties: {
          nome: { type: "string" },
          email: { type: "string" },
          password: { type: "string" },
          administrador: { type: "string" },
          _id: { type: "string" },
        },
        additionalProperties: false,
      },
    },
  },
  additionalProperties: true,
};
