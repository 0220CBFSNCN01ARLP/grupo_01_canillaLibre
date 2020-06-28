module.exports = (sequelize, DataTypes) => {
    const Productos   = sequelize.define("Productos", {
        nombre: {
            type: DataTypes.STRING(500),
        },
        precioUnitario: {
            type: DataTypes.DECIMAL(10, 2),
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
            type: DataTypes.INTEGER,
        },
        create_at: {
            type: DataTypes.DATE
        },
        update_at: {
            type: DataTypes.DATE
        },
            
    },
    
    {
       tableName: "producto", 
       timestamps: false
    });



    Productos.associate = (function(models){
        //un usuario - muchas compras
        Productos.hasMany(models.Bebidas), {
            as: "bebidas",
            foreignKey: "productoId"
        }
    })

    Productos.associate = (function(models){
        //un usuario - muchas compras
        Productos.hasMany(models.Insumos), {
            as: "insumos",
            foreignKey: "productoId"
        }
    })

    Productos.associate = (function(models){
        //un usuario - muchas compras
        Productos.hasMany(models.Cursos), {
            as: "cursos",
            foreignKey: "productoId"
        }
    });

    Productos.associate = (function(models){
        //muchos productos - un usuario 
        Productos.belongsTo(models.Usuarios), {
            as: "usuario",
            foreignKey: "usuarioId"
        }
    });    

    return Productos;
  };