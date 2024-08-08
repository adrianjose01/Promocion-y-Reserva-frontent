import React, { useContext, useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../Context/user-context";

const RequestForm = () => {
  const { areaId } = useParams();
  const { currentUser } = useContext(UserContext);
  const [area, setArea] = useState(null);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    try {
      const fetchAreaDetails = async () => {
        try {
          const response = await axios.get(
            `https://ecoacceso-hegfbdf3cketbhfc.eastus-01.azurewebsites.net/api/ProtectedArea/`
          );
          console.log("API Response:", response.data); // Verifica la respuesta de la API
          const protectedArea = response.data.find(
            (ar) => ar.id.toString() === areaId.toString()
          );
          setArea(protectedArea);
        } catch (error) {
          console.error("Error fetching area details:", error);
          setError("No se pudo cargar la información del área.");
        }
      };

      fetchAreaDetails();
    } catch (err) {}
  }, [areaId]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md drop-shadow-2xl mb-10">
          <h2 className="text-3xl font-bold mb-8 text-center text-sky-800">
            Formulario de Solicitud
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex mb-6">
              <div className="w-1/2 mr-4">
                <label
                  className="block text-sky-800 text-sm font-bold mb-2"
                  htmlFor="nombre"
                >
                  Nombre
                </label>
                <input
                  {...register("nombre", { required: true })}
                  id="nombre"
                  className="w-full px-4 py-3 border rounded-md"
                  type="text"
                  value={currentUser.firtName}
                  readOnly
                />
                {errors.nombre && (
                  <p className="text-red-500 text-sm">
                    Este campo es obligatorio
                  </p>
                )}
              </div>
              <div className="w-1/2 ml-4">
                <label
                  className="block text-sky-800 text-sm font-bold mb-2"
                  htmlFor="apellido"
                >
                  Apellido
                </label>
                <input
                  {...register("apellido", { required: true })}
                  id="apellido"
                  className="w-full px-4 py-3 border rounded-md"
                  type="text"
                  value={currentUser.lastName}
                  readOnly
                />
                {errors.apellido && (
                  <p className="text-red-500 text-sm">
                    Este campo es obligatorio
                  </p>
                )}
              </div>
            </div>
            <div className="mb-6">
              <label
                className="block text-sky-800 text-sm font-bold mb-2"
                htmlFor="correo"
              >
                Correo
              </label>
              <input
                {...register("correo", { required: true })}
                id="correo"
                className="w-full px-4 py-3 border rounded-md"
                type="email"
                value={currentUser.email}
                readOnly
              />
              {errors.correo && (
                <p className="text-red-500 text-sm">
                  Este campo es obligatorio
                </p>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-sky-800 text-sm font-bold mb-2"
                htmlFor="cedula"
              >
                Cédula
              </label>
              <input
                {...register("cedula", { required: true })}
                id="cedula"
                className="w-full px-4 py-3 border rounded-md"
                type="text"
                value={currentUser.firtName}
                readOnly
              />
              {errors.cedula && (
                <p className="text-red-500 text-sm">
                  Este campo es obligatorio
                </p>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-sky-800 text-sm font-bold mb-2"
                htmlFor="telefono"
              >
                Teléfono
              </label>
              <input
                {...register("telefono", { required: true })}
                id="telefono"
                className="w-full px-4 py-3 border rounded-md"
                type="text"
                value={currentUser.userName}
                readOnly
              />
              {errors.telefono && (
                <p className="text-red-500 text-sm">
                  Este campo es obligatorio
                </p>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-sky-800 text-sm font-bold mb-2"
                htmlFor="fechaReserva"
              >
                Fecha de Reserva
              </label>
              <input
                {...register("fechaReserva", { required: true })}
                id="fechaReserva"
                className="w-full px-4 py-3 border rounded-md"
                type="date"
              />
              {errors.fechaReserva && (
                <p className="text-red-500 text-sm">
                  Este campo es obligatorio
                </p>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-sky-800 text-sm font-bold mb-2"
                htmlFor="numPersonas"
              >
                Número de Personas
              </label>
              <input
                {...register("numPersonas", { required: true })}
                id="numPersonas"
                className="w-full px-4 py-3 border rounded-md"
                type="number"
              />
              {errors.numPersonas && (
                <p className="text-red-500 text-sm">
                  Este campo es obligatorio
                </p>
              )}
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-sky-900 text-white px-6 py-3 rounded-md"
              >
                Enviar Solicitud
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RequestForm;
