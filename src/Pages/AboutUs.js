import Footer from "../Components/Footer";
import Header from "../Components/Header";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="mx-10 mt-10">
        <h1 className="font-bold mb-5 text-4xl text-sky-900">Sobre Nosotros</h1>
        <div className="flex flex-col gap-4 mb-10 max-w-[800px]">
          <p>
            Una aplicación web dedicada a la protección y el disfrute sostenible
            del medio ambiente en la República Dominicana. Nuestro objetivo es
            fomentar una conexión más estrecha entre la ciudadanía y las
            maravillas naturales de nuestro país, facilitando el acceso a
            información y permisos necesarios para visitar y realizar
            actividades en las áreas protegidas.
          </p>
          <p>
            Creemos que el primer paso hacia la conservación es la educación y
            la participación activa de la comunidad. Por ello, nuestra
            plataforma no solo se centra en la gestión de permisos, sino también
            en mantener a la población informada sobre las últimas noticias
            ambientales y la disponibilidad de nuestros valiosos espacios
            naturales.
          </p>
          <p>
            Trabajamos en estrecha colaboración con las autoridades ambientales
            para asegurar que nuestras áreas protegidas se gestionen de manera
            sostenible y responsable. Al facilitar la interacción entre los
            ciudadanos y las autoridades, aspiramos a promover prácticas
            respetuosas con el medio ambiente y a garantizar que las futuras
            generaciones puedan disfrutar de la riqueza natural de nuestro país.
          </p>
          <p>
            Nuestro compromiso es con la naturaleza y con la comunidad. Juntos,
            podemos hacer una diferencia significativa en la preservación de
            nuestros recursos naturales y en la promoción de un futuro más verde
            y saludable para la República Dominicana.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
