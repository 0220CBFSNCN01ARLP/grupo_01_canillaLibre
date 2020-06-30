module.exports = (sequelize, DataTypes) => {
    const Bebidas = sequelize.define(
        "Bebidas",
        {
            marca: {
                type: DataTypes.STRING(100),
            },
            descuento: {
                type: DataTypes.INTEGER,
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
                as: "productos",
                foreignKey: "productoId"
            })
    }

    return Bebidas;
};
