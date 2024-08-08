import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import logo from "../Images/logo.jpg";
import Footer from "../Components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../Context/user-context";
import axios from "axios";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { currentUser } = useContext(UserContext);

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const newOject = {
        email: currentUser.userName,
        token: currentUser.jwToken,
        password: data.password,
        confirmPassword: data.confirmPassword,
      };
      const response = await axios.post(
        "https://ecoacceso-hegfbdf3cketbhfc.eastus-01.azurewebsites.net/api/Account/reset-password",
        newOject,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      alert("Su contraseña fue actualizada correctamente.");
    } catch (err) {
      console.log(err);
      alert("Algo salió mal, intentelo de nuevo.");
    }
  };

  if (!currentUser) {
    return navigate("/");
  }

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="absolute top-4 left-4">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-16 h-16" />
          </Link>
        </div>
        <div className="flex-grow flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-center text-sky-900 mb-8">
            Mi Perfil
          </h1>
          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                className="w-48 h-48 rounded-full object-cover"
                src={currentUser.photo}
                alt="Profile"
              />
              <div className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-1 flex items-center justify-center w-8 h-8">
                <FontAwesomeIcon icon={faPen} />
              </div>
            </div>
            <h2 className="text-2xl font-bold mt-4">{`${currentUser.firtName} ${currentUser.lastName}`}</h2>
            <form
              className="mt-8 w-full max-w-md "
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="password"
                >
                  Contraseña antigua
                </label>
                <input
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 text-xl bg-gray-200 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  id="password"
                  type="password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs italic">
                    Por favor ingrese su contraseña.
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="confirmPassword"
                >
                  Contraseña nueva
                </label>
                <input
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 text-xl bg-gray-200 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  id="confirmPassword"
                  type="password"
                  {...register("confirmPassword", { required: true })}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs italic">
                    Por favor ingrese su contraseña.
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="password"
                >
                  Repetir contraseña
                </label>
                <input
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 text-xl bg-gray-200 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  id="password"
                  type="password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs italic">
                    Por favor ingrese su contraseña.
                  </p>
                )}
              </div>
              <div className="mb-4 flex items-center justify-between space-x-4">
                <button
                  className="w-80 py-1 mb-3 text-sky-900 font-bold border-2 border-sky-900 rounded-md"
                  type="button"
                >
                  Vaciar campos
                </button>
                <button
                  className="w-80 py-1 mb-3 bg-sky-900 text-white font-bold border-2 border-sky-900 rounded-md "
                  type="submit"
                >
                  Guardar cambios
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ResetPassword;
