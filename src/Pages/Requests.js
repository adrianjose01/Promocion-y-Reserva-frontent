// src/Requests.js
import React from "react";
import RequestCard from "../Components/RequestCard";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import PuntaCanaPhoto from '../Images/puntacana.jpg';
import ParqueEste from '../Images/parqueeste.jpg';
import IslaCabritos from "../Images/isla-cabritos.jpg";
import SierraBahoruco from "../Images/sierra-bahoruco.jpg";
import ValleNuevo from "../Images/valle-nuevo.jpg";


const requests = [
  {
    title: 'Parque Ecologico Ojos Indigenas - Punta Cana',
    date: '23/Nov/2023',
    status: 'ABIERTA',
    image: PuntaCanaPhoto,
  },
  {
    title: 'Parque Nacional Isla Cabritos - Lago Enriquillo',
    date: '05/Dic/2023',
    status: 'CERRADA',
    image: IslaCabritos,
  },
  {
    title: 'Parque Nacional del Este - Punta Cana',
    date: '12/Ene/2024',
    status: 'ABIERTA',
    image: ParqueEste,
  },
  {
    title: 'Parque Nacional Sierra de Bahoruco - Barahona',
    date: '15/Mar/2024',
    status: 'ABIERTA',
    image: SierraBahoruco,
  },
  {
    title: 'Parque Nacional Valle Nuevo',
    date: '20/May/2024',
    status: 'CERRADA',
    image: ValleNuevo,
  },
];


const Requests = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex flex-col justify-center items-center my-10">
        <header className="text-center mb-8">
          <h1 className="text-3xl text-sky-800 font-bold mb-10">
            Mis Solicitudes
          </h1>
        </header>
        <div>
          {requests.map((request, index) => (
            <RequestCard
              key={index}
              title={request.title}
              date={request.date}
              status={request.status}
              image={request.image}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Requests;
