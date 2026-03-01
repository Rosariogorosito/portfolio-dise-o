import { useState } from "react";
import projectBranding from "../assets/diseño-1.png";
import projectWeb from "../assets/diseño-2.png";
import projectONG from "../assets/diseño-5.png";
import projectNettar from "../assets/diseño-6.png";
import projectRG from "../assets/diseño-7.png";

const Portfolio = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Atelier Luxe",
      category: "Web Design / UI",
      image: projectBranding,
      color: "bg-orange",
    },
    {
      id: 2,
      title: "Nettar",
      category: "Design / Social Media",
      image: projectNettar,
      color: "bg-lime",
    },
    {
      id: 3,
      title: "Tatuador en Turín",
      category: "Web Design / UI",
      image: projectWeb,
      color: "bg-lime",
    },
        {
      id: 4,
      title: "RG - Gestión creativa",
      category: "Design / Social Media",
      image: projectRG,
      color: "bg-lime",
    },
    {
      id: 5,
      title: "Cepyco",
      category: "Design web / UI",
      image: projectONG,
      color: "bg-lime",
    },

  ];

  return (
    <section id="portfolio" className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div>
            <div className="inline-block bg-orange text-foreground px-4 py-2 rounded-full font-body text-sm font-semibold mb-6">
              PORTFOLIO
            </div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-8xl leading-[0.9]">
              SELECTED<br /><span className="italic">WORKS</span>
            </h2>
          </div>
          <p className="font-body text-background/70 text-lg max-w-md" id="subtitle-portfolio">
            Una selección de mis proyectos más recientes. Cada uno cuenta una historia única.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${hoveredId === project.id ? "scale-110" : "scale-100"
                    }`}
                />
              </div>

              <div className={`absolute inset-0 ${project.color} mix-blend-multiply transition-opacity duration-500 ${hoveredId === project.id ? "opacity-70" : "opacity-0"
                }`} />

              <div className="absolute inset-0 flex items-end p-8 md:p-12">
                <div className={`transform transition-all duration-500 ${hoveredId === project.id ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}>
                  <span className="font-body text-sm text-background/80 mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="font-display text-4xl md:text-6xl text-background">
                    {project.title}
                  </h3>
                </div>

                <div className="absolute top-8 right-8 md:top-12 md:right-12">
                  <span className={`font-display text-8xl md:text-9xl text-background transition-all duration-500 ${hoveredId === project.id ? "opacity-30" : "opacity-0"
                    }`}>
                    0{index + 1}
                  </span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-background transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-4 bg-background text-foreground px-8 py-4 rounded-full font-body font-semibold hover:scale-105 transition-transform">
            <span>Ver todos los proyectos</span>
            <span className="text-xl">→</span>
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
