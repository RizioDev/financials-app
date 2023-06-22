import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LandingPage from "./components/LandingPage/LandingPage";
import VehiculosCards from "./components/vehiculosCards/VehiculosCards";
import NavBar from "./components/NavBar/NavBar"; // Importa el componente NavBar

function App() {
  return (
    <Router>
      <NavBar /> {/* Agrega la barra de navegación */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/catalogo" element={<VehiculosCards />} />
        {/* Agrega tus rutas adicionales aquí */}
      </Routes>
    </Router>
  );
}

export default App;
