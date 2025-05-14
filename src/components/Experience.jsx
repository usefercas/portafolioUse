import React from "react";
import javascript from "../assets/technologies/jsofi.png";
import html from "../assets/technologies/1.png";
import css from "../assets/technologies/cssofi.png";
import firebase from "../assets/technologies/firebase.png";
import figma from "../assets/technologies/figma.png";
import reactjs from "../assets/technologies/reactofi.png";
import github from "../assets/technologies/gitofi.png";
import java from "../assets/technologies/javaofi.png";
import jest from "../assets/technologies/jestofi.png";
import bootstrap from "../assets/technologies/bootofi.png";
import mongo from "../assets/technologies/mongoofi.png";

const Experience = () => {
  const technologies = [
    { name: "javascript", imageSrc: javascript },
    { name: "css", imageSrc: css },
    { name: "html", imageSrc: html },
    { name: "figma", imageSrc: figma },
    { name: "firebase", imageSrc: firebase },
    { name: "reactjs", imageSrc: reactjs },
    { name: "github", imageSrc: github },
    { name: "java", imageSrc: java },
    { name: "jest", imageSrc: jest },
    { name: "bootstrap", imageSrc: bootstrap },
    { name: "mongo", imageSrc: mongo },
  ];

  return (
    <div
      name="Experience"
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 mt-0"
      style={{
        backgroundColor: "#fdf6e3",
        border: "1px solid #8B4513", // Borde marrón fino
      }}
    >
      <h2 className="font-semibold text-[40px] text-[#8B4513] pt-10">
        Experiencia
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-10 pb-20 w-full max-w-[1200px]">
        {technologies.map((t) => (
          <div key={t.name} className="flex justify-center items-center">
            <div className="w-[60px] h-[60px] flex justify-center items-center">
              <img
                src={t.imageSrc}
                alt={t.name}
                className="object-contain w-full h-full filter sepia-100" // Cambié aquí para aplicar un filtro sepia
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
