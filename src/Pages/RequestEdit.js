import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

// Suponiendo que este JSON es tu "base de datos" temporal
const mockRequestData = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Pérez",
    correo: "juan.perez@example.com",
    cedula: "001-1234567-8",
    telefono: "809-123-4567",
    fechaReserva: "2024-08-15",
    numPersonas: 4
  },
  {
    id: 2,
    nombre: "Juan",
    apellido: "Pérez",
    correo: "juan.perez@example.com",
    cedula: "001-1234567-8",
    telefono: "809-123-4567",
    fechaReserva: "2024-08-15",
    numPersonas: 4
  },
  {
    id: 3,
    nombre: "Juan",
    apellido: "Pérez",
    correo: "juan.perez@example.com",
    cedula: "001-1234567-8",
    telefono: "809-123-4567",
    fechaReserva: "2024-08-15",
    numPersonas: 4
  },
  {
    id: 4,
    nombre: "Juan",
    apellido: "Pérez",
    correo: "juan.perez@example.com",
    cedula: "001-1234567-8",
    telefono: "809-123-4567",
    fechaReserva: "2024-08-15",
    numPersonas: 4
  },
  {
    id: 5,
    nombre: "Juan",
    apellido: "Pérez",
    correo: "juan.perez@example.com",
    cedula: "001-1234567-8",
    telefono: "809-123-4567",
    fechaReserva: "2024-08-15",
    numPersonas: 4
  },

];

const RequestEdit = () => {
  const { id } = useParams();
  const [requestData, setRequestData] = useState(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  useEffect(() => {
    const request = mockRequestData.find(req => req.id === parseInt(id));
    if (request) {
      setRequestData(request);
      reset(request);
    }
  }, [id, reset]);

  const onSubmit = data => {
    console.log("Solicitud editada:", data);
  };

  if (!requestData) return <div>Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md drop-shadow-2xl mb-10">
          <h2 className="text-3xl font-bold mb-8 text-center text-sky-800">Editar Solicitud</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex mb-6">
              <div className="w-1/2 mr-4">
                <label className="block text-sky-800 text-sm font-bold mb-2" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  {...register("nombre", { required: true })}
                  id="nombre"
                  className="w-full px-4 py-3 border rounded-md"
                  type="text"
                />
                {errors.nombre && <p className="text-red-500 text-sm">Este campo es obligatorio</p>}
              </div>
              <div className="w-1/2 ml-4">
                <label className="block text-sky-800 text-sm font-bold mb-2" htmlFor="apellido">
                  Apellido
                </label>
                <input
                  {...register("apellido", { required: true })}
                  id="apellido"
                  className="w-full px-4 py-3 border rounded-md"
                  type="text"
                />
                {errors.apellido && <p className="text-red-500 text-sm">Este campo es obligatorio</p>}
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sky-800 text-sm font-bold mb-2" htmlFor="correo">
                Correo
              </label>
              <input
                {...register("correo", { required: true })}
                id="correo"
                className="w-full px-4 py-3 border rounded-md"
                type="email"
              />
              {errors.correo && <p className="text-red-500 text-sm">Este campo es obligatorio</p>}
            </div>
            <div className="mb-6">
              <label className="block text-sky-800 text-sm font-bold mb-2" htmlFor="cedula">
                Cédula
              </label>
              <input
                {...register("cedula", { required: true })}
                id="cedula"
                className="w-full px-4 py-3 border rounded-md"
                type="text"
              />
              {errors.cedula && <p className="text-red-500 text-sm">Este campo es obligatorio</p>}
            </div>
            <div className="mb-6">
              <label className="block text-sky-800 text-sm font-bold mb-2" htmlFor="telefono">
                Teléfono
              </label>
              <input
                {...register("telefono", { required: true })}
                id="telefono"
                className="w-full px-4 py-3 border rounded-md"
                type="text"
              />
              {errors.telefono && <p className="text-red-500 text-sm">Este campo es obligatorio</p>}
            </div>
            <div className="mb-6">
              <label className="block text-sky-800 text-sm font-bold mb-2" htmlFor="fechaReserva">
                Fecha de Reserva
              </label>
              <input
                {...register("fechaReserva", { required: true })}
                id="fechaReserva"
                className="w-full px-4 py-3 border rounded-md"
                type="date"
              />
              {errors.fechaReserva && <p className="text-red-500 text-sm">Este campo es obligatorio</p>}
            </div>
            <div className="mb-6">
              <label className="block text-sky-800 text-sm font-bold mb-2" htmlFor="numPersonas">
                Número de Personas
              </label>
              <input
                {...register("numPersonas", { required: true })}
                id="numPersonas"
                className="w-full px-4 py-3 border rounded-md"
                type="number"
              />
              {errors.numPersonas && <p className="text-red-500 text-sm">Este campo es obligatorio</p>}
            </div>
            <div className="flex justify-center">
              <button type="submit" className="bg-sky-900 text-white px-6 py-3 rounded-md">
                Guardar Cambios
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
