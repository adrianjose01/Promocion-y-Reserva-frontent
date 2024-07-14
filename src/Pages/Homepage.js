import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import background from "../Images/background-homepage.png";
import imageExperience from "../Images/image-homepage.png";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Header />
      <div
        className="flex h-[80vh] w-full bg-no-repeat bg-cover items-center justify-center flex-col gap-4 px-3"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1 className="text-white font-black text-3xl md:text-7xl text-center">
          Conoce Los Mejores Lugares Turisticos de Republica Dominicana
        </h1>
        <Link
          to="/registrarse"
          className="py-2 px-4 bg-sky-900 text-white rounded-lg"
        >
          Empieza ya
        </Link>
      </div>
      <section className="my-20">
        <p className="text-sky-900 font-black text-2xl text-center">
          Pasos Para Solicitar Tu Permiso
        </p>
        <div className="px-3 flex flex-col md:flex-row justify-center gap-10 my-10">
          <article className="border border-sky-900 rounded-lg p-8 flex flex-col items-center gap-4">
            <p className="bg-sky-900 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
              1
            </p>
            <p className="text-2xl max-w-32 text-center">Crea una cuenta</p>
          </article>
          <article className="border border-sky-900 rounded-lg p-8 flex flex-col items-center gap-4">
            <p className="bg-sky-900 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
              2
            </p>
            <p className="text-2xl max-w-32 text-center">
              Selecciona tu lugar turistico
            </p>
          </article>
          <article className="border border-sky-900 rounded-lg p-8 flex flex-col items-center gap-4">
            <p className="bg-sky-900 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
              3
            </p>
            <p className="text-2xl max-w-32 text-center">
              Llena el formulario de solicitud
            </p>
          </article>
          <article className="border border-sky-900 rounded-lg p-8 flex flex-col items-center gap-4">
            <p className="bg-sky-900 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
              4
            </p>
            <p className="text-2xl max-w-32 text-center">Solicita el permiso</p>
          </article>
        </div>
      </section>
      <section className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-around my-20 px-3">
        <div>
          <img className="w-96" src={imageExperience} alt="Experience" />
        </div>
        <div className="flex flex-col items-center gap-5">
          <p className="text-sky-900 font-black text-2xl text-center">
            Vive La Experiencia!
          </p>
          <Link
            to="/registrarse"
            className="py-2 px-4 bg-sky-900 text-white rounded-lg"
          >
            Conoce Lugares
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Homepage;
