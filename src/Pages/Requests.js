// src/Requests.js
import React from "react";
import RequestCard from "../Components/RequestCard";
import requests from "../Data/requests"; // Importar desde la carpeta data
import Footer from "../Components/Footer";
import Header from "../Components/Header";

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
