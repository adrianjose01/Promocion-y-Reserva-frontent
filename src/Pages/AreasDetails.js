import React, { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import PrimaryButton from "../UI/PrimaryButton";
import { UserContext } from "../Context/user-context";

const AreasDetails = () => {
  const { id } = useParams();
  const [area, setArea] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Requested ID:", id); // Verifica el ID
    const fetchAreaDetails = async () => {
      try {
        const response = await axios.get(
          `https://ecoacceso-hegfbdf3cketbhfc.eastus-01.azurewebsites.net/api/ProtectedArea/`
        );
        console.log("API Response:", response.data); // Verifica la respuesta de la API
        const protectedArea = response.data.find(
          (ar) => ar.id.toString() === id.toString()
        );
        setArea(protectedArea);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching area details:", error);
        setError("No se pudo cargar la información del área.");
      }
    };

    fetchAreaDetails();
  }, [id]);

  if (!currentUser) {
    return navigate("/");
  }

  if (error) {
    return <div>{error}</div>; // Muestra mensaje de error
  }

  if (isLoading) {
    return <div>Loading...</div>; // Mensaje de carga
  }

  return (
    <div className="h-dvh flex flex-col">
      <Header />
      <div className="m-10">
        <h1 className="my-4 font-bold text-xl">{area.name}</h1>
        <img className="w-80 rounded-lg" alt="Protected Area" src={area.url} />
        <h1 className="my-4 max-w-[800px]">{area.description}</h1>
        <h1 className="mt-4 font-bold">Ubicación:</h1>
        <h1 className="mb-4">{area.location}</h1>
        <Link to={`/solicitud-formulario/${area.id}`}>
          <PrimaryButton>Solicitar</PrimaryButton>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default AreasDetails;
