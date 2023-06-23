import { GET_VEHICULOS, UPDATE_VEHICULO } from "../actions/vehiculosActions";

const initialState = {
  vehiculos: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_VEHICULOS:
      return {
        ...state,
        vehiculos: action.payload,
      };
    case UPDATE_VEHICULO:
      // Puedes realizar alguna acción adicional aquí si es necesario al actualizar un vehículo
      console.log("Vehículo actualizado:", action.payload);
      return state;
    default:
      return state;
  }
}
