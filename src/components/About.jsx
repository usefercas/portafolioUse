import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="flex flex-col items-center h-screen w-screen bg-black"
    >
      {/* Título "Acerca de" con el color azul #48D1CC */}
      <h2 className="font-semibold text-[40px]" style={{ color: "#48D1CC" }}>
        Acerca de
      </h2>

      {/* Fondo negro para la sección de texto */}
      <div className="flex flex-col items-center justify-center w-screen mt-[5%] pt-[10%] pb-[10%] bg-black p-10">
        <p className="text-white max-w-4xl text-center text-lg leading-7">
          Soy un programador junior apasionado por la tecnología, con una gran curiosidad
          por todo lo relacionado con el desarrollo de software. Tengo experiencia con múltiples
          tecnologías y me adapto rápidamente a nuevas herramientas y entornos.
          <br /><br />
          Me encanta construir soluciones creativas, resolver problemas y aprender constantemente.
          Disfruto tanto del proceso de desarrollo como del aprendizaje que conlleva, y me motiva seguir creciendo
          profesionalmente dentro del mundo tech. Estoy siempre listo para enfrentar nuevos retos y aportar valor
          a los equipos en los que participo.
        </p>
      </div>
    </div>
  );
};

export default About;
