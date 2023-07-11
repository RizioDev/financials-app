import React from "react";
import CarouselMarcas from "../Carousel/CarouselMarcas";
import Footer from "../Footer/Footer";
import Reviews from "../Reviews/Reviews";
import Bot from "../ChatBot/Bot";

const LandingPage = () => {
  return (
    <div>
      <Bot />
      <section className="bg-white dark:bg-gray-900 mt-[40px] sm:mt-[10px] md:mt-[150px] lg:mt-[30px] xl:mt-[30px] 2xl:mt-[90px]">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-serif font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Compra o vende tu usado en tiempo récord.
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              En nuestro compromiso por simplificar el proceso, puedes adquirir
              tu auto 0km en un plazo de 7 a 15 días. Nos encargamos de todos
              los trámites necesarios para que puedas disfrutar rápidamente de
              tu nuevo vehículo
            </p>
            <a
              href="/comprar"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-orange-500 hover:bg-orange-400  focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Elegí tu proximo 0km
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="/catalogo"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Explora nuestros usados
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://plus.unsplash.com/premium_photo-1661274070000-d52df694d8d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="mockup"
            />
          </div>
        </div>
      </section>
      <CarouselMarcas />
      <Reviews />
      <Footer />
    </div>
  );
};

export default LandingPage;
