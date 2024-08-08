import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Footer from "../Components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Header from "../Components/Header";
import { UserContext } from "../Context/user-context";

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
  };

  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return navigate("/");
  }

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
                  defaultValue={currentUser.firtName}
                  {...register("firstName", { required: true })}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs italic">
                    Por favor ingrese su nombre.
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="name"
                >
                  Apellido
                </label>
                <input
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  id="lastName"
                  type="text"
                  defaultValue={currentUser.lastName}
                  {...register("lastName", { required: true })}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs italic">
                    Por favor ingrese su apellido.
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
                  defaultValue={currentUser.userName}
                  readOnly
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
                  defaultValue={currentUser.cedula}
                  {...register("cedula", { required: true })}
                />
                {errors.cedula && (
                  <p className="text-red-500 text-xs italic">
                    Por favor ingrese su cédula.
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
