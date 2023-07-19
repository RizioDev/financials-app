import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import foto from "../../img/vw-gol-cca-usados.jpeg";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "flowbite-react";
import Acordion from "./Acordion";
import Lapse from "./Lapse";

const Detail = ({ vehiculos }) => {
  const { id } = useParams();
  const vehiculo = vehiculos.find((vehiculo) => vehiculo.id === id);

  if (!vehiculo) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row bg-sky-50">
      <div className="md:w-1/2">
        <div className="mt-5">
          <p className="inline-block font-noto bg-green-400 text-white rounded-full capitalize font-bold px-3 py-[-5px] ml-2">
            {vehiculo.disponibilidad}
          </p>

          <p className="text-2xl md:text-4xl mb-1 font-bold uppercase">
            <span className="font-semibold">|</span> {vehiculo.marca}{" "}
            {vehiculo.modelo} 1.{vehiculo.puertas} AT6
          </p>
          <p className="text-xl mb-1 text-gray-600 font-noto">
            Entrega Asegurada
          </p>
        </div>

        <img
          src={foto}
          alt="foto"
          className="w-full h-auto max-w-[650px] mx-auto md:mx-0"
        />

        <div className="ml-1 mt-2">
          <p className="font-bold font-pt">
            ✅ Tasa de 0% duante todo el plan | ✅ Financiacion |{" "}
            <span className="ml-20">Cuotas desde</span>
            <p>
              ✅ Tomamos tu usado como parte de pago{" "}
              <span className="bg-gray-300 ml-[160px] text-2xl">$109.000</span>
            </p>
          </p>
          <div className="mt-5"></div>
          <Acordion />
        </div>
      </div>
      <div className="md:w-1/2 md:mt-16 md:ml-24">
        <div className="mb-6 flex items-center ml-16">
          <span>
            <img
              src="https://financialsmotors.com.ar/wp-content/uploads/2022/12/cropped-fmotors_Mesa-de-trabajo-1-2-80x106.png"
              className="h-10 mr-3"
              alt="Financials Logo"
            />
          </span>
          <h1 className="text-2xl text-black uppercase font-noto">
            Solicitar <span className="font-bold">información</span>
          </h1>
        </div>
        <form className="max-w-md mt-7 mx-auto md:mx-0">
          <h1 className="text-black font-noto font-bold text-xl md:text-xl">
            Anticipo
          </h1>
          <div className="mb-1">
            <select
              id="name"
              name="name"
              className="w-full px-4 py-3 font-semibold border border-gray-400 rounded-lg focus:outline-none focus:border-primary-300"
            >
              <option value="Auto usado">Auto usado</option>
              <option value="Efectivo">Efectivo</option>
              <option value="Financiado">Financiado</option>
            </select>
          </div>
          <div className="mb-1">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="👤 Nombre y apellido"
              className="w-full px-4 py-3 border border-gray-400 font-semibold  rounded-lg focus:outline-none focus:border-primary-300"
            />
          </div>
          <div className="mb-1">
            <input
              type="text"
              id="dni"
              name="dni"
              placeholder="🗨 Numero de DNI"
              className="w-full px-4 py-3 border border-gray-400 font-semibold  rounded-lg focus:outline-none focus:border-primary-300"
            />
          </div>
          <div className="mb-1">
            <input
              type="number"
              id="telefono"
              name="telefono"
              placeholder="📞 Teléfono (Cod Area + Número)"
              className="w-full px-4 py-3 font-semibold border border-gray-400 rounded-lg focus:outline-none focus:border-primary-300"
            />
          </div>
          <div className="mb-1">
            <input
              type="text"
              id="localidad"
              name="localidad"
              placeholder="📍 Localidad"
              className="w-full px-4 py-3 border font-semibold border-gray-400 rounded-lg focus:outline-none focus:border-primary-300"
            />
          </div>
          <div className="flex justify-end mt-3">
            <button
              type="submit"
              className="px-6 font-noto font-bold w-full py-3 text-lg text-white rounded-lg bg-orange-500 hover:bg-orange-400 focus:outline-none focus:bg-primary-400"
            >
              Reservar
            </button>
          </div>
          <div className="flex items-center justify-end space-x-2">
            <button
              type="submit"
              className="flex items-center font-bold justify-center px-6 w-full mt-1 py-3 text-lg font-noto text-white rounded-lg bg-green-600 hover:bg-green-500 focus:outline-none focus:bg-primary-400"
            >
              <FaWhatsapp size={20} className="mr-2" />
              <span className="text-center">Realizar presupuesto</span>
            </button>
          </div>
        </form>
        <div className="mt-2 mr-5">
          <Lapse />
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