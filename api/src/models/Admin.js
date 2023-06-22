const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = function (sequelize) {
  const Admin = sequelize.define("admin", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Admin.prototype.isValidPassword = async function (password) {
    // Comparar la contraseña proporcionada con la almacenada en la base de datos
    console.log("Contraseña ingresada:", password);
    console.log("Contraseña almacenada:", this.password);
    return await bcrypt.compare(password, this.password);
  };

  return Admin;
};
