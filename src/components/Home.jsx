import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo sin filtros */}
      <img
        src="/usee.png"
        alt="Portátil"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Contenido encima de la imagen */}
      <div className="relative z-10 text-center px-6 max-w-[90%] sm:max-w-[600px]">
        <h1
          className="text-[clamp(2rem,6vw,4rem)] font-bold leading-tight inline-block border-r-2 whitespace-nowrap overflow-hidden"
          style={{
            color: "#FFFFFF",
            borderColor: "#FFFFFF",
            animation:
              "typing 4s steps(40, end) 1s forwards, blink 0.75s step-end infinite",
          }}
        >
          Hola, soy <span style={{ color: "#48D1CC" }}>Eusebio Fernandez</span>
        </h1>

        <p className="text-[clamp(1rem,4vw,1.5rem)] text-white mt-4">
          Soy Web Developer
        </p>

        <Link
          to="Projects"
          smooth={true}
          duration={500}
          className="mt-6 inline-block px-6 py-3 rounded transition hover:brightness-110"
          style={{
            backgroundColor: "#48D1CC",
            color: "#FFFFFF",
          }}
        >
          Projects
        </Link>
      </div>

      {/* Animaciones CSS */}
      <style>
        {`
          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }

          @keyframes blink {
            50% { border-color: transparent }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
