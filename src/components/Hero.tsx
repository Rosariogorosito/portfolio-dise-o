import designerPortrait from "../assets/imagen-card.jpeg";
import "../App.css";
import "./styles/styles.css"

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen relative overflow-hidden pt-32 pb-30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div className="container-hero-titles">
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.85] tracking-tight animate-fade-up" id="title-hero">
                Diseño que conecta con tu esencia<br />
              </h1>
              <p className="text-foreground/80 text-[1.5rem] md:text-[1.9rem] mt-8  animate-fade-up" id="subtitle-hero" style={{ animationDelay: '200ms' }}>
                Creo sitios web y piezas visuales que combinan estética, funcionalidad y propósito.
              </p>
            </div>

            <div className="mt-8 animate-fade-up" style={{ animationDelay: '300ms' }}>
              <div className="inline-flex items-center gap-3 bg-foreground text-background rounded-full px-6 py-3">
                <span className="w-3 h-3 rounded-full bg-lime animate-pulse" />
                <span className="font-body font-medium">Disponible para nuevos proyectos</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-float">
            <div className="relative transform -rotate-6">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-8 h-20 bg-orange rounded-b-lg" />
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-foreground" />

              <div className="w-72 md:w-80 bg-orange rounded-3xl p-6 shadow-2xl border-4 border-foreground/10">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center">
                    <span className="text-lg"><i className="fa-solid fa-globe"></i></span>
                  </div>
                  <div className="text-right text-xs font-body text-foreground/60">
                    <div>ID CARD</div>
                    <div className="font-mono text-[10px]">2025</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4 text-[10px] font-body text-foreground/70">
                  <span id="items-card-hero">Packaging •</span>
                  <span id="items-card-hero">Web design •</span>
                  <span id="items-card-hero">Branding •</span>
                  <span id="items-card-hero">UX/UI •</span>
                  <span id="items-card-hero">Redes sociales</span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl leading-none mb-4 italic">
                  Diseñadora<br /> Autodidacta
                </h3>

                <div className="w-32 h-40 bg-card rounded-lg overflow-hidden mb-4 mx-auto" id="image-card-container">
                  <img
                    src={designerPortrait}
                    alt="Elena"
                    className="object-cover"
                    id="imagen-card"
                  />
                </div>

                <div className="text-center">
                  <p className="font-display text-3xl" id="name-hero">Rosario</p>
                  <p className="font-display text-3xl" id="name-hero">Gorosito</p>
                  <p className="font-body text-xs text-foreground/60 mt-1">@rg.redes</p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="font-mono text-xs text-foreground/50">12</span>
                  <div className="flex-1 mx-4 h-8 flex items-end gap-[2px]">
                    {[...Array(40)].map((_, i) => (
                      <div
                        key={i}
                        className="bg-foreground flex-1"
                        style={{ height: `${Math.random() * 100}%` }}
                      />
                    ))}
                  </div>
                  <span className="font-mono text-xs text-foreground/50">2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-24" style={{ animationDelay: '400ms' }}>
          <h2 className="font-display text-[4.2rem] md:text-[6rem] lg:text-[7rem] lg:mt-[0rem]  leading-none  text-outline-thick whitespace-nowrap" id="text-rosario-hero">
            ROSARIO GOROSITO
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
