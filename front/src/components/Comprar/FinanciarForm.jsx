import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const FinanciarForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    locality: "",
    dni: "",
    financingAmount: "100",
  });

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que se envíe el formulario automáticamente

    // Envía los datos mediante emailjs
    const serviceID = "service_o2d02zx";
    const templateID = "template_1olihj5";
    const userID = "K_UpNO3Y2pH0jW9Iu";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        console.log("Datos enviados correctamente");
        // Muestra la alerta exitosa utilizando SweetAlert2
        Swal.fire({
          icon: "success",
          title: "¡Éxito!",
          text: "Datos enviados correctamente",
        });
        // Aquí puedes realizar alguna acción adicional después de enviar los datos
      })
      .catch((error) => {
        console.error("Error al enviar los datos:", error);
        // Muestra la alerta de error utilizando SweetAlert2
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un error al enviar los datos. Por favor, inténtalo nuevamente.",
        });
        // Aquí puedes manejar el error de envío de alguna manera
      });
  };

  useEffect(() => {
    // Realizar alguna acción adicional al cambiar los datos del formulario
    console.log(formData);
  }, [formData]);

  return (
    <div className=" mt-[11px] sm:mt-[80px] md:mt-[150px] lg:mt-[190px] xl:mt-[90px] 2xl:mt-[250px]">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-center text-green-600 md:text-5xl lg:text-6xl dark:text-white">
        Completá los datos y te llamamos
      </h1>
      <p className="mb-6 text-lg font-normal text-center text-gray-700 lg:text-xl sm:px-6 md:px-8 xl:px-48 dark:text-gray-400">
        Proporciona toda la información solicitada para que podamos ponernos en
        contacto contigo y armar un plan especial para ti.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-2 mb-3 md:grid-cols-2">
          <div>
            <label className="block ml-1 mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Nombre completo
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Miguel Angel"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white md:ml-1 ml-1">
              Apellido
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              placeholder="Perez"
              required
            />
          </div>
          <div>
            <label className="block ml-1 mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Número de teléfono
            </label>
            <input
              type="number"
              id="phone_number"
              className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="011 1234-5678"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white md:ml-1 ml-1">
              Localidad
            </label>
            <input
              type="text"
              id="localidad"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=" La Matanza, La Plata, Lanús"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white md:ml-1 ml-1">
              Número de DNI
            </label>
            <input
              type="number"
              id="dni"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="12.345.678"
              required
            />
          </div>
          <div>
            <label
              htmlFor="financiar"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white md:ml-1 ml-1"
            >
              Deseo financiar entre
            </label>
            <select
              id="financiar"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option value="100">100.000 - 500.000</option>
              <option value="200">500.000 - 1.500.000</option>
              <option value="300">1.500.000 - 3.000.000</option>
              <option value="400">3.000.000 - 5.000.000</option>
              <option value="500">5.000.000 - 10.000.000</option>
            </select>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FinanciarForm;
