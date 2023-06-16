const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const cloudinary = require("cloudinary").v2;

module.exports = function (sequelize) {
  const Vehicle = sequelize.define("vehicle", {
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv4(),
      primaryKey: true,
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    año: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
        isInt: true,
      },
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
        isInt: true,
      },
    },
    estado: {
      type: DataTypes.ENUM("0km", "usado"),
      allowNull: false,
      validate: {
        notEmpty: true,
        isIn: [["0km", "usado"]],
      },
    },
    tipo: {
      type: DataTypes.ENUM(
        "Coupe",
        "Hatchback",
        "Minivan",
        "Sedan",
        "Suv",
        "Van",
        "Wagon",
        "Pickup"
      ),
      allowNull: false,
      validate: {
        notEmpty: true,
        isIn: [
          [
            "Coupe",
            "Hatchback",
            "Minivan",
            "Sedan",
            "Suv",
            "Van",
            "Wagon",
            "Pickup",
          ],
        ],
      },
    },
    transimision: {
      type: DataTypes.ENUM("Manual", "Automatica"),
      allowNull: false,
      validate: {
        notEmpty: true,
        isIn: [["Manual", "Automatica"]],
      },
    },
    disponibilidad: {
      type: DataTypes.ENUM("Disponible", "Vendido"),
      allowNull: false,
      validate: {
        notEmpty: true,
        isIn: [["Disponible", "Vendido"]],
      },
    },
    combustible: {
      type: DataTypes.ENUM("Nafta", "Diesel", "GNC"),
      allowNull: false,
      validate: {
        notEmpty: true,
        isIn: [["Nafta", "Diesel", "GNC"]],
      },
    },
    kilometraje: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        notEmpty: true,
        isInt: true,
      },
    },
    ubicacion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imagenes: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
  });

  cloudinary.config({
    cloud_name: "tu-cloud-name",
    api_key: "tu-api-key",
    api_secret: "tu-api-secret",
  });

  // Función para obtener el mayor kilometraje registrado
  async function obtenerMayorKilometraje() {
    try {
      const vehiculo = await Vehicle.findOne({
        attributes: [
          [
            sequelize.fn("MAX", sequelize.col("kilometraje")),
            "max_kilometraje",
          ],
        ],
      });

      return vehiculo && vehiculo.max_kilometraje !== null
        ? vehiculo.max_kilometraje
        : 0;
    } catch (error) {
      console.log("Error al obtener el mayor kilometraje:", error);
      throw error;
    }
  }

  // Hook para asignar el mayor kilometraje antes de crear o actualizar un vehículo
  Vehicle.beforeCreate(async (vehiculo) => {
    const mayorKilometraje = await obtenerMayorKilometraje();
    vehiculo.kilometraje = mayorKilometraje;

    const imagenesSubidas = await Promise.all(
      vehiculo.imagenes.map((imagen) => cloudinary.uploader.upload(imagen))
    );
    vehiculo.imagenes = imagenesSubidas.map((result) => result.secure_url);
  });

  Vehicle.beforeUpdate(async (vehiculo) => {
    const mayorKilometraje = await obtenerMayorKilometraje();
    vehiculo.kilometraje = mayorKilometraje;

    const imagenesSubidas = await Promise.all(
      vehiculo.imagenes.map((imagen) => {
        if (typeof imagen === "string" && !imagen.startsWith("http")) {
          return imagen;
        } else {
          return cloudinary.uploader.upload(imagen);
        }
      })
    );
    vehiculo.imagenes = imagenesSubidas.map((result) =>
      typeof result === "string" ? result : result.secure_url
    );
  });

  return Vehicle;
};
