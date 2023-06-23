import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LandingPage from "./components/LandingPage/LandingPage";
import VehiculosCards from "./components/vehiculosCards/VehiculosCards";
import Financia from "./components/Financia/Financia";
import NavBar from "./components/NavBar/NavBar"; // Importa el componente NavBar
import Consigna from "./components/Consigna/Consigna";
import Admin from "./components/AdminDashboard/Admin";
import AddProduct from "./components/AdminDashboard/AddProduct";

function App() {
  return (
    <Router>
      <NavBar /> {/* Agrega la barra de navegación */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/catalogo" element={<VehiculosCards />} />
        <Route path="/financia-tu-vehiculo" element={<Financia />} />
        <Route path="/consigna" element={<Consigna />} />
        <Route path="/admin-dashboard" element={<Admin />} />
        <Route path="/admin-add" element={<AddProduct />} />

        {/* Agrega tus rutas adicionales aquí */}
      </Routes>
    </Router>
  );
}

export default App;
