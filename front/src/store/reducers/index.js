import { GET_VEHICULOS } from "../actions/vehiculosActions";

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
    default:
      return state;
  }
}
