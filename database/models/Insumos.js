module.exports = (sequelize, DataTypes) => {
    const Insumos = sequelize.define(
        "Insumos",
        {
            productoId: {
                type: DataTypes.INTEGER(11)
            }, 
            descuento: {
                type: DataTypes.INTEGER,
            },
            envio: {
                type: DataTypes.TINYINT(1),
            },
            
        },
        {
            tableName: "insumos",
            timestamps: false,
        }
    );

    Insumos.associate = function (models) {
        //un Inusmo - pertenece a muchos productos
        Insumos.belongsTo(models.Productos,
            {
                as: "producto",
                foreignKey: "productoId"
            })
    }

    return Insumos;
};
