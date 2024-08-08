import React from "react";
import NewsArticle from "../Components/NewsArticle";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const newsData = [
  // Noticias de la República Dominicana
  {
    title: "RD lanza nueva política de reciclaje",
    summary:
      "El gobierno de la República Dominicana ha lanzado una nueva política de reciclaje para reducir los desechos y promover la sostenibilidad...",
    details:
      "El gobierno de la República Dominicana ha lanzado una nueva política de reciclaje para reducir los desechos y promover la sostenibilidad. Esta política incluye incentivos para empresas que adopten prácticas de reciclaje y programas educativos para concienciar a la población sobre la importancia del reciclaje.",
    image: "https://via.placeholder.com/150",
    link: "politica-reciclaje-rd",
    region: "República Dominicana",
    date: "14 de julio de 2024",
  },
  {
    title: "Conservación del Parque Nacional Los Haitises",
    summary:
      "Se han iniciado nuevos esfuerzos para la conservación del Parque Nacional Los Haitises, uno de los tesoros ecológicos de la RD...",
    details:
      "Se han iniciado nuevos esfuerzos para la conservación del Parque Nacional Los Haitises, uno de los tesoros ecológicos de la República Dominicana. Las autoridades están colaborando con organizaciones locales e internacionales para proteger la biodiversidad del parque.",
    image: "https://via.placeholder.com/150",
    link: "conservacion-los-haitises",
    region: "República Dominicana",
    date: "13 de julio de 2024",
  },
  {
    title: "Campaña de reforestación en la Sierra de Bahoruco",
    summary:
      "Organizaciones locales han lanzado una campaña de reforestación en la Sierra de Bahoruco para combatir la deforestación...",
    details:
      "Organizaciones locales han lanzado una campaña de reforestación en la Sierra de Bahoruco para combatir la deforestación. La campaña incluye la plantación de miles de árboles y la educación de las comunidades sobre la importancia de preservar los bosques.",
    image:
      "https://resources.diariolibre.com/images/2022/09/06/whatsapp-image-2022-09-02-at-34808-pm-b088dc4b-focus-0-0-1228-688.jpg",
    link: "reforestacion-bahoruco",
    region: "República Dominicana",
    date: "12 de julio de 2024",
  },

  // Noticias del Mundo
  {
    title: "Acuerdo global sobre el cambio climático",
    summary:
      "Líderes mundiales han firmado un nuevo acuerdo para reducir las emisiones de carbono y combatir el cambio climático...",
    details:
      "Líderes mundiales han firmado un nuevo acuerdo para reducir las emisiones de carbono y combatir el cambio climático. Este acuerdo incluye compromisos de reducción de emisiones y financiamiento para tecnologías limpias.",
    image: "https://via.placeholder.com/150",
    link: "acuerdo-cambio-climatico",
    region: "Mundo",
    date: "11 de julio de 2024",
  },
  {
    title: "Iniciativa de conservación de los océanos",
    summary:
      "Una nueva iniciativa global busca proteger los océanos del mundo mediante la creación de áreas marinas protegidas...",
    details:
      "Una nueva iniciativa global busca proteger los océanos del mundo mediante la creación de áreas marinas protegidas. La iniciativa también incluye esfuerzos para reducir la contaminación plástica y la sobrepesca.",
    image: "https://via.placeholder.com/150",
    link: "conservacion-oceanos",
    region: "Mundo",
    date: "10 de julio de 2024",
  },
  {
    title: "Aumento en el uso de energías renovables",
    summary:
      "El uso de energías renovables está aumentando a nivel mundial, con más países invirtiendo en solar y eólica...",
    details:
      "El uso de energías renovables está aumentando a nivel mundial, con más países invirtiendo en energía solar y eólica. Esta tendencia está impulsada por la necesidad de reducir las emisiones de carbono y la dependencia de los combustibles fósiles.",
    image: "https://via.placeholder.com/150",
    link: "energias-renovables-mundo",
    region: "Mundo",
    date: "9 de julio de 2024",
  },
];

const NewsList = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6 text-center text-sky-900">
          Noticias Ambientales
        </h1>
        <h2 className="text-3xl font-semibold mb-4 text-center">
          República Dominicana
        </h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {newsData
            .filter((news) => news.region === "República Dominicana")
            .map((news, index) => (
              <NewsArticle key={index} news={news} />
            ))}
        </div>
        <h2 className="text-3xl font-semibold mb-4 text-center">Globales</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {newsData
            .filter((news) => news.region === "Mundo")
            .map((news, index) => (
              <NewsArticle key={index} news={news} />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsList;
