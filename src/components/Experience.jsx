import React from "react";
import javascript from "../assets/technologies/javascript.png";
import html from "../assets/technologies/html.png";
import css from "../assets/technologies/css.png";
import firebase from "../assets/technologies/firebase.png";
import figma from "../assets/technologies/figma.png";
import reactjs from "../assets/technologies/reactjs.png";
import github from "../assets/technologies/github.png";
import java from "../assets/technologies/java2.png";
import jest from "../assets/technologies/jest.png";
import bootstrap from "../assets/technologies/bootstrap2.png";

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
  ];

  return (
    <div
      name="Experience"
      className="min-h-screen w-full flex flex-col items-center justify-center bg-[#1f1f1f] px-4"
    >
      <h2 className="font-semibold text-[40px] text-[#48D1CC] pt-10">Experiencia</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-10 pb-20 w-full max-w-[1200px]">
        {technologies.map((t) => (
          <div key={t.name} className="flex justify-center items-center">
            <img
              src={t.imageSrc}
              alt={t.name}
              className="object-contain h-[60px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
