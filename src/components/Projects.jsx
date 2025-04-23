import projectImage from "../assets/project.jpg";

const Projects = () => {
  const projects = [
    // Asegúrate de incluir los proyectos aquí.
  ];

  return (
    <div name="Projects" className="w-full py-10 flex flex-col items-center bg-white">
      <h2 className="font-semibold text-[40px]">Projects</h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p, index) => (
          <div key={index} className="relative w-full max-w-[300px] h-[300px] border p-2 bg-slate-500">
            <img className="object-cover w-full h-full" src={p.projectsImageSrc} alt="project" />
            <span className="flex flex-col p-4 absolute inset-0 backdrop-blur hover:backdrop-blur-[20px] items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white">{p.description}</p>
              <div className="flex gap-4">
                <a href={p.githubLink} className="text-white">Github</a>
                <a href={p.deployLink} className="text-white">Deploy</a>
              </div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
