import { Palette, Monitor, Sparkles, Share2, Layout, Video } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "BRANDING",
      description: "Identidad visual completa que hace que tu marca sea inolvidable.",
      color: "bg-orange",
    },
    {
      icon: Palette,
      title: "DISEÑO Digital",
      description: "Piezas visuales que comunican y conectan con tu audiencia.",
      color: "bg-yellow",
    },
    {
      icon: Monitor,
      title: "WEB DESIGN",
      description: "Sitios web modernos que convierten visitantes en clientes.",
      color: "bg-lime",
    },
    {
      icon: Share2,
      title: "SOCIAL MEDIA",
      description: "Contenido visual que destaca en el feed de tu audiencia.",
      color: "bg-orange",
    },
    {
      icon: Video,
      title: "MOTION DESIGN",
      description: "Animaciones que dan vida a tu marca y capturan la atención.",
      color: "bg-yellow",
    },
    {
      icon: Layout,
      title: "UI/UX DESIGN",
      description: "Interfaces intuitivas y experiencias memorables.",
      color: "bg-lime",
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-foreground text-background px-4 py-2 rounded-full font-body text-sm font-semibold mb-6">
            MIS SERVICIOS
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-8xl leading-[0.9]">
            ¿En qué puedo  <span className="italic">ayudarte?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-foreground text-background rounded-3xl p-8 hover:scale-[1.02] transition-all duration-500 cursor-pointer"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <service.icon className="w-8 h-8 text-foreground" />
              </div>

              <h3 className="font-display text-2xl md:text-3xl mb-4">
                {service.title}
              </h3>
              <p className="font-body text-background/70 leading-relaxed" id="description-services">
                {service.description}
              </p>

              {/* <div className="mt-6 flex items-center gap-2 text-orange font-body font-semibold opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                <span>Ver más</span>
                <span>→</span>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
