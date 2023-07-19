import React, { useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

const ClienteForm = ({ seleccion, pago, formularioData }) => {
  const form = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Crea un objeto formData para almacenar los datos del formulario actual, seleccion, pago y formularioData
      const formData = {};

      // Captura los valores de los campos de entrada del formulario actual
      const formElements = form.current.elements;
      for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];
        if (element.id) {
          formData[element.id] = element.value;
        }
      }

      // Agrega los valores de seleccion, pago y formularioData
      formData.seleccion = seleccion;
      formData.pago = pago;
      // formData.formularioData = formularioData;
      formData.anio = formularioData.year || "";
      formData.marca = formularioData.marca || "";
      formData.modelo = formularioData.modelo || "";
      formData.version = formularioData.version || "";
      formData.color = formularioData.color || "";
      formData.cp = formularioData.cp || "";

      // Realiza el envío de los datos utilizando emailjs
      const result = await emailjs.send(
        "service_o2d02zx",
        "template_006ts3n",
        formData,
        "K_UpNO3Y2pH0jW9Iu"
      );

      if (result.text === "OK") {
        Swal.fire({
          title: "¡Muchas gracias!",
          text: "Pronto un asesor se pondrá en contacto contigo.",
          icon: "success",
          showCancelButton: false,
          confirmButtonText: "Volver al inicio",
          allowOutsideClick: false,
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/";
          }
        });
      } else {
        throw new Error("Error en el envío del formulario");
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "¡Ups!",
        text: "Ocurrió un error al enviar los datos. Por favor, intenta nuevamente.",
        icon: "error",
        showCancelButton: false,
        confirmButtonText: "Cerrar",
        allowOutsideClick: false,
      });
    }
  };

  return (
    // <div className="flex flex-col items-center justify-start mt-[11px] sm:mt-[80px] md:mt-[150px] lg:mt-[190px] xl:mt-[60px] 2xl:mt-[160px]">
    <div className=" mt-[11px] sm:mt-[11px] md:mt-[150px] lg:mt-[190px] xl:mt-[60px] 2xl:mt-[160px]">
      <img
        className="w-20 h-24 md:w-20 md:h-24 mx-auto"
        src="https://financialsmotors.com.ar/wp-content/uploads/2022/12/cropped-fmotors_Mesa-de-trabajo-1-2-80x106.png"
        alt="Imagen"
      />
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-center text-orange-400 md:text-5xl lg:text-6xl dark:text-white">
        Completá los datos y te llamamos
      </h1>
      <p className="mb-6 text-lg font-normal text-center text-gray-700 lg:text-xl sm:px-6 md:px-8 xl:px-48 dark:text-gray-400">
        Proporciona toda la información solicitada para que podamos ponernos en
        contacto contigo y armar un plan especial para ti.
      </p>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="grid gap-2 mb-3 md:grid-cols-2">
          <div>
            <label className="block ml-1 mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Nombre completo
            </label>
            <input
              type="text"
              name="first_name"
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
              name="last_name"
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
              name="phone_number"
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
              name="localidad"
              id="localidad"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=" La Matanza, La Plata, Lanús"
              required
            />
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="text-white bg-orange-500 hover:bg-orange-400  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClienteForm;
