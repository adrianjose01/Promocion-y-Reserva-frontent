import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import RegisterForm from "./Pages/RegisterForm";
import LoginForm from "./Pages/LoginForm";
import Profile from "./Pages/Profile";
import ResetPassword from "./Pages/ResetPassword";
import Requests from "./Pages/Requests";
import AboutUs from "./Pages/AboutUs";
import ProtectedAreas from "./Pages/ProtectedAreas";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/registrarse" element={<RegisterForm />} />
      <Route path="/iniciar-sesion" element={<LoginForm />} />
      <Route path="/perfil" element={<Profile />} />
      <Route path="/reestablecer-contraseña" element={<ResetPassword />} />
      <Route path="/solicitudes" element={<Requests />} />
      <Route path="/sobre-nosotros" element={<AboutUs />} />
      <Route path="/lugares-turisticos" element={<ProtectedAreas />} />
    </Routes>
  );
}

export default App;
