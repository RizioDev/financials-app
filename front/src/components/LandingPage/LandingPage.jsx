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
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-300 dark:focus:bg-gray-700"
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
      <section className="bg-sky-800 dark:bg-gray-900  ">
        <div className="grid max-w-screen-xl px-6 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-6 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <div className="flex justify-center mb-[160px]">
              <div className="relative">
                <video className=" h-80 " autoPlay muted controls>
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="w-full mt-auto h-32 inset-0 ">
                  <h3 className="text-3xl text-white font-bold font-noto mt-8 mb-4">
                    Crees que no ganas lo suficiente <br />
                    para tener un auto 0Km?
                  </h3>
                  <div>
                    <button className="focus:outline-none font-noto text-white bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:ring-orange-300 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-orange-900">
                      <a href="/planes" className="text-slate-100">
                        ELEGÍ TU AUTO 0KM
                      </a>
                    </button>
                    <button className="focus:outline-none font-bold text-white bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:ring-orange-300 font-noto rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-orange-900">
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
              <div className="mb-4">
                <input
                  type="auto2"
                  id="auto2"
                  name="auto2"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-300"
                  placeholder="Selecciona el modelo"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Anticipo"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-300"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nombre y apellido"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-300"
                />
              </div>
              <div className="mb-4">
                <input
                  type="phone"
                  id="telefono"
                  name="telefono"
                  placeholder="Teléfono (Cod Area + Número)"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-300"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="localidad"
                  name="localidad"
                  placeholder="Localidad"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-300"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 font-noto font-bold w-full py-1 text-lg text-white rounded-lg bg-orange-500 hover:bg-orange-400 focus:outline-none focus:bg-primary-400"
                >
                  Realizar presupuesto
                </button>
              </div>
              <div className="flex items-center justify-end space-x-2">
                <button
                  type="submit"
                  className="flex items-center font-bold justify-center px-6 w-full mt-1 py-1 text-lg font-noto text-white rounded-lg bg-green-600 hover:bg-green-500 focus:outline-none focus:bg-primary-400"
                >
                  <FaWhatsapp size={20} className="mr-2" />
                  <span className="text-center">Realizar presupuesto</span>
                </button>
              </div>
              {/* <div className="flex items-center justify-center mt-3">
                <a
                  href="https://www.instagram.com/tu_cuenta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-500 hover:text-purple-600 mr-2"
                >
                  <FaInstagram size={30} />
                </a>
                <a
                  href="https://www.facebook.com/tu_cuenta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-800 mr-2"
                >
                  <FaFacebook size={30} />
                </a>
                <a
                  href="https://www.whatsapp.com/tu_cuenta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 hover:text-green-800"
                >
                  <FaWhatsapp size={30} />
                </a>
              </div> */}
            </form>
          </div>
        </div>
      </section>
      <EntregaInmediata />
      <Usados />

      <Footer />
    </div>
  );
};

export default LandingPage;
