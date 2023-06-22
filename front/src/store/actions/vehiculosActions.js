import axios from "axios";
export const GET_VEHICULOS = "GET_VEHICULOS";

export function getVehiculos() {
  return async function (dispatch) {
    const response = await axios
      .get("http://localhost:3001/vehiculos")
      .then((res) => dispatch({ type: GET_VEHICULOS, payload: res.data }));
  };
}
