import { useState } from "react";
import { Button } from "../components/ui/button";
import { Mail, MapPin, Instagram, Send, ArrowUpRight } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faBehance } from "@fortawesome/free-brands-svg-icons";


const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xrbnlrwj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "¡Mensaje enviado! 🎉",
          description: "Te responderé lo antes posible.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Hubo un error",
          description: "Por favor intentá de nuevo.",
        });
      }
    } catch {
      toast({
        title: "Error de conexión",
        description: "No se pudo enviar el mensaje.",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 justify-items-center lg:justify-items-start">
          <div>
            <div className="inline-block bg-foreground text-background px-4 py-2 rounded-full font-body text-sm font-semibold mb-6">
              CONTACTO
            </div>

            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.9] mb-5">
              LET'S CREATE<br />
              <span className="italic">SOMETHING</span><br />
              AMAZING
            </h2>
            <div id="text-contact">
              <p className="font-body text-foreground/80 text-xl max-w-md mb-4" id="contact-me-text">
                ¿Tienes un proyecto en mente? Me encantaría escucharlo y explorar cómo puedo ayudarte.
              </p>
            </div>

            <div
              className="flex flex-col md:flex-row md:space-x-10 space-y-6 md:space-y-0"
              id="container-info-contact"
            >
              <div className="flex flex-col space-y-6" id="container-info-contact">

                <a href="mailto:rosariogorositodesign@gmail.com" className="flex items-start gap-4 group ">
                  <div className="w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center flex-shrink-0 self-start">
                    <Mail className="w-5 h-5" />
                  </div>

                  <div className="flex flex-col">
                    <p className="font-body text-sm text-foreground/60">Email</p>
                    <p className="font-body text-lg font-semibold group-hover:text-orange transition-colors whitespace-normal break-all sm:whitespace-nowrap" >
                      rosariogorositodesign@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-body text-sm text-foreground/60">Ubicación</p>
                    <p className="font-body text-lg font-semibold">Bs.As, Argentina</p>
                  </div>
                </div>

              </div>


            </div>


            <div className="mt-6 flex gap-4">
              {[
                {
                  icon: faBehance,
                  label: "Behance",
                  href: "https://www.behance.net/rosariogorosito",
                },
                {
                  icon: faLinkedinIn,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/rosario-gorosito/",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} className="text-2xl" />
                </a>
              ))}
            </div>


          </div>

          <div className="bg-foreground text-background rounded-3xl p-8 md:p-12" id="form-contact">
            <h3 className="font-display text-3xl mb-8">Escribime!</h3>

            <form onSubmit={handleSubmit} className="space-y-6" id="form-contact">
              <div>
                <label className="font-body text-sm text-background/60 block mb-2">
                  Tu nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-background/30 pb-3 font-body text-lg text-background placeholder:text-background/40 focus:outline-none focus:border-orange transition-colors"
                  placeholder="¿Cómo te llamas?"
                />
              </div>

              <div>
                <label className="font-body text-sm text-background/60 block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-background/30 pb-3 font-body text-lg text-background placeholder:text-background/40 focus:outline-none focus:border-orange transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="font-body text-sm text-background/60 block mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-background/30 pb-3 font-body text-lg text-background placeholder:text-background/40 focus:outline-none focus:border-orange transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <Button variant="orange" size="lg" type="submit" className="w-full mt-8">
                Enviar mensaje
                <ArrowUpRight className="ml-2" size={20} />
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-24 overflow-hidden">
        <div className="animate-marquee-slow flex">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="font-display text-[15vw] text-outline whitespace-nowrap mx-8">
              LET'S WORK TOGETHER •
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
