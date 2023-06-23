import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateVehiculo } from "../../store/actions/vehiculosActions";

const UpdateProduct = ({ vehiculo, setShowUpdateForm, updateVehiculo }) => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  useEffect(() => {
    setSelectedVehicle(vehiculo);
  }, [vehiculo]);

  const handleChangeMarca = (e) => {
    setSelectedVehicle({
      ...selectedVehicle,
      marca: e.target.value,
    });
  };

  const handleChangeModelo = (e) => {
    setSelectedVehicle({
      ...selectedVehicle,
      modelo: e.target.value,
    });
  };

  const handleChangeAnio = (e) => {
    setSelectedVehicle({
      ...selectedVehicle,
      anio: e.target.value,
    });
  };

  const handleChangePrecio = (e) => {
    setSelectedVehicle({
      ...selectedVehicle,
      precio: e.target.value,
    });
  };

  const handleChangeEstado = (e) => {
    setSelectedVehicle({
      ...selectedVehicle,
      estado: e.target.value,
    });
  };

  const handleChangeTipo = (e) => {
    setSelectedVehicle({
      ...selectedVehicle,
      tipo: e.target.value,
    });
  };

  const handleChangePuertas = (e) => {
    setSelectedVehicle({
      ...selectedVehicle,
      puertas: e.target.value,
    });
  };

  const handleChangeDisponibilidad = (e) => {
    setSelectedVehicle({
      ...selectedVehicle,
      disponibilidad: e.target.value,
    });
  };

  const handleChangeCombustible = (e) => {
    setSelectedVehicle({
      ...selectedVehicle,
      combustible: e.target.value,
    });
  };

  const handleChangeKilometraje = (e) => {
    setSelectedVehicle({
      ...selectedVehicle,
      kilometraje: e.target.value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // Realizar la acción de actualización del vehículo
    updateVehiculo(vehiculo.id, selectedVehicle);
    console.log("soy selectedVehicle", selectedVehicle);
    // Ocultar el formulario
    setShowUpdateForm(false);
  };

  if (!selectedVehicle) {
    return <div>Loading...</div>; // Puedes mostrar un mensaje de carga mientras se obtienen los datos del vehículo
  }

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Editar vehiculo
          </h2>
          <form onSubmit={handleUpdate}>
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
                  value={selectedVehicle.marca}
                  placeholder="Toyota.. Fiat.. Ford.."
                  onChange={handleChangeMarca}
                  required=""
                />
              </div>
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
                  value={selectedVehicle.modelo}
                  placeholder="Ejemplo: Corolla, 500, Mustang"
                  onChange={handleChangeModelo}
                  required=""
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
                  value={selectedVehicle.precio}
                  placeholder="Ejemplo: 25000, 15000, 5000"
                  onChange={handleChangePrecio}
                  required=""
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="tipo"
                  className="block mb-4 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Tipo
                </label>
                <input
                  type="text"
                  name="tipo"
                  id="tipo"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={selectedVehicle.tipo}
                  placeholder="Ejemplo: Sedán, SUV, Hatchback"
                  onChange={handleChangeTipo}
                  required=""
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="disponibilidad"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Disponibilidad
                </label>
                <input
                  type="text"
                  name="disponibilidad"
                  id="disponibilidad"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={selectedVehicle.disponibilidad}
                  placeholder="Ejemplo: Disponible, No disponible"
                  onChange={handleChangeDisponibilidad}
                  required=""
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
                  value={selectedVehicle.kilometraje}
                  placeholder="Ejemplo: 50000, 100000"
                  onChange={handleChangeKilometraje}
                  required=""
                />
              </div>
              {/* Resto de los campos de entrada */}
            </div>
            <div className="flex items-center space-x-4">
              <button
                type="submit"
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Confirmar cambios
              </button>
              {/* Resto de los elementos del formulario */}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateVehiculo: (id, updatedVehiculo) =>
    dispatch(updateVehiculo(id, updatedVehiculo)),
});

export default connect(null, mapDispatchToProps)(UpdateProduct);
