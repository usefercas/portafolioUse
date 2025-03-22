import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import SlideBar from "./components/SlideBar";
import SplineComponent from "./components/SplineComponent";  // Importa el componente de Spline

function App() {
  return (
    <div className="">
      <NavBar />
      <SlideBar />
      <Home />
      <About />
      
      {/* Aquí está el componente Spline antes de los proyectos */}
      <SplineComponent />  {/* Este es el componente con la escena Spline */}

      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
