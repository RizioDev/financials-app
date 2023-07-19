import { GET_VEHICULOS, UPDATE_VEHICULO, GET_USADOS, GET_VEHICULOS0KM } from "../actions/vehiculosActions";

const initialState = {
  vehiculos: [],
  vehiculos0km: [],
  usados: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_VEHICULOS:
      return {
        ...state,
        vehiculos: action.payload,
      };
      case GET_VEHICULOS0KM:
        return {
          ...state,
          vehiculos0km: action.payload,
        }
    case GET_USADOS:
      return {
        ...state,
        usados: action.payload,
      };
    case UPDATE_VEHICULO:
      // Puedes realizar alguna acción adicional aquí si es necesario al actualizar un vehículo
      console.log("Vehículo actualizado:", action.payload);
      return state;
    default:
      return state;
  }
}
