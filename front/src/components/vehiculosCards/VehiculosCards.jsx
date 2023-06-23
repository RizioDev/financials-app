import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getVehiculos } from "../../store/actions/vehiculosActions";
import Footer from "../Footer/Footer";

const VehiculosCards = ({ vehiculos, getVehiculos }) => {
  useEffect(() => {
    getVehiculos();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {vehiculos.map((vehiculo) => {
        return (
          <div key={vehiculo.id} className="bg-white p-4 shadow-md">
            <p>{vehiculo.marca}</p>
            <p>{vehiculo.modelo}</p>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    vehiculos: state.vehiculos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getVehiculos: () => dispatch(getVehiculos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VehiculosCards);
