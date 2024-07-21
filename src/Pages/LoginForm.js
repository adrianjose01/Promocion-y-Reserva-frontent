import React, { useState } from "react";
import { useForm } from "react-hook-form";
import imagenRegistro from "../Images/wallpaper.png";
import logo from "../Images/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col justify-center items-center my-10">
        <div className="absolute top-4 left-4">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-16 h-16" />
          </Link>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded-xl drop-shadow-2xl w-full max-w-2xl mt-12 md:mt-0"
        >
          <div className="mb-4">
            <img
              src={imagenRegistro}
              alt="Imagen de registro"
              className="w-full rounded-lg"
            />
          </div>

          <h2 className="text-3xl font-extrabold mb-5 text-sky-900">
            Inicia con tu cuenta
          </h2>

          <div className="mb-4  ">
            <button
              type="button"
              className="w-48 py-1 mb-3 text-sky-900 font-bold border-2 border-sky-900 rounded-md"
            >
              <FontAwesomeIcon icon={faFacebookF} className="mr-2" />
              Facebook
            </button>
            <button
              type="button"
              className="w-48 py-1 md:ml-2 text-sky-900 font-bold border-2 border-sky-900 rounded-md "
            >
              <FontAwesomeIcon icon={faGoogle} className="mr-2" />
              Google
            </button>
          </div>

          <div className="mb-2">
            <input
              type="email"
              {...register("correo", { required: true })}
              className="w-80 p-2 bg-gray-200 border rounded-lg mt-2"
              placeholder="Correo electrónico"
            />
            {errors.correo && (
              <span className="text-red-500">Este campo es obligatorio</span>
            )}
          </div>

          <div className="mb-2 relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("contrasena", { required: true })}
              className="w-80 p-2 bg-gray-200 border rounded-lg mt-2 pr-10" // pr-10 adds padding to the right for the icon
              placeholder="Contraseña"
            />
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              className="hidden md:inline relative right-8 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
            {errors.contrasena && (
              <span className="text-red-500">Este campo es obligatorio</span>
            )}
          </div>

          <p className="">
            No tienes una cuenta?{" "}
            <Link to="/registrarse" className="text-blue-500">
              Registrate aquí.
            </Link>
          </p>

          <p className="mb-6">
            Olvidaste tu contraseña?{" "}
            <Link to="/registrarse" className="text-blue-500">
              Haz click aquí.
            </Link>
          </p>

          <div className="text-center mt-6">
            <button
              type="submit"
              className="w-80 py-2 bg-sky-900 text-white font-bold rounded-lg drop-shadow-2xl"
            >
              iniciar sesion
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default RegisterForm;
