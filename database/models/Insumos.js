module.exports = (sequelize, DataTypes) => {
    const Insumos = sequelize.define(
        "Insumos",
        {
            productoId: {
                type: DataTypes.INTEGER(11)
            },             
            envio: {
                type: DataTypes.TINYINT(1),
            },
            origen: {
                type: DataTypes.STRING,
            }
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
