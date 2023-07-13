import React, { useEffect } from "react";

const NavBar = () => {
  useEffect(() => {
    const toggleButton = document.querySelector(
      '[data-collapse-toggle="navbar-search"]'
    );
    const menu = document.getElementById("navbar-search");

    toggleButton.addEventListener("click", () => {
      const expanded = toggleButton.getAttribute("aria-expanded") === "true";
      toggleButton.setAttribute("aria-expanded", !expanded);
      menu.classList.toggle("hidden");
    });

    return () => {
      toggleButton.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <nav className="bg-blue-600 border-sky-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img
            src="https://financialsmotors.com.ar/wp-content/uploads/2022/12/cropped-fmotors_Mesa-de-trabajo-1-2-80x106.png"
            className="h-8 mr-3"
            alt="Financials Logo"
          />
          <span className="self-center text-2xl font-bold whitespace-nowrap text-white font-noto dark:text-white">
            FINANCIALS MOTORS
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100  rounded-lg text-sm p-2.5 mr-1"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Menu</span>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-blue-600 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <a
                href="/catalogo"
                className="block py-2 pl-3 pr-4 text-slate-100 bg-blue-600 rounded hover:text-slate-200  md:p-0 "
              >
                Catálogo
              </a>
            </li>
            <li>
              <a
                href="/vender"
                className="block py-2 pl-3 pr-4 text-slate-100 bg-blue-600 rounded hover:text-slate-200  md:p-0 "
              >
                Vender
              </a>
            </li>
            <li>
              <a
                href="/como-funciona"
                className="block py-2 pl-3 pr-4 text-slate-100 bg-blue-600 rounded hover:text-slate-200  md:p-0 "
              >
                ¿Cómo funciona?
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
