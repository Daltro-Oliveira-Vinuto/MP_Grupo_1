const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const usuarioSchema = mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    nome: { type: String, required: true },
    senha: { type: String, required: true },
    tipo: { type: String, required: true },
  },
  { versionKey: false }
);

usuarioSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Usuario", usuarioSchema);