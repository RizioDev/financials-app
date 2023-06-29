import React from "react";

const Error = () => {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto mt-20 max-w-screen-sm text-center">
            <h1 class="mb-10 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              Oops!
            </h1>
            <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              La página que buscas no existe.
            </p>
            <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Lo siento no podemos encontrar esa página, Te ayudamos a encontrar
              el auto de tus sueños en la página de principal{" "}
            </p>
            <a
              href="/"
              class="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            >
              Volver al inicio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
