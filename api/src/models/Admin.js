const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = function (sequelize) {
  const Admin = sequelize.define("admin", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [6, 20], // Longitud mínima y máxima permitida para la contraseña
      },
    },
  });

  // ...

  return Admin;
};
