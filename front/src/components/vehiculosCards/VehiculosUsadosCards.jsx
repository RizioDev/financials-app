import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsados } from "../../store/actions/vehiculosActions";
import foto from "../../img/feat.webp";
import { Link } from "react-router-dom"; // Importa Link de React Router
import Sidebar from "./SideBar";

const VehiculosUsadosCards = ({ usados, getUsados }) => {
  useEffect(() => {
    getUsados();
  }, [getUsados]);

  return (
    <div>
      {/* <Sidebar /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-sky-100">
        {usados.slice(0,8).map((vehiculo) => {
          return (
            <div
              key={vehiculo.id}
              className="w-72 max-w-sm ml-5 bg-white border border-gray-200 mt-2 mb-2 rounded-lg shadow overflow-hidden "
            >
              <div className="px-5 pb-5 mt-5">
                {vehiculo.disponibilidad === "vendido" && (
                  <h1 className="text-red-500">Vendido</h1>
                )}
                <Link to={`/detail/${vehiculo.id}`}>
                  {" "}
                  {/* Utiliza Link en lugar de 'a' */}
                  <h5 className="text-2xl font-bold font-noto justify-center text-left text-black dark:text-white uppercase">
                    {vehiculo.marca} {vehiculo.modelo}
                  </h5>
                </Link>
                <h5 className="text-xl font-semibold font-noto justify-center text-left text-black dark:text-white">
                  CUOTAS DESDE
                </h5>
                <Link to={`/detail/${vehiculo.id}`}>
                  {" "}
                  <h5 className="text-2xl font-semibold tracking-tight font-noto text-black dark:text-white">
                    ${vehiculo.precio}
                  </h5>
                </Link>

                <Link to={`/detail/${vehiculo.id}`}>
                  {" "}
                  {/* Utiliza Link en lugar de 'a' */}
                  <img
                    className="p-2 mb-8 rounded-t-lg"
                    src={foto}
                    alt="product image"
                  />
                </Link>

                <div className="flex items-center justify-between">
                  <Link to={`/detail/${vehiculo.id}`}>
                    <button className="text-white bg-yellow-200 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      <p className="text-black font-noto text-xl font-bold">
                        Cotizar
                      </p>
                    </button>
                  </Link>
                  <Link to={`/detail/${vehiculo.id}`}>
                    <button className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      <p className="text-white font-noto text-xl font-bold">
                        Reservar
                      </p>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    usados: state.usados,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsados: () => dispatch(getUsados()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VehiculosUsadosCards);
