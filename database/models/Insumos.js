module.exports = (sequelize, DataTypes) => {
    const Insumos = sequelize.define(
        "Insumos",
        {
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
        Insumos.belongsTo(models.Productos),
            {
                as: "productos",
                foreignKey: "productoId"
            };
    };

    return Insumos;
};
