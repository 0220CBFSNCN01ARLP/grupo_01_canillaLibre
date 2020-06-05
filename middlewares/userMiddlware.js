const fs = require ("fs");
const usersFilePath = path.join(__dirname, "../data/user_db.json");
function getUsers() {
  return JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
};

const userMiddleware = {

    everybody : (req,res,next) => {
        
        next
    },
    withLogin : (req,res,next) => {

      let users = getUsers();

      if (users.email == ""){
        res.render("products", { listado: products });
      }
      next
    },
    withoutLogin : (req,res,next) => {
      next
    },
    }

module.exports = userMiddleware;