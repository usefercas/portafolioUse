import React from 'react';
import Spline from "@splinetool/react-spline";
import NavBar from './components/NavBar';
import SlideBar from './components/SlideBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

const RobotComponent = () => {
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
      <Spline scene="https://prod.spline.design/mnxYiodWL6Wc4L0p/scene.splinecode" />
    </div>
  );
};

function App() {
  return (
    <div className=" ">
      <NavBar />
      <SlideBar />
      <Home />
      <RobotComponent /> {/* Aquí se añade el robot antes de los proyectos */}
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
