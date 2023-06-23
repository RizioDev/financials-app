import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import volswagen from "../../img/volskwagen.svg";
import fiat from "../../img/fiat.svg";
import ford from "../../img/ford.svg";
import peugeot from "../../img/peugeot.svg";
import renault from "../../img/renault.svg";
import citroen from "../../img/citroen.svg";
import toyota from "../../img/toyota.svg";

const CarouselMarcas = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  };

  // carrousel items

  const items = [
    <div className="item" data-value="2">
      <img src={fiat} alt="logo-auto" />
      <h3 className="text-1xl font-bold ml-4 mb-8 text-white">Fiat</h3>
    </div>,
    <div className="item" data-value="3">
      <img src={ford} alt="logo-auto" />
      <h3 className="text-1xl font-bold ml-4 mb-8 text-white">Ford</h3>
    </div>,
    <div className="item" data-value="4">
      <img src={peugeot} alt="logo-auto" />
      <h3 className="text-1xl font-bold ml-1 mb-8 text-white">Peugeot</h3>
    </div>,
    <div className="item" data-value="5">
      <img src={renault} alt="logo-auto" />
      <h3 className="text-1xl font-bold ml-2 mb-8 text-white">Renault</h3>
    </div>,
    <div className="item" data-value="5">
      <img src={citroen} alt="logo-auto" />
      <h3 className="text-1xl font-bold ml-2 text-white">Citroen</h3>
    </div>,
    <div className="item" data-value="1">
      <img src={volswagen} alt="logo-auto" />
      <h3 className="text-1xl font-bold ml-0 mb-8 text-white">Volkswagen</h3>
    </div>,
    <div className="item" data-value="1">
      <img src={toyota} alt="logo-auto" />
      <h3 className="text-1xl font-bold ml-2 mb-8 text-white">Toyota</h3>
    </div>,
  ];

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <h2 className="mb-3 text-2xl font-bold dark:text-white text-center md:text-center mt-4 md:mt-8">
            Encontra todas las marcas
          </h2>
          <h5 className="mb-3 text-sm dark:text-white text-center md:text-center mt-2 md:mt-3">
            Descubri nuestros usados, elegi el que mas te guste y llevatelo sin
            vueltas
          </h5>
          <div className="mt-4 md:mt-8">
            <AliceCarousel
              autoPlay
              autoPlayStrategy="none"
              autoPlayInterval={3500}
              animationDuration={1300}
              animationType="fadeout"
              infinite
              touchTracking={false}
              disableDotsControls
              disableButtonsControls
              mouseTracking
              items={items}
              paddingLeft={100}
              paddingRight={100}
              responsive={responsive}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarouselMarcas;
