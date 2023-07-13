import React from "react";

import { Accordion } from "flowbite-react";

export default function Acordion() {
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title className="font-bold text-xl font-noto uppercase">
          Información del vehiculo :
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p className="font-semibold">
              Strada Endurance es el vehículo correcto para quienes buscan una
              herramienta de trabajo confiable, con alta capacidad y bajo
              consumo. Equipada con el conocido motor Fire 1.4 de 85cv. Esta
              nueva generación mejora la capacidad de carga permitiendo hasta
              650kg y 844 litros, con una caja revestida e iluminada. Entre su
              equipamiento de serie destaca 4 airbags, asistencia al arranque en
              pendiente, protector de cárter y control de tracción avanzado y
              estabilidad.
            </p>
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="font-bold text-xl font-noto uppercase">
          Detalles del vehiculo
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-black-500 dark:text-gray-400">
            <p className="font-semibold">
              🟡 Kilometraje: 0km <br />
              🟡 Motor: 1.4 Fire <br /> 🟡 Potencia: 85cv <br />
              🟡 Transmisión: Manual de 5 velocidades
              <br /> 🟡 Capacidad de carga: 650kg
              <br /> 🟡 Capacidad de carga: 844 litros
              <br />
            </p>
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="font-bold text-xl font-noto uppercase">
          {" "}
          Preguntas frecuentes
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>
              The main difference is that the core components from Flowbite are
              open source under the MIT license, whereas Tailwind UI is a paid
              product. Another difference is that Flowbite relies on smaller and
              standalone components, whereas Tailwind UI offers sections of
              pages.
            </p>
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>
              However, we actually recommend using both Flowbite, Flowbite Pro,
              and even Tailwind UI as there is no technical reason stopping you
              from using the best of two worlds.
            </p>
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Learn more about these technologies:
          </p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a
                className="text-cyan-600 hover:underline dark:text-cyan-500"
                href="https://flowbite.com/pro/"
              >
                <p>Flowbite Pro</p>
              </a>
            </li>
            <li>
              <a
                className="text-cyan-600 hover:underline dark:text-cyan-500"
                href="https://tailwindui.com/"
                rel="nofollow"
              >
                <p>Tailwind UI</p>
              </a>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
