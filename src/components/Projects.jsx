import projectImage from "../assets/use3.png";

const Projects = () => {
  const projects = [
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, autem molestiae...",
      projectsImageSrc: projectImage,
      githubLink: "https://github.com/JustoMateos21/ecommerce-shoes-copia",
      deployLink: "https://github.com/JustoMateos21/ecommerce-shoes-copia",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, autem molestiae...",
      projectsImageSrc: projectImage,
      githubLink: "https://github.com/JustoMateos21/ecommerce-shoes-copia",
      deployLink: "https://github.com/JustoMateos21/ecommerce-shoes-copia",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, autem molestiae...",
      projectsImageSrc: projectImage,
      githubLink: "https://github.com/JustoMateos21/ecommerce-shoes-copia",
      deployLink: "https://github.com/JustoMateos21/ecommerce-shoes-copia",
    },
  ];

  return (
    <div
      name="Projects"
      className="w-screen flex items-center flex-col py-12 px-4"
      style={{
        backgroundColor: "#fdf6e3",
        border: "1px solid #8B4513", // Borde marrón fino
      }}
    >
      <h2 className="font-semibold text-[40px]" style={{ color: "#8B4513" }}>
        Projects
      </h2>

      <div className="gap-4 mt-10 grid grid-cols-3 md:grid-cols-1">
        {projects.map((p) => (
          <div
            className="relative w-[300px] h-[300px] border border-[#8B4513] p-2 rounded-lg bg-white"
            key={p.githubLink}
          >
            <img
              className="object-cover w-full h-full rounded-lg"
              src={p.projectsImageSrc}
              alt="project"
            />
            <span className="flex flex-col p-4 absolute backdrop-blur hover:backdrop-blur-[20px] inset-0 items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-[#00000050] rounded-lg">
              <p className="text-white text-sm">{p.description}</p>
              <div className="flex mt-2 space-x-4">
                <a href={p.githubLink} className="text-white underline">
                  Github
                </a>
                <a href={p.deployLink} className="text-white underline">
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
