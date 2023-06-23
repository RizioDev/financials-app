import React from "react";
import { BsStarFill } from "react-icons/bs";

const Reviews = () => {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Testimonios de nuestros clientes{" "}
            </h2>
          </div>
          <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                  alt="Bonnie Avatar"
                />
              </a>
              <div class="p-5">
                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Bonnie Green</a>
                </h3>
                <span class="text-gray-500 font-bold dark:text-gray-400">
                  ¡Atención excelente!
                </span>
                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  "Muy buena la respuesta a mi consulta y concreté la compra con
                  la agencia designada. Muchas gracias."
                </p>
                <div className="flex space-x-1">
                  <BsStarFill className="text-yellow-500" />
                  <BsStarFill className="text-yellow-500" />
                  <BsStarFill className="text-yellow-500" />
                  <BsStarFill className="text-yellow-500" />
                  <BsStarFill className="text-yellow-500" />
                </div>
              </div>
            </div>
            <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="Jese Avatar"
                />
              </a>
              <div class="p-5">
                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Jese Leos</a>
                </h3>
                <span class="text-gray-500 font-bold dark:text-gray-400">
                  ¡Atención excelente!
                </span>
                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  "Muy buena la respuesta a mi consulta y concreté la compra con
                  la agencia designada. Muchas gracias."
                </p>
                <div className="flex space-x-1">
                  <BsStarFill className="text-yellow-500" />
                  <BsStarFill className="text-yellow-500" />
                  <BsStarFill className="text-yellow-500" />
                  <BsStarFill className="text-yellow-500" />
                  <BsStarFill className="text-yellow-500" />
                </div>
              </div>
            </div>
            <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="Michael Avatar"
                />
              </a>
              <div class="p-5">
                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Michael Gough</a>
                </h3>
                <span class="text-gray-500 font-bold dark:text-gray-400">
                  ¡Atención excelente!
                </span>
                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  "Muy buena la respuesta a mi consulta y concreté la compra con
                  la agencia designada. Muchas gracias."
                </p>
                <div className="flex space-x-1">
                  <BsStarFill className="text-yellow-500" />
                  <BsStarFill className="text-yellow-500" />
                  <BsStarFill className="text-yellow-500" />
                  <BsStarFill className="text-yellow-500" />
                  <BsStarFill className="text-yellow-500" />
                </div>
              </div>
            </div>
            <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                  alt="Sofia Avatar"
                />
              </a>
              <div class="p-5">
                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Lana Byrd</a>
                </h3>
                <span class="text-gray-500 font-bold dark:text-gray-400">
                  ¡Atención excelente!
                </span>
                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  "Muy buena la respuesta a mi consulta y concreté la compra con
                  la agencia designada. Muchas gracias."
                </p>
                <div className="flex space-x-1">
                  <BsStarFill className="text-yellow-500" />
                  <BsStarFill className="text-yellow-500" />
                  <BsStarFill className="text-yellow-500" />
                  <BsStarFill className="text-yellow-500" />
                  <BsStarFill className="text-yellow-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
