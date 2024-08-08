import React, { useEffect, useState } from "react";
import axios from "axios";
import AreaCard from "../Components/AreaCard";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const ProtectedAreas = () => {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await axios.get("https://ecoacceso-hegfbdf3cketbhfc.eastus-01.azurewebsites.net/api/ProtectedArea");
        setAreas(response.data);
      } catch (error) {
        console.error("Error fetching protected areas:", error);
      }
    };

    fetchAreas();
  }, []);

  return (
    <>
      <Header />
      <section id="areas" className="mb-16 mx-10 mt-5">
        <h2 className="text-3xl font-semibold text-sky-900 mb-8 text-center">
          Lugares Turísticos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <AreaCard key={index} area={area} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProtectedAreas;
