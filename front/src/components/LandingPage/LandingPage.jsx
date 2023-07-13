import React, { useState } from "react";
import CarouselMarcas from "../Carousel/CarouselMarcas";
import Footer from "../Footer/Footer";
import { FaCommentAlt, FaTimes, FaInstagram, FaFacebook } from "react-icons/fa";
import Reviews from "../Reviews/Reviews";
import Bot from "../ChatBot/Bot";
import video from "../../videos/video.mp4";
import wpp from "../../img/wpp.png";
import { FaWhatsapp } from "react-icons/fa";
import EntregaInmediata from "../Entrega/EntregaInmediata";
import VehiculosCards from "../vehiculosCards/VehiculosCards";
import Usados from "../Entrega/Usados";
import MapExample from "./Mapa";
import Faq from "../Faq/Faq";

const LandingPage = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot((prev) => !prev);
  };

  const closeChatbot = () => {
    setShowChatbot(false);
  };

  return (
    <div>
      {showChatbot ? (
        <div className="fixed bottom-0 right-0 mb-4 mr-4 z-10">
          <div className="relative">
            <div className="absolute top-0 right-0 mt-1 mr-1">
              <button
                className="p-2 rounded-full bg-sky-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-300 dark:focus:bg-gray-700"
                onClick={closeChatbot}
              >
                <FaTimes className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
            <Bot closeChatbot={closeChatbot} />
          </div>
        </div>
      ) : (
        <div className="fixed bottom-0 right-0 mb-4 mr-4 z-10 bg-white dark:bg-gray-900 p-2 rounded-full cursor-pointer">
          <FaCommentAlt
            className="w-6 h-6 text-gray-600 dark:text-gray-300"
            onClick={toggleChatbot}
          />
        </div>
      )}
      <section
        className="bg-sky-600 dark:bg-gray-900"
        style={{
          backgroundImage: `url(https://www.todofondos.net/wp-content/uploads/1600x1422-Fondo-de-pantalla-Xperiaan-Wallpaper-Pack-V2-.-Sony-Xperia-Z3-768x683.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="grid max-w-screen-xl px-6 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-6 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <div className="flex justify-center mb-[160px]">
              <div className="relative">
                <h1 className="text-xl text-white mb-2 font-bold font-noto">
                  Llamar al{" "}
                  <span className="text-orange-400 underline">
                    0800-268-0423
                  </span>
                </h1>
                <video className=" h-80 " autoPlay muted controls>
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="w-full mt-auto mb-[-130px] h-32 inset-0 ">
                  <h3 className="text-3xl text-white font-bold font-noto mt-8 mb-4">
                    Crees que no ganas lo suficiente <br />
                    para tener un auto 0Km?
                  </h3>
                  <div>
                    <button className="focus:outline-none font-noto text-white bg-orange-500 hover:bg-orange-400 font-bold rounded-lg text-sm px-5 py-4 mr-2 mb-2 dark:focus:ring-orange-900">
                      <a href="/planes" className="text-slate-100">
                        ELEGÍ TU AUTO 0KM
                      </a>
                    </button>
                    <button className="focus:outline-none font-bold text-white bg-orange-500 hover:bg-orange-400 font-noto rounded-lg text-sm px-5 py-4 mr-2 mb-2 dark:focus:ring-orange-900">
                      <a href="/planes" className="text-slate-100">
                        EXPLORA NUESTROS USADOS
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="mb-6 flex items-center justify-center">
              <span>
                <img
                  src="https://financialsmotors.com.ar/wp-content/uploads/2022/12/cropped-fmotors_Mesa-de-trabajo-1-2-80x106.png"
                  className="h-10 mr-3"
                  alt="Financials Logo"
                />
              </span>
              <h1 className="text-4xl font-bold text-white font-noto">
                Cotiza ahora
              </h1>
            </div>

            <form className="max-w-md ">
              {" "}
              <h1 className="text-white font-noto font-bold">
                Selecciona el modelo
              </h1>
              <div>
                <select
                  id="auto2"
                  name="auto2"
                  className="w-full px-4 py-3 font-semibold border border-gray-400 rounded-lg focus:outline-none focus:border-primary-300"
                >
                  <option value="Fiat Pulse">Fiat Pulse</option>
                  <option value="Peugeot 208">Peugeot 208</option>
                  <option value="Fiat Cronos">Fiat Cronos</option>
                </select>
              </div>
              <h1 className="text-white font-noto font-bold">Anticipo</h1>
              <div className="mb-4">
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
                  Realizar presupuesto
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
          </div>
        </div>
      </section>
      <EntregaInmediata />
      <Usados />
      {/* <MapExample /> */}
      <Faq />
      <Footer />
    </div>
  );
};

export default LandingPage;
