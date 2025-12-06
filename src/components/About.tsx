import designerPortrait from "../assets/image-about.jpeg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden border-4 border-background/20">
              <img
                src={designerPortrait}
                alt="Rosario Gorosito"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-3 w-32 h-32 bg-orange rounded-full flex items-center justify-center transform rotate-12 animate-bounce-slow">
              <span className="font-display text-foreground text-center text-sm leading-tight">
                2+ AÑOS<br />EXP
              </span>
            </div>
          </div>

          <div>
            <div className="inline-block bg-orange text-foreground px-4 py-2 rounded-full font-body text-sm font-semibold mb-6">
              SOBRE MÍ
            </div>

            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mb-8 leading-[0.9]">
              DISEÑADORA<br />
              <span className="italic">Digital</span>
            </h2>

            <div className="space-y-6 font-body text-lg text-background/80" id="about-me-text">
              <p>
                Soy Rosario, diseñadora digital autodidacta con dos años de experiencia creando piezas visuales con
                intención, estética y <span className="text-orange font-semibold">personalidad</span>.
              </p>
              <p>
                Además, soy estudiante de desarrollo web, lo que me da un enfoque claro y actualizado en el
                <span className="text-orange font-semibold"> diseño de páginas web</span>, entendiendo tanto la
                <span className="text-orange font-semibold"> estética</span> como la estructura técnica detrás de cada sitio.
              </p>
              <p>
                Me especializo en crear sitios
                <span className="text-orange font-semibold"> modernos</span>,
                <span className="text-orange font-semibold"> funcionales</span> y alineados a la
                <span className="text-orange font-semibold"> identidad</span> de cada proyecto para potenciar su
                presencia digital.
              </p>
            </div>


            <div className="grid grid-cols-3 gap-3 mt-12 pt-12 border-t border-background/20">
              <div >
                <p className="font-display text-4xl text-orange lg:text-5xl">20+</p>
                <p className="font-body text-sm text-background/60 mt-1">Proyectos</p>
              </div>
              <div>
                <p className="font-display text-4xl text-orange lg:text-5xl">15+</p>
                <p className="font-body text-sm text-background/60 mt-1">Clientes</p>
              </div>
              <div>
                <p className="font-display text-4xl text-orange lg:text-5xl">100%</p>
                <p className="font-body text-sm text-background/60 mt-1">Pasión</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
