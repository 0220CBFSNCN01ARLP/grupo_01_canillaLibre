const fs = require("fs");
const path = require("path");

const { Productos } = require("../database/models");

//const productsFilePath = path.join(__dirname, "../data/product_db.json");

/*function getProducts() {
  return JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
}*/

const controller = {

  //GET - formulario carga nuevo producto
    showRegister: (req, res) => {

        res.render("form_prod");
      },

    //POST - formulario envia datos de nuevo producto
    register: (req, res) => {
        Productos.create({
            nombre: req.body.nombre,
            precioUnitario: req.body.precioUnitario,
            descuento: req.body.descuento,
            descripcion: req.body.descripcion,
            imagen: req.body.image1,
            stock: req.body.stock,
            rating: req.body.rating
        },{
        }).then((Productos)=>{
            
            res.redirect('/products')
        })        

    },











  // Root - Show all products
  index: (req, res) => {
    // Do the magic
  },

  // Listado de todos los productos

  allproducts: (req, res) => {
      Productos.findAll({

      }).then((products) => {
          res.render("products", {
              products
          })
      })
  },


  // Detail - Detalle de un producto
  detailproduct: async (req, res) => {
        try {
            const product = await Productos.findByPk(req.params.id, {
                include: [ "Productos" ],
            });

            res.render("productDetail", { product });
        } catch (error) {
            res.send(error);
        }
    },


  // Edicion de producto por GET
  edit: async (req, res) => {
    try {
        const product = await Productos.findByPk(req.params.id);

        res.render("product-edit-form", { product });
    } catch (error) {
        res.send(error);
    }
},
  // Edicion de producto por PUT
  update: async (req, res) => {
    try {
        await Productos.update(
            {
              nombre: req.body.nombre,
              precioUnitario: req.body.precioUnitario,
              descuento: req.body.descuento,
              descripcion: req.body.descripcion,
              imagen: req.file.image1,
              stock: req.body.stock,
              rating: req.body.rating
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
          await req.files.forEach((image1) => {
          Productos.create({
          path: image1.filename
      });
  }); 

        res.redirect("/products/productDetail/" + req.params.id);
    } catch (error) {
        res.send(error);
    }
},


  //Elimina el producto por DELETE
  destroy: async (req, res) => {
    try {
        await Productos.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.redirect("/products");
    } catch (error) {
        res.send(error);
    }
  },
};

module.exports = controller;
