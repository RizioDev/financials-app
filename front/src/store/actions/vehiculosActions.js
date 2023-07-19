import axios from "axios";

export const GET_VEHICULOS = "GET_VEHICULOS";
export const UPDATE_VEHICULO = "UPDATE_VEHICULO";
export const ADD_VEHICULO = "ADD_VEHICULO";
export const GET_USADOS = "GET_USADOS";
export const GET_VEHICULOS0KM = "GET_VEHICULOS0KM";

export function getVehiculos() {
  return async function (dispatch) {
    const response = await axios
      .get("http://localhost:3001/vehiculos")
      .then((res) => dispatch({ type: GET_VEHICULOS, payload: res.data }));
  };
}

export function getVehiculos0km() {
  return async function (dispatch) {
    const response = await axios
      .get("http://localhost:3001/vehiculos/0km")
      .then((res) => dispatch({ type: GET_VEHICULOS0KM, payload: res.data }));
  };
}

export function getUsados() {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/vehiculos/usados");
      console.log('hola',response.data); // Verifica si los datos de los vehículos usados están llegando correctamente
      dispatch({ type: GET_USADOS, payload: response.data });
    } catch (error) {
      console.error(error);
    }
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

export function addVehiculo(vehiculo) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/vehiculos",
        vehiculo
      );
      // Si la respuesta es exitosa, puedes despachar una acción para actualizar el estado en Redux si es necesario
      // dispatch({ type: ADD_VEHICULO, payload: response.data });
      console.log(response.data); // Puedes mostrar el mensaje de respuesta en la consola o realizar cualquier otra acción necesaria
    } catch (error) {
      // Manejar el error si ocurre alguna excepción durante la solicitud
      console.error(error);
    }
  };
}
