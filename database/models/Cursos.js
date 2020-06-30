module.exports = (sequelize, DataTypes) => {
    const Cursos   = sequelize.define("Cursos", {

        productoId: {
            type: DataTypes.INTEGER(11)
        }, 
        disertante: {
            type: DataTypes.STRING,
        },
        medioId: {
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
       tableName: "cursos", 
       timestamps: false
    });

    Cursos.associate = function (models) {
        Cursos.belongsTo(models.Productos, {
            
            as: "producto",
            foreignKey: "productoId"
            
        })
    }

    return Cursos;
  };