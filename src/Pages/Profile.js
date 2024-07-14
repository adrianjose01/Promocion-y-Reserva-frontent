import React from "react";
import { useForm } from "react-hook-form";
import andrew from "../Images/andrew.jpg";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Header from "../Components/Header";

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-center text-sky-900 mb-8">
            Mi Perfil
          </h1>
          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                className="w-48 h-48 rounded-full object-cover"
                src={andrew}
                alt="Profile"
              />
              <div className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-1 flex items-center justify-center w-8 h-8">
                <FontAwesomeIcon icon={faPen} />
              </div>
            </div>
            <h2 className="text-2xl font-bold mt-4">Juan M. Pérez</h2>
            <p className="text-gray-600">@juanmperez</p>
            <form
              className="mt-8 w-full max-w-md "
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="name"
                >
                  Nombre
                </label>
                <input
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  id="name"
                  type="text"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs italic">
                    Por favor ingrese su nombre.
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2 "
                  htmlFor="email"
                >
                  Correo electrónico
                </label>
                <input
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  id="email"
                  type="email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs italic">
                    Por favor ingrese su correo electrónico.
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="cedula"
                >
                  Cédula
                </label>
                <input
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.cedula ? "border-red-500" : ""
                  }`}
                  id="cedula"
                  type="text"
                  {...register("cedula", { required: true })}
                />
                {errors.cedula && (
                  <p className="text-red-500 text-xs italic">
                    Por favor ingrese su cédula.
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="password"
                >
                  Contraseña
                </label>
                <input
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
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
                <Link
                  to="/reestablecer-contraseña"
                  className="w-80 py-1 mb-3 text-sky-900 font-bold border-2 border-sky-900 rounded-md flex items-center justify-center"
                >
                  Restablecer contraseña
                </Link>
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

export default Profile;
