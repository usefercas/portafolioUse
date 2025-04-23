import projectImage from "../assets/project.jpg";

const Projects = () => {
  const projects = [
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, autem molestiae. Facilis quidem temporibus fugit aliquid corrupti, vero, debitis laborum minus repellat, est reiciendis soluta laudantium cum! Aut, quaerat dignissimos.",
      projectsImageSrc: projectImage,
      githubLink: "https://github.com/JustoMateos21/ecommerce-shoes-copia",
      deployLink: "https://github.com/JustoMateos21/ecommerce-shoes-copia",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, autem molestiae. Facilis quidem temporibus fugit aliquid corrupti, vero, debitis laborum minus repellat, est reiciendis soluta laudantium cum! Aut, quaerat dignissimos.",
      projectsImageSrc: projectImage,
      githubLink: "https://github.com/JustoMateos21/ecommerce-shoes-copia",
      deployLink: "https://github.com/JustoMateos21/ecommerce-shoes-copia",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, autem molestiae. Facilis quidem temporibus fugit aliquid corrupti, vero, debitis laborum minus repellat, est reiciendis soluta laudantium cum! Aut, quaerat dignissimos.",
      projectsImageSrc: projectImage,
      githubLink: "https://github.com/JustoMateos21/ecommerce-shoes-copia",
      deployLink: "https://github.com/JustoMateos21/ecommerce-shoes-copia",
    },
  ];

  return (
    <div
      name="Projects"
      className="h-screen w-screen flex items-center flex-col"
      style={{
        backgroundImage: 'url(/madera1.png)', // Aplicar la imagen de fondo
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Título Projects con color azul #48D1CC */}
      <h2
        className="font-semibold text-[40px]"
        style={{ color: "#48D1CC" }}
      >
        Projectos
      </h2>

      {/* Grid de proyectos */}
      <div className="gap-4 mt-10 grid grid-cols-3 md:grid-cols-1">
        {projects.map((p) => (
          <div
            className="relative w-[300px] h-[300px] border-red-100 border-spacing-1 border p-2 bg-slate-500"
            key={p.githubLink}
          >
            <img className="object-cover" src={p.projectsImageSrc} alt="" />
            <span className="flex flex-col p-4 absolute backdrop-blur hover:backdrop-blur-[20px] inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white">{p.description}</p>
              <div className="flex">
                <a href={p.githubLink} className="text-white">Github</a>
                <a className="ml-4 text-white" href={p.deployLink}>
                  Deploy
                </a>
              </div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
