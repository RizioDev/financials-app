import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getVehiculos as fetchVehiculos } from "../../store/actions/vehiculosActions";
import { BsFillPencilFill, BsX, BsFillTrashFill } from "react-icons/bs";
import swal from "sweetalert2";
import { updateVehiculo } from "../../store/actions/vehiculosActions";

import UpdateProduct from "./UpdateProduct";

const Admin = ({ vehiculos, getVehiculos }) => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [showAddProduct, setShowAddProduct] = useState(false);

  const handleAddProductClick = () => {
    setShowAddProduct(true);
  };

  const handleEditClick = (vehiculo) => {
    setSelectedVehicle(vehiculo);
    setShowModal(true);
  };

  const handleDeleteClick = (vehiculo) => {
    swal
      .fire({
        title: "¿Estás seguro?",
        text: "Esta acción no se puede deshacer",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Borrar",
        cancelButtonText: "Cancelar",
      })
      .then((result) => {
        if (result.isConfirmed) {
          // Actualizar el vehículo con la disponibilidad "vendido"
          const updatedVehiculo = { ...vehiculo, disponibilidad: "vendido" };
          updateVehiculo(vehiculo.id, updatedVehiculo); // Llamar a updateVehiculo pasando el id y el vehículo actualizado

          // Actualizar la página
          window.location.reload();
        }
      });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    console.log(getVehiculos());
    getVehiculos();
  }, []);

  return (
    <div>
      {/* <!-- Start block --> */}
      <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
          {/* <!-- Start coding here --> */}
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-1/2">
                <form className="flex items-center">
                  <label for="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Search"
                      required=""
                    />
                  </div>
                </form>
              </div>
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <a href="/admin-add">
                  <button
                    type="button"
                    onClick={handleAddProductClick}
                    className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                  >
                    <svg
                      className="h-3.5 w-3.5 mr-2"
                      fill="currentColor"
                      viewbox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      />
                    </svg>
                    Agregar Vehiculo
                  </button>
                </a>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-4">
                      MODELO
                    </th>
                    <th scope="col" className="px-4 py-3">
                      MARCA
                    </th>
                    <th scope="col" className="px-4 py-3">
                      COMBUSTIBLE
                    </th>
                    <th scope="col" className="px-4 py-3">
                      KM
                    </th>
                    <th scope="col" className="px-4 py-3">
                      PRECIO
                    </th>
                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {vehiculos
                    .filter((vehiculo) => vehiculo.disponibilidad !== "vendido")
                    .map((vehiculo) => (
                      <>
                        <tr className="border-b dark:border-gray-700">
                          <th
                            scope="row"
                            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {vehiculo.modelo}
                          </th>
                          <td className="px-4 py-3">{vehiculo.marca}</td>
                          <td className="px-4 py-3">{vehiculo.combustible}</td>
                          <td className="px-4 py-3 max-w-[12rem] truncate">
                            {vehiculo.kilometraje}
                          </td>
                          <td className="px-4 py-3">${vehiculo.precio}</td>
                          <td className="px-4 py-3 flex items-center justify-end">
                            {/* <!-- Update product --> */}

                            <button
                              id="apple-imac-27-dropdown-button"
                              data-dropdown-toggle="apple-imac-27-dropdown"
                              className="inline-flex items-center text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 p-1.5 dark:hover-bg-gray-800 text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                              type="button"
                              onClick={() => handleEditClick(vehiculo)}
                            >
                              <BsFillPencilFill classNameName="w-5 h-5 text-gray-500 hover:text-gray-700 transition-colors duration-300" />
                            </button>
                            <button
                              type="button"
                              className="inline-flex items-center text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 p-1.5 dark:hover-bg-gray-800 text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                              onClick={() => handleDeleteClick(vehiculo)}
                            >
                              <BsFillTrashFill />
                            </button>
                            <div
                              id="apple-imac-27-dropdown"
                              className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                            >
                              <ul
                                className="py-1 text-sm"
                                aria-labelledby="apple-imac-27-dropdown-button"
                              >
                                <li>
                                  <button
                                    type="button"
                                    data-modal-target="updateProductModal"
                                    data-modal-toggle="updateProductModal"
                                    className="flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-700 dark:text-gray-200"
                                  >
                                    <svg
                                      className="w-4 h-4 mr-2"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewbox="0 0 20 20"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                      />
                                    </svg>
                                    Edit
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        {showModal && (
                          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <div className="absolute w-full h-full flex items-center justify-center">
                              <div className="relative bg-white rounded-lg max-w-md">
                                <button
                                  type="button"
                                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
                                  onClick={handleCloseModal}
                                >
                                  <BsX className="w-5 h-5" />
                                </button>
                                <UpdateProduct
                                  vehiculo={selectedVehicle}
                                  setShowUpdateForm={setShowModal}
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <div
        id="createProductModal"
        tabindex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      ></div>
      {/* <!-- Update modal --> */}
      <div
        id="updateProductModal"
        tabindex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Update Product
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="updateProductModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
          </div>
        </div>
      </div>
      {/* <!-- Read modal --> */}

      {/* <!-- Delete modal --> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  vehiculos: state.vehiculos, // Asegúrate de que esto coincida con tu estructura de datos en el estado
});

const mapDispatchToProps = (dispatch) => ({
  getVehiculos: () => dispatch(fetchVehiculos()),
  updateVehiculo: (id, updatedVehiculo) =>
    dispatch(updateVehiculo(id, updatedVehiculo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
