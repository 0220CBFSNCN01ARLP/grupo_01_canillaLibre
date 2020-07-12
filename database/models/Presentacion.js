module.exports = (sequelize, DataTypes) => {
    const Presentacion = sequelize.define(
        "Presentacion",
        {
            nombre: {
                type: DataTypes.STRING(100),
            },
            capacidad: {
                type: DataTypes.INTEGER(11),
            }
        },
        {
            tableName: "presentacion",
            timestamps: false,
        }
    );

    Presentacion.associate = function(models) {
        //mucha Presentacion- a una bebida
        Presentacion.hasMany(models.Bebidas,
            {
                as: "bebida",
                foreignKey: "presentacionId"
            })
    }

    return Presentacion;
};
