module.exports = (sequelize, DataTypes) => {
    const Productos   = sequelize.define("Productos", {
        nombre: {
            type: DataTypes.STRING(500),
        },
        precioUnitario: {
            type: DataTypes.DECIMAL(4, 2),
        },
        descuento: {
            type: DataTypes.DECIMAL(4, 2),
        },
        descripcion: {
            type: DataTypes.STRING(500),
        },
        imagen: {
            type: DataTypes.STRING,
        },
        rating: {
            type: DataTypes.DECIMAL(4, 2),
        },
        stock: {
            type: DataTypes.INTEGER(11),
        },
        tipoproducto: {
            type: DataTypes.INTEGER(11)
        }
                    
    },
    
    {
       tableName: "producto", 
       timestamps: false
    });


    Productos.associate = function(models){
        //un usuario - muchas bebidas
        Productos.hasMany(models.Bebidas, {
            as: "bebidas",
            foreignKey: "productoId"
        }),
        //un usuario - muchos insumos
        Productos.hasMany(models.Insumos, {
            as: "insumos",
            foreignKey: "productoId"
        }),
        //un usuario - muchos cursos
        Productos.hasMany(models.Cursos, {
            as: "cursos",
            foreignKey: "productoId"
        }),
        //muchos productos - un usuario 
        Productos.belongsTo(models.Usuarios, {
            as: "usuario",
            foreignKey: "usuarioId"
        })
    }
  

    return Productos;
  };