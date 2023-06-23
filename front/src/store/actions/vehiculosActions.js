import axios from "axios";

export const GET_VEHICULOS = "GET_VEHICULOS";
export const UPDATE_VEHICULO = "UPDATE_VEHICULO";

export function getVehiculos() {
  return async function (dispatch) {
    const response = await axios
      .get("http://localhost:3001/vehiculos")
      .then((res) => dispatch({ type: GET_VEHICULOS, payload: res.data }));
  };
}

export function updateVehiculo(id, updatedVehicle) {
  return async function (dispatch) {
    try {
      const response = await axios.put(
        `http://localhost:3001/vehiculos/${id}`,
        updatedVehicle
      );
      // Si la respuesta es exitosa, puedes despachar una acción para actualizar el estado en Redux si es necesario
      // dispatch({ type: UPDATE_VEHICULO, payload: response.data });
      console.log(response.data); // Puedes mostrar el mensaje de respuesta en la consola o realizar cualquier otra acción necesaria
    } catch (error) {
      // Manejar el error si ocurre alguna excepción durante la solicitud
      console.error(error);
    }
  };
}
