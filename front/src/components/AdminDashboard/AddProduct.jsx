import React, { useState } from "react";
import { connect } from "react-redux";
import { addVehiculo } from "../../store/actions/vehiculosActions";

const AddVehicle = ({ addVehiculo }) => {
  const [newVehicle, setNewVehicle] = useState({
    marca: "",
    modelo: "",
    año: 0,
    precio: 0,
    estado: "",
    tipo: "",
    puertas: "",
    transmision: "",
    disponibilidad: "",
    combustible: "",
    kilometraje: 0,
    imagenes: [],
    exterior: "",
    multimedia: "",
  });

  const handleChange = (e) => {
    setNewVehicle({
      ...newVehicle,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVehiculo(newVehicle);
    // Restablecer el formulario
    setNewVehicle({
      marca: "",
      modelo: "",
      año: 0,
      precio: 0,
      estado: "usado",
      tipo: "",
      puertas: 4,
      transmision: "",
      disponibilidad: "disponible",
      combustible: "nafta",
      kilometraje: 0,
      imagenes: [],
      exterior: "",
      multimedia: "",
    });
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Agregar vehículo
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Campos de entrada */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                <label
                  htmlFor="marca"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Marca
                </label>
                <input
                  type="text"
                  name="marca"
                  id="marca"
                  className="border border-gray-300 px-3 py-2 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full text-sm text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={newVehicle.marca}
                  placeholder="Toyota, Fiat, Ford..."
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Resto de los campos de entrada */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="modelo"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Modelo
                </label>
                <input
                  type="text"
                  name="modelo"
                  id="modelo"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={newVehicle.modelo}
                  placeholder="Ejemplo: Uno, Corsa, Gol..."
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="año"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Año
                </label>
                <input
                  type="number"
                  name="año"
                  id="año"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={newVehicle.año}
                  placeholder="Ejemplo: 2010, 2015, 2020..."
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="precio"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Precio
                </label>
                <input
                  type="number"
                  name="precio"
                  id="precio"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={newVehicle.precio}
                  placeholder="Ejemplo: 100000, 150000, 200000..."
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="estado"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Estado
                </label>
                <input
                  type="text"
                  name="estado"
                  id="estado"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={newVehicle.estado}
                  placeholder="Ejemplo: Nuevo, Usado..."
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="tipo"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Tipo
                </label>
                <input
                  type="text"
                  name="tipo"
                  id="tipo"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={newVehicle.tipo}
                  placeholder="Ejemplo: Sedan, Hatchback..."
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="color"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Color
                </label>
                <input
                  type="text"
                  name="color"
                  id="color"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={newVehicle.color}
                  placeholder="Ejemplo: Blanco, Azul..."
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="kilometraje"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Kilometraje
                </label>
                <input
                  type="number"
                  name="kilometraje"
                  id="kilometraje"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={newVehicle.kilometraje}
                  placeholder="Ejemplo: 10000, 20000..."
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="transmision"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Transmisión
                </label>
                <input
                  type="text"
                  name="transmision"
                  id="transmision"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={newVehicle.transmision}
                  placeholder="Ejemplo: Manual, Automático..."
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Resto de los campos de entrada */}
            </div>
            <div className="flex items-center space-x-4">
              <button
                type="submit"
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Agregar vehículo
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default connect(null, { addVehiculo })(AddVehicle);
