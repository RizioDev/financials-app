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
      allowNull: true,
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    año: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    estado: {
      type: DataTypes.ENUM("nuevo", "usado"),
      allowNull: true,
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
      allowNull: true,
    },
    transmision: {
      type: DataTypes.ENUM("manual", "automatica"),
      allowNull: true,
    },
    puertas: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    disponibilidad: {
      type: DataTypes.ENUM("disponible", "vendido"),
      defaultValue: "disponible",
      allowNull: true,
    },
    combustible: {
      type: DataTypes.ENUM("nafta", "diesel", "gnc"),
      allowNull: true,
    },
    kilometraje: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    imagenes: {
      type: DataTypes.ARRAY(DataTypes.STRING),
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
    version: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imagenes: {
      type: DataTypes.ARRAY(DataTypes.STRING),
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
