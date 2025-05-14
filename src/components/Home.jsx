import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
      {/* 🎥 Video de fondo */}
      <video
        src="/atardecer.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Contenido sin capas ni fondos */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-[90%] sm:max-w-[600px]">
        <h1
          className="font-bold leading-tight inline-block border-r-2 whitespace-nowrap overflow-hidden"
          style={{
            color: "#FFFFFF", // "Hola, soy"
            borderColor: "#FFFFFF",
            fontSize: "clamp(1.5rem, 6vw, 3.5rem)",
            animation:
              "typing 4s steps(40, end) 1s forwards, blink 0.75s step-end infinite",
          }}
        >
          Hola, soy{" "}
          <span style={{ color: "#8B4513" }}>Eusebio Fernandez</span>
        </h1>

        <p
          className="mt-4"
          style={{
            color: "#FFFFFF", // Blanco para "Soy Web Developer"
            fontSize: "clamp(1rem, 4vw, 1.5rem)",
          }}
        >
          Soy Web Developer
        </p>

        <Link
          to="Projects"
          smooth={true}
          duration={500}
          className="mt-6 inline-block px-6 py-3 rounded transition hover:brightness-110 relative"
          style={{
            backgroundColor: "#8B4513", // Marrón
            color: "#FFFFFF",
          }}
        >
          <span className="relative z-10">Projects</span>
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
