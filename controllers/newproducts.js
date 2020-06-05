const fs = require("fs");
const path = require("path");

const controllerProduct = {
  //GET
  showRegister: (req, res) => {
    res.render ("form_prod");
  },
  //POST
  register: (req, res) => {
    //registro de nuevo producto
    const newproducts = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "../data/product_db.json"))
    );
    const newproduct = {
      id:
        newproducts.reduce((ac, u) => {
          return Math.max(ac, u.id);
        }, 0) + 1,
      ...req.body,
      image1: "/upload/" + req.file.filename,
      // funcion para integrar el id en cada usr registrado:
    };
    newproducts.push(newproduct);
    fs.writeFileSync(
      path.resolve(__dirname, "../data/product_db.json"),
      JSON.stringify(newproducts, null, 3)
    );
    res.redirect("/products/");
  },
};
module.exports = controllerProduct;
