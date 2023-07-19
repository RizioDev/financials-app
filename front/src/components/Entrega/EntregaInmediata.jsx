import React from "react";
import VehiculosCards from "../vehiculosCards/VehiculosCards";

const EntregaInmediata = () => {
  return (
    <div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <h2 className="mb-3 text-5xl text-blue-800 font-noto font-bold dark:text-white text-center md:text-center mt-4 md:mt-8">
          AUTOS DE ENTREGA INMEDIATA
        </h2>
        <h5 className="mb-3 text-xl text-gray-700 font-noto font-semibold dark:text-white text-center md:text-center mt-2 md:mt-3">
          Imagina la emocion que sentiras cuando te entreguen las llaves de tu
          nuevo vehiculo, un sueño hecho realidad en tan solo 15 dias. ¡No
          esperes mas, tu aventura esta a solo 60 dias de distancia!
        </h5>
      </div>
      <VehiculosCards />
    </div>
  );
};

export default EntregaInmediata;
