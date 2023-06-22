import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // Importa el Provider de react-redux
import "./index.css";
import store from "./store";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      {/* Envuelve tu aplicación con el Provider y pasa el store */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
