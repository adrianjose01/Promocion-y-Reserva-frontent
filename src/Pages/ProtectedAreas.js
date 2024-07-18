import React from "react";
import AreaCard from "../Components/AreaCard";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const areas = [
  {
    id: "1",
    name: "Parque Nacional Los Haitises",
    description:
      "Descubre el fascinante Parque Nacional Los Haitises, con sus imponentes mogotes y manglares exuberantes. Explora cuevas adornadas con petroglifos y disfruta de avistamientos de aves exóticas.",
    imgUrl: "https://www.mochiadictos.com/wp-content/uploads/MG_6227.jpg",
  },
  {
    id: "2",
    name: "Parque Nacional del Este",
    description:
      "Adéntrate en el Parque Nacional del Este, un paraíso tropical con playas de arena blanca, arrecifes de coral y una rica biodiversidad marina. Ideal para el snorkeling y el buceo.",
    imgUrl:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/65/c6.jpg",
  },
  {
    id: "3",
    name: "Parque Nacional Jaragua",
    description:
      "Explora el Parque Nacional Jaragua, hogar de lagunas saladas, dunas costeras y una impresionante variedad de vida silvestre. Perfecto para los amantes de la naturaleza y la fotografía.",
    imgUrl:
      "https://ambiente.gob.do/app/uploads/2016/10/parque_nacional_jaragua.jpg",
  },
  {
    id: "4",
    name: "Parque Nacional Sierra de Bahoruco",
    description:
      "Sumérgete en la belleza del Parque Nacional Sierra de Bahoruco, un área protegida que ofrece paisajes montañosos, senderos de trekking y una rica flora y fauna endémica.",
    imgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/10/82/03/7e/sierra-de-bahoruco-national.jpg",
  },
  {
    id: "5",
    name: "Parque Nacional Valle Nuevo",
    description:
      "Disfruta del Parque Nacional Valle Nuevo, conocido por sus altas elevaciones y clima fresco. Aquí puedes observar paisajes alpinos y una diversidad de plantas y animales únicos.",
    imgUrl:
      "https://resources.diariolibre.com/images/2024/03/21/valle-nuevo-y-la-piramide-deleite-para-los-sentidos-focus-0-0-1228-688.jpg",
  },
  {
    id: "6",
    name: "Parque Nacional Isla Cabritos",
    description:
      "Explora la biodiversidad del Parque Nacional Isla Cabritos, ubicado en el Lago Enriquillo. Observa flamencos, iguanas y la espectacular flora que caracteriza esta área protegida.",
    imgUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXuDdZbBya23tj1msYMPB7rx3fHuzrQ5lxD2eEFut3MNtbwwybjErlh5RP5Yq4qhuCoPSl6qMYYlJAd0ucBNWsV9Yvb9ALiaG2P4WtHu8zoOr1Mbej9hrADwiVZVHWbF3qml1dJHcdU7MA6_huwP1Xl0eosNbQs7x_86-l9_YWmDJLX8t_M8f_eK8o0TWt/w640-h468/IMG_7251.jpg",
  },
  {
    id: "7",
    name: "Parque Nacional Monte Cristi",
    description:
      "Sumérgete en el Parque Nacional Monte Cristi, conocido por sus espectaculares paisajes costeros, manglares y formaciones rocosas únicas. Un destino perfecto para el ecoturismo.",
    imgUrl:
      "https://www.globalnationalparks.com/es/wp-content/uploads/monte-cristi-parque-nacional.jpg",
  },
];

const ProtectedAreas = () => {
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
