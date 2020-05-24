const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/product_db.json");
// const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
function getProducts() {
  return JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
}

const controller = {
  // Root - Show all products
  index: (req, res) => {
    // Do the magic
  },

  // All Products - Listado de todos los productos
  allproducts: (req, res) => {
    const products = getProducts();

    res.render("product", { listado: products });
  },

  // Detail - Detail from one product
  detailproduct: (req, res) => {
    const products = getProducts();

    const cerveza = products.find((e) => {
      return e.id == req.params.id;
    });
    if (!cerveza) return res.redirect("/");

    res.render("productDetail2", { cerveza });
  },
  // Update - Form to edit
  edit: (req, res) => {
    const products = getProducts();
    const cerveza = products.find((e) => {
      return e.id == req.params.id;
    });
    if (cerveza == null) {
      res.redirect("/");
    }
    res.render("product-edit-form", { cerveza });
  },

  update: (req, res) => {
    const products = getProducts();
    let cerveza = products.find((e) => {
      return e.id == req.params.id;
    });
    if (cerveza == null) {
      res.redirect("/");
    }

    //modificar datos que vienen del form
    // verificar si los datos son validos

    req.body.precio = Number.parseFloat(req.body.precio);
    req.body.descuento = Number.parseFloat(req.body.descuento);

    //actualizar los datos del producto

    updateData = {
      ...req.body,
    };
    //guardar el producto en la db
    const index = products.findIndex((e) => {
      return e.id == req.params.id;
    });
    products.splice(index, 1, updateData);
    fs.writeFileSync(productsFilePath, JSON.stringify(products), "utf-8");

    res.redirect("/product/productDetail2/" + cerveza.id);
  },
  // Create - Form to create
  create: (req, res) => {
    // Do the magic
    const products = getProducts();

    const product = products.find((e) => {
      return e.id == req.params.id;
    });
    if (!product) return res.redirect("/");

    res.render("detail", { product });

    let newProductJson = {
      name: req.params.name,
      price: req.params.price,
      discount: req.params.discount,
      category: req.params.category,
      description: req.params.description,
    };
    let newProduct = JSON.stringify(newProductJson);

    fs.writeFileSync("products-db.json", newProductJson);

    // res.render("product-create-form", { product });
  },

  // Create -  Method to store
  store: (req, res) => {
    // Do the magic
  },

  // Update - Method to update

  // Delete - Delete one product from DB
  //delete
  destroy: (req, res) => {
    const products = getProducts();
    const index = products.findIndex((e) => {
      return e.id == req.params.id;
    });

    if (index == -1) return res.redirect("/");

    products.splice(index, 1);
    fs.writeFileSync(productsFilePath, JSON.stringify(products), "utf-8");
    res.redirect("/");
  },
};

module.exports = controller;
