import React, { useState } from "react";
import VehiculoUsadoForm from "./VehiculoUsadoForm";
import ClienteForm from "./ClienteForm";
import FinanciarForm from "./FinanciarForm";
import EfectivoForm from "./EfectivoForm";

const MetodoPagoForm = ({ seleccion }) => {
  const [pago, setPago] = useState("");
  const handleSeleccion = (opcion) => {
    setPago(opcion); // Guarda la selección del usuario en el estado
  };

  // Renderiza el componente correspondiente según la selección
  const renderComponente = () => {
    if (pago === "Efectivo") {
      return <EfectivoForm seleccion={seleccion} pago={pago} />;
    } else if (pago === "Auto usado") {
      return <VehiculoUsadoForm seleccion={seleccion} pago={pago} />;
    } else if (pago === "Financiado") {
      return <FinanciarForm seleccion={seleccion} pago={pago} />;
    } else {
      return null; // Renderiza null si no hay selección o no coincide con ninguna opción
    }
  };

  return (
    <div>
      {pago === "" && (
        <div className="flex flex-col items-center justify-start mt-[11px] sm:mt-[80px] md:mt-[150px] lg:mt-[190px] xl:mt-[60px] 2xl:mt-[160px]">
          <img
            className="w-20 h-24 md:w-20 md:h-24 mx-auto"
            src="https://financialsmotors.com.ar/wp-content/uploads/2022/12/cropped-fmotors_Mesa-de-trabajo-1-2-80x106.png"
            alt="Imagen"
          />
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-center text-orange-400 md:text-5xl lg:text-6xl dark:text-white">
            ¿Como te gustaria pagar tu{" "}
            <span className="text-yellow-500 underline">{seleccion}</span>?
          </h1>
          <p className="mb-6 text-lg font-normal text-center text-gray-700 lg:text-xl sm:px-6 md:px-8 xl:px-48 dark:text-gray-400">
            Selecciona el modelo de tu próximo 0km, Decide cómo lo quieres pagar
            y uno de nuestros asesores se contactará al instante.
          </p>
          <div className="flex flex-col space-y-4 sm:flex sm:flex-row sm:space-y-0 sm:space-x-4 mt-4">
            <button
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-400 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              onClick={() => handleSeleccion("Efectivo")}
            >
              Efectivo
            </button>
            <button
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-400 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              onClick={() => handleSeleccion("Auto usado")}
            >
              Auto usado
            </button>
            <button
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-400 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              onClick={() => handleSeleccion("Financiado")}
            >
              Financiado
            </button>
          </div>
        </div>
      )}
      {renderComponente()} {/* Renderiza el componente correspondiente */}
    </div>
  );
};

export default MetodoPagoForm;
