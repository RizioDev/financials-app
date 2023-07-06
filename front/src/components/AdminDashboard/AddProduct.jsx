import React, { useState } from "react";
import { connect } from "react-redux";
import { addVehiculo } from "../../store/actions/vehiculosActions";
import VehicleInput from "./VehicleInput";
import swal from "sweetalert2";

const AddVehicle = ({ addVehiculo }) => {
  const initialState = {
    marca: "",
    modelo: "",
    año: 2010,
    precio: 0,
    estado: "",
    tipo: "",
    puertas: null,
    transmision: "",
    disponibilidad: "disponible",
    combustible: "",
    kilometraje: 0,
    imagenes: [],
    exterior: "",
    multimedia: "",
    confort: "",
  };

  const [newVehicle, setNewVehicle] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewVehicle((prevVehicle) => ({
      ...prevVehicle,
      [name]: value,
    }));
    console.log(name + ": " + value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVehiculo(newVehicle);
    // Restablecer el formulario
    setNewVehicle(initialState);

    // Mostrar SweetAlert
    swal
      .fire({
        icon: "success",
        title: "Vehículo agregado correctamente",
        showConfirmButton: false,
        timer: 2000, // El SweetAlert se cierra después de 2 segundos
      })
      .then(() => {
        // Redireccionar al administrador del panel
        window.location.href = "http://localhost:3000/admin-dashboard";
      });
  };
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Agregar vehículo
          </h2>
          <div className="overflow-y-auto">
            <form onSubmit={handleSubmit}>
              {/* Campos de entrada */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <VehicleInput
                  label="Marca"
                  name="marca"
                  type="text"
                  value={newVehicle.marca}
                  placeholder="Toyota, Fiat, Ford..."
                  onChange={handleChange}
                  required
                />
                <VehicleInput
                  label="Modelo"
                  name="modelo"
                  type="text"
                  value={newVehicle.modelo}
                  placeholder="Ejemplo: Uno, Corsa, Gol..."
                  onChange={handleChange}
                  required
                />
                <VehicleInput
                  label="Año"
                  name="año"
                  type="number"
                  value={newVehicle.año}
                  placeholder="Ejemplo: 2010, 2015, 2020..."
                  onChange={handleChange}
                  required
                />
                <VehicleInput
                  label="Precio"
                  name="precio"
                  type="number"
                  value={newVehicle.precio}
                  placeholder="Ejemplo: 100000, 150000, 200000..."
                  onChange={handleChange}
                  required
                />
                <VehicleInput
                  label="Kilometraje"
                  name="kilometraje"
                  type="number"
                  value={newVehicle.kilometraje}
                  placeholder="Ejemplo: 10000, 20000..."
                  onChange={handleChange}
                  required
                />
                <VehicleInput
                  label="Estado"
                  name="estado"
                  type="select"
                  value={newVehicle.estado}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="nuevo">nuevo</option>
                  <option value="usado">usado</option>
                </VehicleInput>
                <VehicleInput
                  label="Tipo"
                  name="tipo"
                  type="select"
                  value={newVehicle.tipo}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="coupe">coupe</option>
                  <option value="hatchback">hatchback</option>
                  <option value="pickup">pickup</option>
                  <option value="wagon">wagon</option>
                  <option value="van">van</option>
                  <option value="sedan">sedan</option>
                  <option value="minivan">minivan</option>
                </VehicleInput>
                <VehicleInput
                  label="Transmisión"
                  name="transmision"
                  type="select"
                  value={newVehicle.transmision}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="manual">manual</option>
                  <option value="automatica">automatica</option>
                </VehicleInput>
                <VehicleInput
                  label="Combustible"
                  name="combustible"
                  type="select"
                  value={newVehicle.combustible}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="nafta">nafta</option>
                  <option value="gnc">gnc</option>
                  <option value="diesel">diesel</option>
                </VehicleInput>
                <VehicleInput
                  label="Color"
                  name="color"
                  type="text"
                  value={newVehicle.color}
                  placeholder="Ejemplo: Blanco, Azul..."
                  onChange={handleChange}
                  required
                />
                <VehicleInput
                  label="Exterior"
                  name="exterior"
                  type="select"
                  value={newVehicle.exterior}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="llantas de aleación">
                    llantas de aleación
                  </option>
                  <option value="paragolpes pintados">
                    paragolpes pintados
                  </option>
                  <option value="vidrios polarizados">
                    vidrios polarizados
                  </option>
                </VehicleInput>
                <VehicleInput
                  label="Multimedia"
                  name="multimedia"
                  type="select"
                  value={newVehicle.multimedia}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="AM/FM">AM/FM</option>
                  <option value="bluetooth">bluetooth</option>
                  <option value="entrada auxiliar">entrada auxiliar</option>
                  <option value="MP3">MP3</option>
                  <option value="USB">USB</option>
                </VehicleInput>{" "}
                <VehicleInput
                  label="Confort"
                  name="confort"
                  type="select"
                  value={newVehicle.confort}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="aire acondicionado">aire acondicionado</option>
                  <option value="cristales eléctricos">
                    cristales eléctricos
                  </option>
                  <option value="espejos eléctricos">espejos eléctricos</option>
                  <option value="computadora de abordo">
                    computadora de abordo
                  </option>
                  <option value="sensor de estacionamiento">
                    sensor de estacionamiento
                  </option>
                  <option value="tapizado de cuero">tapizado de cuero</option>
                  <option value="volante multifunción">
                    volante multifunción
                  </option>
                </VehicleInput>
              </div>
              <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Agregar vehículo
                </button>
              </div>
            </form>
            <a href="/admin-dashboard">
              <button className="w-full md:w-auto bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Volver
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default connect(null, { addVehiculo })(AddVehicle);
