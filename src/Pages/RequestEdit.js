import React, { useContext, useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../Context/user-context";

const RequestEdit = () => {
  const { id } = useParams();
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [requestData, setRequestData] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const getRequestData = async () => {
      const requests = (
        await axios.get(
          "https://ecoproject-aacab-default-rtdb.firebaseio.com/reservation.json"
        )
      ).data;
      const request = requests.find(
        (req) => (req.userId + req.protectedAreaID).toString() === id.toString()
      );
      if (request) {
        setRequestData(request);
        reset(request);
      }
    };
    getRequestData();
  }, [id, reset]);

  const onSubmit = (data) => {
    console.log("Solicitud editada:", data);
  };

  if (!currentUser) {
    return navigate("/");
  }

  if (!requestData) return <div>Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md drop-shadow-2xl mb-10">
          <h2 className="text-3xl font-bold mb-8 text-center text-sky-800">
            Detalles de Solicitud
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
                  value={requestData.firstName}
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
                  value={requestData.lastName}
                  readOnly
                />
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
                value={requestData.email}
                readOnly
              />
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
                value={requestData.cedula}
                readOnly
              />
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
                type="text"
                value={requestData.reservationDate.toString().slice(0, 10)}
                readOnly
              />
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
                value={requestData.numberOfPeople}
                readOnly
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => navigate(-2)}
                className="bg-sky-900 text-white px-6 py-3 rounded-md"
              >
                Atrás
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RequestEdit;
