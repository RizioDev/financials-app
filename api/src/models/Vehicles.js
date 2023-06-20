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
        "coupe",
        "hatchback",
        "minivan",
        "sedan",
        "suv",
        "van",
        "wagon",
        "pickup"
      ),
      allowNull: false,
      validate: {
        notEmpty: true,
        isIn: [
          [
            "coupe",
            "hatchback",
            "minivan",
            "sedan",
            "suv",
            "van",
            "wagon",
            "pickup",
          ],
        ],
      },
    },
    transmision: {
      type: DataTypes.ENUM("manual", "automatica"),
      allowNull: false,
      validate: {
        notEmpty: true,
        isIn: [["manual", "automatica"]],
      },
    },
    disponibilidad: {
      type: DataTypes.ENUM("disponible", "vendido"),
      allowNull: false,
      validate: {
        notEmpty: true,
        isIn: [["disponible", "vendido"]],
      },
    },
    combustible: {
      type: DataTypes.ENUM("nafta", "diesel", "gnc"),
      allowNull: false,
      validate: {
        notEmpty: true,
        isIn: [["nafta", "diesel", "gnc"]],
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

    imagenes: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    seguridad: {
      type: DataTypes.ENUM(
        "ABS",
        "airbag",
        "alarma",
        "cierre centralizado",
        "control de tracción",
        "control de estabilidad",
        "faros antiniebla",
        "frenos a disco",
        "isofix"
      ),
      allowNull: true,
    },
    confort: {
      type: DataTypes.ENUM(
        "aire acondicionado",
        "asiento trasero rebatible",
        "climatizador automático",
        "computadora de abordo",
        "cristales eléctricos",
        "espejos eléctricos",
        "sensor de estacionamiento",
        "tapizado de cuero",
        "volante multifunción"
      ),
      allowNull: true,
    },
    exterior: {
      type: DataTypes.ENUM(
        "llantas de aleación",
        "paragolpes pintados",
        "vidrios polarizados"
      ),
      allowNull: true,
    },
    multimedia: {
      type: DataTypes.ENUM(
        "AM/FM",
        "bluetooth",
        "comando satelital de stereo",
        "entrada auxiliar",
        "MP3",
        "USB"
      ),
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
    vehiculo.kilometraje = vehiculo.kilometraje || mayorKilometraje;

    if (vehiculo.imagenes) {
      // Resto del código de subida de imágenes...
    }
  });

  Vehicle.beforeUpdate(async (vehiculo) => {
    const mayorKilometraje = await obtenerMayorKilometraje();
    vehiculo.kilometraje = vehiculo.kilometraje || mayorKilometraje;

    if (vehiculo.imagenes) {
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
    }
  });

  return Vehicle;
};
