import React from "react";
import developerHeader from "../assets/oficial.png";
import header from "../assets/header.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <img alt="header" src={header} className="md:hidden w-screen" />
      <div className="md:h-20 min-[700px]:hidden bg-[#2B2B29]"></div>

      <img
        alt="developer"
        src={developerHeader}
        className="absolute left-[50%] top-[130px] md:left-[20%] md:static"
      />

      <div className="absolute md:text-[40px] xl:left-[-20px] xl:text-[40px] md:left-[0] md:w-screen p-6 md:static left-[20%] top-[40%] w-[619px] h-[250px] text-black text-[64px] font-normal flex flex-col">
        {/* Texto con efecto máquina de escribir */}
        <div
          className="text-[calc(1rem+2vw)] leading-snug"
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            borderRight: "2px solid black",
            display: "inline-block",
            animation: "typing 4s steps(40, end) 1s forwards, blink 0.75s step-end infinite",
            maxWidth: "100%",
          }}
        >
          Hola, soy Eusebio Fernandez.
        </div>

        {/* Botón separado del efecto */}
        <Link
          className="cursor-pointer text-[20px] text-white bg-slate-500 mt-6 p-4 w-fit"
          to="Projects"
          smooth="500"
        >
          Projects
        </Link>
      </div>

      {/* Estilos para animación */}
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
