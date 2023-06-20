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
      },
    },
  });

  // Método para verificar la contraseña ingresada
  Admin.prototype.isValidPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

  // Hook para encriptar la contraseña antes de guardarla en la base de datos
  Admin.addHook("beforeSave", async (admin) => {
    if (admin.changed("password")) {
      const salt = await bcrypt.genSalt(10);
      admin.password = await bcrypt.hash(admin.password, salt);
    }
  });

  return Admin;
};
