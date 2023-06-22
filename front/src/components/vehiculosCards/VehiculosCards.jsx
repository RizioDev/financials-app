import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getVehiculos } from "../../store/actions/vehiculosActions";

const VehiculosCards = ({ vehiculos, getVehiculos }) => {
  useEffect(() => {
    getVehiculos();
  }, []);

  return (
    <div>
      {vehiculos.map((vehiculo) => {
        return (
          <div key={vehiculo.id}>
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
