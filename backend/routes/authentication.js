const Usuario = require("../models/usuario");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = (router) => {
  router.post("/signup", (req, res) => {
    bcrypt
      .hash(req.body.senha, 10)
      .then((hash) => {
        const usuario = new Usuario({
          email: req.body.email,
          nome: req.body.nome,
          senha: hash,
          tipo: req.body.tipo,
        });
        usuario.save().then((result) => {
          res.status(201).json({ message: "Usuário criado.", result: result });
        });
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  });

  router.post("/login", (req, res) => {
    let fetchedUser;
    Usuario.findOne({ email: req.body.email })
      .then((user) => {
        if (!user) {
          throw new Error("Voce precisa fornecer um email");
        }
        fetchedUser = user;
        return bcrypt.compare(req.body.senha, user.senha);
      })
      .then((result) => {
        if (!result) {
          throw new Error("Email ou senha invalidos");
        }
        const token = jwt.sign(
          { email: fetchedUser.email, userId: fetchedUser._id },
          "secret_this_should_be_longer",
          { expiresIn: "24h" }
        );
        res.status(200).json({
          token: token,
          expiresIn: 3600,
          userId: fetchedUser._id,
        });
      })
      .catch((err) => {
        return res
          .status(401)
          .json({ message: "Nao foi possivel autentificar o usuario" });
      });
  });

  return router;
};
