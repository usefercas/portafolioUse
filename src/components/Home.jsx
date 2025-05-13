import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Imagen de fondo ajustada para pantallas pequeñas */}
      <img
        src="/usee.png"
        alt="Portátil"
        className="absolute inset-0 w-full h-full object-cover sm:object-contain"
      />

      {/* Contenido encima de la imagen */}
      <div
        className="relative z-10 text-center px-6 max-w-[90%] sm:max-w-[600px]"
        style={{
          transformOrigin: "center",
        }}
      >
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

        <p
          className="text-[clamp(1rem,4vw,1.5rem)] mt-4"
          style={{ color: "#48D1CC" }}
        >
          Soy Web Developer
        </p>

        {/* Botón con cuadrado transparente detrás */}
        <Link
          to="Projects"
          smooth={true}
          duration={500}
          className="mt-6 inline-block px-6 py-3 rounded transition hover:brightness-110 relative"
          style={{
            backgroundColor: "#48D1CC",
            color: "#FFFFFF",
          }}
        >
          <div className="absolute inset-0 bg-white bg-opacity-30 rounded-xl p-2 pointer-events-none"></div>
          <span className="relative z-10">Projects</span>
        </Link>
      </div>

      {/* Estilos adicionales */}
      <style>
        {`
          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }

          @keyframes blink {
            50% { border-color: transparent }
          }

          @media (max-width: 640px) {
            .text-center {
              transform: scale(0.8);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
