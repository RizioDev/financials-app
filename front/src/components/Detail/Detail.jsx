import React from "react";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom"; // Importa useParams
import foto from "../../img/vw-gol-cca-usados.jpeg";

const Detail = ({ vehiculos }) => {
  const { id } = useParams(); // Obtiene los parámetros de la URL

  const vehiculo = vehiculos.find((vehiculo) => vehiculo.id === id); // Busca el vehículo correspondiente en el estado

  if (!vehiculo) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <div className="max-w-md mx-auto bg-white shadow-md p-8">
        <img src={foto} alt={vehiculo.id} />

        <h2 className="text-2xl font-bold mb-4">
          {vehiculo.marca} {vehiculo.modelo}{" "}
          <p>
            <span className="font-semibold">Precio:</span> ${vehiculo.precio}
          </p>
        </h2>

        <div class="flex items-center space-x-1">
          <svg
            class="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            class="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            class="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            class="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            class="w-4 h-4 text-gray-300 dark:text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </div>

        <div>
          <p>
            <span className="font-semibold">Año:</span> {vehiculo.año}
          </p>
          <p>
            <span className="font-semibold">Kilometraje:</span>{" "}
            {vehiculo.kilometraje} km
          </p>
          <p>
            <span className="font-semibold">Estado:</span> {vehiculo.estado}
          </p>
          <p>
            <span className="font-semibold">Combustible:</span>{" "}
            {vehiculo.combustible}
          </p>
          <p>
            <span className="font-semibold">Transmision:</span>{" "}
            {vehiculo.transmision}
          </p>
          <p>
            <span className="font-semibold">Exterior:</span> {vehiculo.exterior}
          </p>
          <p>
            <span className="font-semibold">Multimedia:</span>{" "}
            {vehiculo.multimedia}
          </p>
          <p>
            <span className="font-semibold">Confort:</span> {vehiculo.confort}
          </p>
          <div className="flex justify-center mt-10">
            <button className="text-white bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
              Contactar
            </button>
          </div>

          {/* Agrega aquí más detalles del vehículo si es necesario */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    vehiculos: state.vehiculos,
  };
};

export default connect(mapStateToProps)(Detail);
