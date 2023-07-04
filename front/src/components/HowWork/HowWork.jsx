import React from "react";

const HowWork = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          {/* <div classNameName="max-w-screen-md mb-8 lg:mb-16">
            <h2 classNameName="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Designed for business teams like yours
            </h2>
            <p classNameName="text-gray-500 sm:text-xl dark:text-gray-400">
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
          </div> */}
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <img
                  src="https://cdn-icons-gif.flaticon.com/9284/9284527.gif"
                  alt="autoto"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Elegi tu auto ideal
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Elige el modelo que más se adapte a tu gusto, y comienza a
                disfrutar de la experiencia de conducir tu nuevo vehículo!
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <img
                  src="https://cdn-icons-gif.flaticon.com/6172/6172509.gif"
                  alt="fiti"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Elegi como queres pagar
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Aceptamos vehículos usados como parte de pago, y también podes
                financiar tu vehículo hasta en 60 cuotas!
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <img
                  src="https://cdn-icons-gif.flaticon.com/6172/6172517.gif"
                  alt="llamada"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Y nosotros te contactamos
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Una vez que hayas completado todos los datos necesarios, nuestro
                equipo de asesores se pondrá en contacto contigo lo antes
                posible
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWork;
