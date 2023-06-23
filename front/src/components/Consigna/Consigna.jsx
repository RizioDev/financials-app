import React from "react";

const Consigna = () => {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Vender tu auto nunca fue tan fácil
            </h2>
            <p class="mb-4">
              Obtené una valoración instantánea de tu auto.{" "}
              <u>Aceptamos tu auto como parte de pago</u> o te pagamos al
              contado. Evaluamos 240 puntos, brindándote un informe detallado
              sobre el estado mecánico, estético y legal de tu auto sin
              compromiso.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img
              class="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <a href="https://www.instagram.com/p/Cnr0VzOuwep/" target="_blank">
              <img
                class="mt-4 w-full lg:mt-10 rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                alt="office content 2"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consigna;
