import React from "react";

const ClienteForm = () => {
  return (
    <div className=" mt-[11px] sm:mt-[80px] md:mt-[150px] lg:mt-[190px] xl:mt-[90px] 2xl:mt-[250px]">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-center text-green-600 md:text-5xl lg:text-6xl dark:text-white">
        Completa los datos y te llamamos
      </h1>
      <p className="mb-6 text-lg font-normal text-center text-gray-700 lg:text-xl sm:px-6 md:px-8 xl:px-48 dark:text-gray-400">
        Proporciona toda la información solicitada para que podamos ponernos en
        contacto contigo y armar un plan especial para ti.
      </p>
      <form>
        <div className="grid gap-2 mb-3 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="block ml-1 mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
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
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white md:ml-1 ml-1"
            >
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
            <label
              htmlFor="company"
              className="block ml-1 mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Numero de telefono
            </label>
            <input
              type="text"
              id="company"
              className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="011 1234-5678"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white md:ml-1 ml-1"
            >
              Localidad
            </label>
            <input
              type="tel"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=" La Matanza, La Plata, Lanús"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
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

export default ClienteForm;
