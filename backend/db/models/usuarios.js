'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.reservas, {foreignKey: 'usuarioId'})
    }
  }
  usuarios.init({
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    tipo_usuario: DataTypes.STRING,

    correo: DataTypes.STRING,
    sexo: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    foto: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'usuarios',
  });
  return usuarios;
};
