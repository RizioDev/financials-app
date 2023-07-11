import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import VehiculosCards from "./components/vehiculosCards/VehiculosCards";
import Financia from "./components/Financia/Financia";
import NavBar from "./components/NavBar/NavBar"; // Importa el componente NavBar
import Admin from "./components/AdminDashboard/Admin";
import AddProduct from "./components/AdminDashboard/AddProduct";
import Error from "./components/Error/Error";
import Comprar from "./components/Comprar/Comprar";
import UpdateProduct from "./components/AdminDashboard/UpdateProduct";
import Detail from "./components/Detail/Detail";
import Bot from "./components/ChatBot/Bot";

function App() {
  return (
    <div className="">
      <Router>
        <NavBar /> {/* Agrega la barra de navegación */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/catalogo" element={<VehiculosCards />} />
          <Route path="/financia-tu-vehiculo" element={<Financia />} />
          <Route path="/admin-dashboard" element={<Admin />} />
          <Route path="/admin-add" element={<AddProduct />} />
          <Route path="/admin-edit/:id" element={<UpdateProduct />} />
          <Route path="/comprar" element={<Comprar />} />
          <Route exact path="/detail/:id" element={<Detail />} />
          <Route path="/bot" element={<Bot />} />
          <Route path="*" element={<Error />} />

          {/* Agrega tus rutas adicionales aquí */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
