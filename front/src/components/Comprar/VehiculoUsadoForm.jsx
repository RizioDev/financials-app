import React, { useState } from "react";

const VehiculoUsadoForm = () => {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");

  const handleMarcaChange = (event) => {
    setMarca(event.target.value);
    setModelo(""); // Restablecer el valor del modelo cuando se cambia la marca
  };

  const handleModeloChange = (event) => {
    setModelo(event.target.value);
    setModelo();
  };

  return (
    <div>
      <div className=" mt-[11px] sm:mt-[80px] md:mt-[150px] lg:mt-[190px] xl:mt-[90px] 2xl:mt-[250px]">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-center text-green-600 md:text-5xl lg:text-6xl dark:text-white">
          Completa los datos y te llamamos
        </h1>
        <p className="mb-6 text-lg font-normal text-center text-gray-700 lg:text-xl sm:px-6 md:px-8 xl:px-48 dark:text-gray-400">
          Proporciona toda la información solicitada para que podamos ponernos
          en contacto contigo y armar un plan especial para ti.
        </p>
        <form>
          <div className="grid gap-2 mb-3 md:grid-cols-2">
            <div>
              <label
                htmlFor="year"
                className="block ml-1 mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Seleccioná el año de tu auto
              </label>
              <select
                id="year"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="marca"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white md:ml-1 ml-1"
              >
                Seleccioná la marca
              </label>
              <select
                id="marca"
                value={marca}
                onChange={handleMarcaChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="marca" selected>
                  Seleccionar marca
                </option>
                <option value="Audi">Audi</option>
                <option value="BMW">BMW</option>
                <option value="Chevrolet">Chevrolet</option>
                <option value="Fiat">Fiat</option>
                <option value="Ford">Ford</option>
                <option value="Honda">Honda</option>
                <option value="Hyundai">Hyundai</option>
                <option value="Kia">Kia</option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
                <option value="Nissan">Nissan</option>
                <option value="Peugeot">Peugeot</option>
                <option value="Renault">Renault</option>
                <option value="Toyota">Toyota</option>
                <option value="Volkswagen">Volkswagen</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="modelo"
                className="block ml-1 mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Seleccioná el modelo
              </label>

              {marca && (
                <select
                  id="merca"
                  value={modelo}
                  onChange={handleModeloChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  {" "}
                  {marca === "marca" && (
                    <>
                      <option value="marca2" selected>
                        Selecciona la marca
                      </option>
                    </>
                  )}
                  {marca === "Audi" && (
                    <>
                      <option value="a1">A1</option>
                      <option value="a3">A3</option>
                      <option value="a4">A4</option>
                      <option value="a5">A5</option>
                      <option value="a6">A6</option>
                      <option value="q3">Q3</option>
                      <option value="q5">Q5</option>
                      <option value="q7">Q7</option>
                      <option value="tt">TT</option>
                      <option value="r8">R8</option>
                    </>
                  )}
                  {marca === "Chevrolet" && (
                    <>
                      <option value="Onix">Onix</option>
                      <option value="Cruze">Cruze</option>
                      <option value="Tracker">Tracker</option>
                      <option value="Spin">Spin</option>
                      <option value="S10">S10</option>
                      <option value="Prisma">Prisma</option>
                      <option value="Equinox">Equinox</option>
                      <option value="Captiva">Captiva</option>
                      <option value="Trailblazer">Trailblazer</option>
                      <option value="Camaro">Camaro</option>
                    </>
                  )}
                  {marca === "BMW" && (
                    <>
                      <option value="serie-1">Serie 1</option>
                      <option value="serie-2">Serie 2</option>
                      <option value="serie-3">Serie 3</option>
                      <option value="serie-4">Serie 4</option>
                      <option value="serie-5">Serie 5</option>
                      <option value="serie-6">Serie 6</option>
                      <option value="serie-7">Serie 7</option>
                      <option value="x1">X1</option>
                      <option value="x3">X3</option>
                      <option value="x5">X5</option>
                    </>
                  )}
                  {marca === "Fiat" && (
                    <>
                      <option value="Palio">Palio</option>
                      <option value="Siena">Siena</option>
                      <option value="Punto">Punto</option>
                      <option value="Uno">Uno</option>
                      <option value="500">500</option>
                      <option value="Grand Siena">Grand Siena</option>
                      <option value="Strada">Strada</option>
                      <option value="Fiorino">Fiorino</option>
                      <option value="Toro">Toro</option>
                      <option value="Argo">Argo</option>
                      <option value="Cronos">Cronos</option>
                      <option value="Mobi">Mobi</option>
                    </>
                  )}
                  {marca === "Ford" && (
                    <>
                      <option value="Fiesta">Fiesta</option>
                      <option value="Focus">Focus</option>
                      <option value="EcoSport">EcoSport</option>
                      <option value="Ranger">Ranger</option>
                      <option value="Ka">Ka</option>
                      <option value="Kuga">Kuga</option>
                      <option value="Mondeo">Mondeo</option>
                      <option value="Explorer">Explorer</option>
                      <option value="Transit">Transit</option>
                      <option value="Mustang">Mustang</option>
                    </>
                  )}
                  {marca === "Honda" && (
                    <>
                      <option value="civic">Civic</option>
                      <option value="hrv">HR-V</option>
                      <option value="crv">CR-V</option>
                      <option value="accord">Accord</option>
                      <option value="fit">Fit</option>
                      <option value="city">City</option>
                      <option value="wr-v">WR-V</option>
                      <option value="br-v">BR-V</option>
                      <option value="pilot">Pilot</option>
                      <option value="odyssey">Odyssey</option>
                    </>
                  )}
                  {marca === "Hyundai" && (
                    <>
                      <option value="i10">i10</option>
                      <option value="i20">i20</option>
                      <option value="i30">i30</option>
                      <option value="tucson">Tucson</option>
                      <option value="creta">Creta</option>
                      <option value="kona">Kona</option>
                      <option value="santa-fe">Santa Fe</option>
                      <option value="elantra">Elantra</option>
                      <option value="ioniq">Ioniq</option>
                      <option value="accent">Accent</option>
                    </>
                  )}
                  {marca === "Kia" && (
                    <>
                      <option value="picanto">Picanto</option>
                      <option value="rio">Rio</option>
                      <option value="cerato">Cerato</option>
                      <option value="sportage">Sportage</option>
                      <option value="seltos">Seltos</option>
                      <option value="sorento">Sorento</option>
                      <option value="carnival">Carnival</option>
                      <option value="ceed">Ceed</option>
                      <option value="stinger">Stinger</option>
                      <option value="telluride">Telluride</option>
                    </>
                  )}
                  {marca === "Mercedes-Benz" && (
                    <>
                      <option value="clase-a">Clase A</option>
                      <option value="clase-c">Clase C</option>
                      <option value="clase-e">Clase E</option>
                      <option value="clase-s">Clase S</option>
                      <option value="glc">GLC</option>
                      <option value="gle">GLE</option>
                      <option value="gla">GLA</option>
                      <option value="gls">GLS</option>
                      <option value="cla">CLA</option>
                      <option value="clase-g">Clase G</option>
                    </>
                  )}
                  {marca === "Nissan" && (
                    <>
                      <option value="march">March</option>
                      <option value="versa">Versa</option>
                      <option value="sentra">Sentra</option>
                      <option value="kicks">Kicks</option>
                      <option value="note">Note</option>
                      <option value="x-trail">X-Trail</option>
                      <option value="frontier">Frontier</option>
                      <option value="murano">Murano</option>
                      <option value="pathfinder">Pathfinder</option>
                      <option value="leaf">Leaf</option>
                    </>
                  )}
                  {marca === "Peugeot" && (
                    <>
                      <option value="208">208</option>
                      <option value="2008">2008</option>
                      <option value="308">308</option>
                      <option value="408">408</option>
                      <option value="3008">3008</option>
                      <option value="508">508</option>
                      <option value="5008">5008</option>
                      <option value="Partner">Partner</option>
                      <option value="Expert">Expert</option>
                      <option value="Boxer">Boxer</option>
                    </>
                  )}
                  {marca === "Renault" && (
                    <>
                      <option value="clio">Clio</option>
                      <option value="logan">Logan</option>
                      <option value="sandero">Sandero</option>
                      <option value="megane">Megane</option>
                      <option value="fluence">Fluence</option>
                      <option value="captur">Captur</option>
                      <option value="duster">Duster</option>
                      <option value="koleos">Koleos</option>
                      <option value="symbol">Symbol</option>
                      <option value="kangoo">Kangoo</option>
                    </>
                  )}
                  {marca === "Toyota" && (
                    <>
                      <option value="corolla">Corolla</option>
                      <option value="hilux">Hilux</option>
                      <option value="etios">Etios</option>
                      <option value="rav4">RAV4</option>
                      <option value="yaris">Yaris</option>
                      <option value="camry">Camry</option>
                      <option value="sw4">SW4</option>
                      <option value="prius">Prius</option>
                      <option value="land-cruiser">Land Cruiser</option>
                      <option value="c-hr">Toyota C-HR</option>
                    </>
                  )}
                  {marca === "Volkswagen" && (
                    <>
                      <option value="gol">Gol</option>
                      <option value="voyage">Voyage</option>
                      <option value="golf">Golf</option>
                      <option value="vento">Vento</option>
                      <option value="polo">Polo</option>
                      <option value="saveiro">Saveiro</option>
                      <option value="amarok">Amarok</option>
                      <option value="tiguan">Tiguan</option>
                      <option value="up">Up!</option>
                      <option value="beetle">Beetle</option>
                    </>
                  )}
                </select>
              )}
            </div>
            <div>
              <label
                htmlFor="versionLabel"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white md:ml-1 ml-1"
              >
                Version
              </label>
              <select
                id="versionSelect"
                value={modelo}
                onChange={handleModeloChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {" "}
                {modelo === "Gol" && (
                  <>
                    <option value="marca2" selected>
                      Gol trend
                    </option>
                  </>
                )}
              </select>
            </div>
            <div>
              <label
                htmlFor="color"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white md:ml-1 ml-1"
              >
                Color
              </label>
              <select
                id="color"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option value="" disabled selected>
                  Seleccionar color
                </option>
                <option value="rojo">Rojo</option>
                <option value="azul">Azul</option>
                <option value="negro">Negro</option>
                <option value="blanco">Blanco</option>
                <option value="gris">Gris</option>
                <option value="plateado">Plateado</option>
                <option value="verde">Verde</option>
                <option value="amarillo">Amarillo</option>
                <option value="naranja">Naranja</option>
                <option value="marron">Marrón</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="telefono"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white md:ml-1 ml-1"
              >
                Codigo postal del vehiculo
              </label>
              <input
                type="tel"
                id="telefono"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="1879"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VehiculoUsadoForm;
