module.exports = (sequelize, DataTypes) => {
    const Medio = sequelize.define(
        "Medio",
        {
            nombre: {
                type: DataTypes.STRING(100),
            }
        },
        {
            tableName: "medio",
            timestamps: false,
        }
    );

    Medio.associate = function(models) {
        //muchos Medio- a un curso
        Medio.hasMany(models.Cursos,
            {
                as: "curso",
                foreignKey: "medioId"
            })
    }

    return Medio;
};
