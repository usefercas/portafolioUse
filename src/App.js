import React from 'react';

import NavBar from './components/NavBar';
import SlideBar from './components/SlideBar';
import Home from './components/Home';
import About from './components/About';
import SolidImage from './components/SolidImage'; // <-- ✅ Nuevo componente
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import RobotComponent from "./components/SplineComponent"; // 👈 importar componente


function App() {
  return (
    <div className=" ">
      <NavBar />
      <SlideBar />
      <Home />
      <About />
      <SolidImage /> {/* <-- ✅ Insertado aquí */}
      <Projects />
      <Experience />
      <Contact />
      <RobotComponent />
    </div>
  );
}

export default App;
