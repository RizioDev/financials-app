import React from "react";

const Footer = () => {
  return (
    <footer class="p-4 bg-slate-200 md:p-8 lg:p-10 dark:bg-gray-800">
      <div class="mx-auto max-w-screen-xl text-center">
        <a
          href="/"
          className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            src="https://financialsmotors.com.ar/wp-content/uploads/2022/12/cropped-fmotors_Mesa-de-trabajo-1-2-80x106.png"
            className="h-8 mr-3"
            alt="Financials Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Financials Motors
          </span>
        </a>
        <p class="my-6 text-gray-500 dark:text-gray-400">
          ¡Vende tu auto fácilmente con Financials Motors! <br />
          Consignación física o virtual para una venta rápida. Expertos en
          marketing y vendedores capacitados. <br />
          ¡No esperes más, vende tu auto ahora!
        </p>
        <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              ¿Quienes somos?
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Financiación
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              Contactanos
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Gestion segura
            </a>
          </li>
        </ul>
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023-2023{" "}
          <a href="#" class="hover:underline">
            FinancialsMotors™
          </a>
          . Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
