import React, { useContext, useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../Context/user-context";
import Modal from "../UI/Modal";
import PrimaryButton from "../UI/PrimaryButton";

const RequestForm = () => {
  const { areaId } = useParams();
  const [reservations, setReservations] = useState(null);
  const { currentUser } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modalText, setModalText] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const getReservation = async () => {
      const response = await axios.get(
        "https://ecoproject-aacab-default-rtdb.firebaseio.com/reservation.json"
      );
      console.log(response.data);
      setReservations(response.data);
    };
    getReservation();
  }, []);

  const onSubmit = async (data) => {
    try {
      const newOject = {
        userId: currentUser.id,
        protectedAreaID: areaId,
        reservationDate: new Date(data.fechaReserva).toISOString(),
        numberOfPeople: data.numPersonas,
        status: "ABIERTA",
      };

      const repeatedRequest = reservations.find(
        (r) =>
          r.userId.toString() === currentUser.id.toString() &&
          r.protectedAreaID.toString() === areaId.toString() &&
          r.status.toString() === "ABIERTA"
      );

      if (repeatedRequest) {
        setModalText("Existe una solicitud abierta para esa área.");
        setIsError(true);
        return setIsOpen(true);
      }

      await axios.put(
        "https://ecoproject-aacab-default-rtdb.firebaseio.com/reservation.json",
        [...reservations, newOject],
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setModalText("La solicitud se ha procesado correctamente.");
      setIsError(false);
      setIsOpen(true);
    } catch (err) {
      setModalText("Algo salió mal.");
      setIsError(true);
      setIsOpen(true);
    }
  };

  const goToRequests = () => {
    navigate("/solicitudes");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <h1 className="text-xl font-bold text-sky-900">{modalText}</h1>
        <PrimaryButton
          onClick={isError ? () => setIsOpen(false) : goToRequests}
        >
          Cerrar
        </PrimaryButton>
      </Modal>
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
                value={currentUser.cedula}
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
