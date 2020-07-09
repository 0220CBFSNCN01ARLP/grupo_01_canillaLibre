module.exports = (sequelize, DataTypes) => {
    const Bebidas = sequelize.define(
        "Bebidas",
        {
            productoId: {
                type: DataTypes.INTEGER(11)
            },    
            marca: {
                type: DataTypes.STRING(100),
            },
            envio: {
                type: DataTypes.TINYINT(1),
            },
            ibu: {
                type: DataTypes.INTEGER(11),
            },
            alcohol: {
                type: DataTypes.INTEGER(11),
            },
            presentacionId: {
                type: DataTypes.INTEGER(11),
            }
        },
        {
            tableName: "bebidas",
            timestamps: false,
        }
    );

    Bebidas.associate = function(models) {
        //una bebida - pertenece a muchos productos
        Bebidas.belongsTo(models.Productos,
            {
                as: "producto",
                foreignKey: "productoId"
            })
        
        Bebidas.associate = function(models) {
        //una bebida- a muchas presentaciones
        Bebidas.belongsTo(models.Presentacion,
            {
                as: "presentacion",
                foreignKey: "presentacionId"
            })
    }
        
    }

    return Bebidas;
};
