import React, { useState } from "react";
import Footer from "../Footer/Footer";
import HowWork from "../HowWork/HowWork";
import MetodoPagoComponent from "./MetodoPagoForm";

const Comprar = () => {
  const [seleccion, setSeleccion] = useState(""); // Estado para almacenar la selección del usuario

  const handleSeleccion = (opcion) => {
    setSeleccion(opcion); // Guarda la selección del usuario en el estado
  };

  // Renderiza el componente correspondiente según la selección
  const renderComponente = () => {
    if (seleccion === "Fiat Cronos") {
      return <MetodoPagoComponent />;
    } else if (seleccion === "Peugeot 208") {
      return <MetodoPagoComponent />;
    } else if (seleccion === "Fiat Pulse") {
      return <MetodoPagoComponent />;
    } else {
      return null; // Renderiza null si no hay selección o no coincide con ninguna opción
    }
  };

  return (
    <div>
      {seleccion === "" && ( // Muestra el div principal solo si no hay selección
        <div className="flex flex-col items-center justify-start mt-[11px] sm:mt-[80px] md:mt-[150px] lg:mt-[190px] xl:mt-[90px] 2xl:mt-[250px]">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-center text-green-600 md:text-5xl lg:text-6xl dark:text-white">
            Decide el modelo de tu próximo 0km
          </h1>
          <p className="mb-6 text-lg font-normal text-center text-gray-700 lg:text-xl sm:px-6 md:px-8 xl:px-48 dark:text-gray-400">
            Selecciona el modelo de tu próximo 0km, Decide cómo lo quieres pagar
            y uno de nuestros asesores se contactará al instante.
          </p>
          <div className="flex flex-col space-y-4 sm:flex sm:flex-row sm:space-y-0 sm:space-x-4 mt-4">
            <button
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-sky-300 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              onClick={() => handleSeleccion("Fiat Cronos")}
            >
              Fiat Cronos
            </button>
            <button
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-sky-300 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              onClick={() => handleSeleccion("Peugeot 208")}
            >
              Peugeot 208
            </button>
            <button
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-sky-300 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              onClick={() => handleSeleccion("Fiat Pulse")}
            >
              Fiat Pulse
            </button>
          </div>
        </div>
      )}
      {renderComponente()} {/* Renderiza el componente correspondiente */}
      <div className="md:mt-4 sm:mt-22">
        <HowWork />
      </div>
      <div className="md:mt-6 2xl:mt-[150px]">
        <Footer />
      </div>
    </div>
  );
};

export default Comprar;
