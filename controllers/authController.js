const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");

const controller = {
  //GET
  showRegister: (req, res) => {
    res.render("register");
  },

  //POST
  register: (req, res) => {
    //registro de nuevo usuario

    if (req.body.pass != req.body.pass2) {
      return res.redender("register");
    }

    //req.body.pass = bcrypt.hashsync(req.body.pass, 10);

    delete req.body.pass2;

    const user = {
      ...req.body,
      avatar: req.file.filename,
    };

    const users = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "../data/user_db.json"))
    );

    users.push(user);

    fs.writeFileSync(
      path.resolve(__dirname, "../data/user_db.json"),
      JSON.stringify(users, null, 3)
    );

    res.send(req.body);
  },
};

module.exports = controller;
