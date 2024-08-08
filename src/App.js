import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import RegisterForm from "./Pages/RegisterForm";
import LoginForm from "./Pages/LoginForm";
import Profile from "./Pages/Profile";
import ResetPassword from "./Pages/ResetPassword";
import Requests from "./Pages/Requests";
import AboutUs from "./Pages/AboutUs";
import ProtectedAreas from "./Pages/ProtectedAreas";
import AreasDetails from "./Pages/AreasDetails";
import RequestForm from "./Pages/RequestForm";
import NewsList from "./Pages/NewsList";
import RequestEdit from "./Pages/RequestEdit";

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
      <Route path="/noticias" element={<NewsList />} />
      <Route path="/lugares-turisticos" element={<ProtectedAreas />} />
      <Route path="/lugares-turisticos/:id" element={<AreasDetails />} />
      <Route path="/solicitud-formulario/:areaId" element={<RequestForm />} />
      <Route path="/solicitud-formulario" element={<RequestForm />} />
      <Route path="/editar-solicitud/:id" element={<RequestEdit />} />
    </Routes>
  );
}

export default App;
