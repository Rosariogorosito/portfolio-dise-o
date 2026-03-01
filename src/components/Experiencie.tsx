import { Briefcase, GraduationCap, Award, Rocket } from "lucide-react";

const experiences = [
  {
    year: "2026 — PRESENTE",
    title: "DISEÑADORA Y CM",
    company: "INMOBILIARIA CHURRUARIN — SAN PEDRO, BUENOS AIRES",
    description: "Responsable del desarrollo integral de la identidad visual y comunicación de marca, cartelería, papelería y todo tipo de piezas gráficas digitales. Producción, filmación y edición de videos. Gestión de redes y diseño de todo tipo de piezas gráficas.",
    icon: Rocket,
    color: "bg-orange",
    tags: ["Dirección Creativa", "Diseño"]
  },
  {
    year: "2025 — 2026",
    title: "DISEÑADORA DIGITAL Y CM",
    company: "RG Gestión creativa — Buenos Aires",
    description: "Diseño de identidades visuales, packaging, creación y edición de videos, planificación y gestión de redes, campañas publicitarias",
    icon: Briefcase,
    color: "bg-yellow",
    tags: ["Social Media", "Branding" , "Diseño"],
  },
  {
    year: "2023 — 2025",
    title: "DISEÑADORA JR.",
    company: "Nettar — Remoto",
    description: "Creación de contenido para redes, videos, diseño de sitios webs, proyectos de branding, creación de todo tipo de piezas gráficas.",
    icon: Award,
    color: "bg-lime",
    tags: ["Diseño", "Social Media"],
  },
  {
    year: "2024 — 2024",
    title: "Tester Junior / DevOps",
    company: "Aprendizaje ML — Remoto",
    description: "Realicé pruebas de compatibilidad en múltiples dispositivos y navegadores. Edité y rediseñé diapositivas y documentos técnicos, transformándolos en guiones claros y visualmente atractivos para su exposición.",
    icon: GraduationCap,
    color: "bg-orange",
    tags: [""],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-foreground text-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block bg-orange text-foreground px-4 py-2 rounded-full font-body text-sm font-semibold mb-6">
            MI TRAYECTORIA
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-8xl leading-[0.9]">
            EXPERI<span className="italic">ENCIA</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[3px] bg-background/20 md:-translate-x-1/2" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative flex items-start mb-16 last:mb-0 group ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 z-10">
                  <div className={`w-12 h-12 ${exp.color} rounded-full flex items-center justify-center border-4 border-foreground group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                    <exp.icon className="w-5 h-5 text-foreground" />
                  </div>
                </div>

                <div
                  className={`ml-24 md:ml-0 md:w-[calc(50%-3rem)] ${
                    isLeft ? "md:pr-0 md:mr-auto" : "md:pl-0 md:ml-auto"
                  }`}
                >
                  <div className="bg-background/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-background/10 hover:border-orange/50 hover:bg-background/15 transition-all duration-500 group-hover:translate-y-[-4px]">
                    <span className="inline-block font-body text-xs font-bold tracking-widest text-orange mb-3">
                      {exp.year}
                    </span>

                    <h3 className="font-display text-2xl md:text-3xl mb-1 leading-tight">
                      {exp.title}
                    </h3>
                    <p className="font-body text-sm text-background/50 mb-4">
                      {exp.company}
                    </p>
                    <p className="font-body text-background/70 leading-relaxed text-sm mb-5" id="description-experiencie">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-background/10 text-background/60 font-body text-xs font-medium border border-background/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
