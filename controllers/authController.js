const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const { check, validationResult, body } = require("express-validator");

const controller = {
  //GET
  showRegister: (req, res) => {
    res.render("register");
  },

  //POST
  register: (req, res) => {
    //validation
    console.log(validationResult(req));
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      //registro de nuevo usuario

      if (req.body.pass != req.body.pass2) {
        return res.render("register");
      }

      req.body.pass = bcrypt.hashSync(req.body.pass, 10);

      delete req.body.pass2;

      const users = JSON.parse(
        fs.readFileSync(path.resolve(__dirname, "../data/user_db.json"))
      );

      const user = {
        ...req.body,
        avatar: "/avatar/" + req.file.filename,
        // funcion para integrar el id en cada usr registrado:
        id:
          users.reduce((ac, u) => {
            return Math.max(ac, u.id);
          }, 0) + 1,
      };

      users.push(user);

      fs.writeFileSync(
        path.resolve(__dirname, "../data/user_db.json"),
        JSON.stringify(users, null, 3)
      );

      res.send("Registro Completo");
    } else {
      return res.render("register", { errors: errors.errors });
    }
  },

  //GET LOGIN
  showLogin: (req, res) => {
    res.render("login");
  },

  //POST LOGIN
  login: (req, res) => {
    console.log(validationResult(req));
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      //Diego logica del logueo de usr
      let users = JSON.parse(
        fs.readFileSync(path.resolve(__dirname, "../data/user_db.json"))
      );
<<<<<<< HEAD

      for (let i = 0; i < users.length; i++) {
        if (users[i].email == req.body.email) {
          if (bcrypt.compareSync(req.body.pass, users[i].pass)) {
            usuarioaLoguearse = users[i].email;
=======
      console.log(users);

      for (let i = 0; i < users.length; i++) {
        if (users[i].email == req.body.email) {
          if (bcrypt.compareSync(req.body.pass, users[i].pass) == true) {
            let usuarioaLoguearse = users.email[i];
>>>>>>> 5badb5d06b441ff3667f3776c6e5ad9f6e033784

            break;
          }
        }
      }
      if (usuarioaLoguearse == undefined) {
        return res.render("login", {
          errors: [{ msg: "Credenciales Invalidas" }],
        });
      }
      req.session.usuarioLogueado = usuarioaLoguearse;
<<<<<<< HEAD
      res.send("A partir de aca ver las vista  del home personalizado");
=======
      res.send("Vamos!!");
>>>>>>> 5badb5d06b441ff3667f3776c6e5ad9f6e033784
      //logeo de usuario
      //res.render("/");
    } else {
      return res.render("login", { errors: errors.errors });
    }
  },
};

module.exports = controller;
