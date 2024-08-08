import React, { useState } from "react";
import { useForm } from "react-hook-form";
import imagenRegistro from "../Images/wallpaper.png";
import logo from "../Images/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import Footer from "../Components/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "../UI/Modal";
import PrimaryButton from "../UI/PrimaryButton";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = async (data) => {
    try {
      const newObj = {
        ...data,
        email: data.userName,
        rolId: "Client",
        isActive: true,
        photo:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      };

      const response = await axios.post(
        "https://ecoacceso-hegfbdf3cketbhfc.eastus-01.azurewebsites.net/api/Account/register",
        newObj,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      alert("Su cuenta ha sido creada correctamente!");
      navigate("/iniciar-sesion");
    } catch (err) {
      console.log(err);
      alert("Algo salió mal. Inténtelo de nuevo.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <h1 className="text-xl font-bold text-sky-900">
          Esta funcion no esta disponible!
        </h1>
        <PrimaryButton onClick={() => setIsOpen(false)}>Cerrar</PrimaryButton>
      </Modal>
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
            Crea tu cuenta gratis
          </h2>

          <div className="mb-4  ">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="w-48 py-1 mb-3 text-sky-900 font-bold border-2 border-sky-900 rounded-md "
            >
              <FontAwesomeIcon icon={faFacebookF} className="mr-2" />
              Facebook
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="w-48 py-1 md:ml-2 text-sky-900 font-bold border-2 border-sky-900 rounded-md "
            >
              <FontAwesomeIcon icon={faGoogle} className="mr-2" />
              Google
            </button>
          </div>

          <p className="mb-4">Crea una cuenta con tu correo electrónico</p>

          <div className="mb-2">
            <input
              type="text"
              {...register("firstName", { required: true })}
              className="w-80 p-2 bg-gray-200 rounded-lg mt-2"
              placeholder="Nombre"
            />
            {errors.nombre && (
              <span className="text-red-500">Este campo es obligatorio</span>
            )}
          </div>

          <div className="mb-2">
            <input
              type="text"
              {...register("lastName", { required: true })}
              className="w-80 p-2 bg-gray-200 rounded-lg mt-2"
              placeholder="Apellido"
            />
            {errors.nombre && (
              <span className="text-red-500">Este campo es obligatorio</span>
            )}
          </div>

          <div className="mb-2">
            <input
              type="email"
              {...register("userName", { required: true })}
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
              {...register("password", {
                required: true,
                pattern: { value: /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/ },
              })}
              className="w-80 p-2 bg-gray-200 border rounded-lg mt-2 pr-10"
              placeholder="Contraseña"
            />
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              className="hidden md:inline relative right-8 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
            {errors.password && (
              <span className="text-red-500">
                Este campo debe contener al menos 1 caracter númerico, 1
                mayúscula y 1 caracter no alfanúmerico.{" "}
              </span>
            )}
          </div>

          <div className="mb-2 relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("confirmPassword", { required: true })}
              className="w-80 p-2 bg-gray-200 border rounded-lg mt-2 pr-10"
              placeholder="Confirmar Contraseña"
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

          <div className="mb-1">
            <input
              type="text"
              {...register("cedula", { required: true })}
              className="w-80 p-2 bg-gray-200 border rounded-lg mt-2"
              placeholder="Cédula"
            />
            {errors.cedula && (
              <span className="text-red-500">Este campo es obligatorio</span>
            )}
          </div>

          <div className="mb-1">
            <input
              type="text"
              {...register("phone", { required: true })}
              className="w-80 p-2 bg-gray-200 border rounded-lg mt-2"
              placeholder="Teléfono"
            />
            {errors.cedula && (
              <span className="text-red-500">Este campo es obligatorio</span>
            )}
          </div>

          <p className="mb-6">
            Si ya tienes una cuenta,{" "}
            <Link to="/iniciar-sesion" className="text-blue-500">
              inicia sesión aquí.
            </Link>
          </p>

          <div className="text-center mt-6">
            <button
              type="submit"
              className="w-80 py-2 bg-sky-900 text-white font-bold rounded-lg drop-shadow-2xl"
            >
              Registrarme
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default RegisterForm;
