import React from "react";
import javascript from "../assets/technologies/js1.png";
import html from "../assets/technologies/html1.png";
import css from "../assets/technologies/css1.png";
import firebase from "../assets/technologies/firebase.png";
import figma from "../assets/technologies/figma.png";
import reactjs from "../assets/technologies/react2.png";
import github from "../assets/technologies/github.png";
import java from "../assets/technologies/java3.png";
import jest from "../assets/technologies/jest3.png";
import bootstrap from "../assets/technologies/boot.png";
import mongo from "../assets/technologies/mongio2.png";

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
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 mt-0" // Elimino el mt-10 para que no haya espacio extra
      style={{ backgroundColor: "#fdf6e3" }} // Fondo igual que About
    >
      <h2 className="font-semibold text-[40px] text-[#8B4513] pt-10">Experiencia</h2>


      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-10 pb-20 w-full max-w-[1200px]">
        {technologies.map((t) => (
          <div key={t.name} className="flex justify-center items-center">
            <div className="w-[60px] h-[60px] flex justify-center items-center">
              <img
                src={t.imageSrc}
                alt={t.name}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
