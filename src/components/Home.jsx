import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="relative h-screen w-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Fondo que siempre se muestra completo */}
      <img
        src="/portatil3.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-contain"
      />

      {/* Capa oscura para mejorar contraste */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-6 max-w-[90%] sm:max-w-[600px]">
        {/* Texto con efecto máquina y color #48D1CC */}
        <h1
          className="text-[clamp(2rem,6vw,4rem)] font-bold leading-tight inline-block border-r-2 whitespace-nowrap overflow-hidden"
          style={{
            color: "#FFFFFF", // Texto blanco
            borderColor: "#FFFFFF", // Border blanco
            animation:
              "typing 4s steps(40, end) 1s forwards, blink 0.75s step-end infinite",
          }}
        >
          Hola, soy{" "}
          <span style={{ color: "#48D1CC" }}>Eusebio Fernandez</span>
        </h1>

        {/* Texto adicional con color blanco */}
        <p className="text-[clamp(1rem,4vw,1.5rem)] text-white mt-4">
          Soy Web Developer
        </p>

        {/* Botón con fondo #48D1CC y texto blanco */}
        <Link
          to="Projects"
          smooth={true}
          duration={500}
          className="mt-6 inline-block px-6 py-3 rounded transition"
          style={{
            backgroundColor: "#48D1CC", // Color de fondo del botón
            color: "#FFFFFF", // Texto blanco
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
