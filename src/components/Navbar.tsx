import { Instagram } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faBehance } from "@fortawesome/free-brands-svg-icons";


const Navbar = () => {
  const navLinks = [
    { name: "Sobre mí", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Servicios", href: "#services" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <nav className="fixed top-12 left-0 right-0 z-40 px-6" id="nav-inicio">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-24 h-24 flex items-center justify-center animate-spin-slow">
        </div>

        <div className="hidden md:flex items-center gap-2 bg-foreground rounded-full p-1.5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              id="links-nav"
              className="px-5 py-2.5 rounded-full font-body text-sm text-background hover:bg-background hover:text-foreground transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/rosario-gorosito/"
            target="_blank"
            className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center text-background hover:scale-110 transition-transform"
            aria-label="Instagram"
            id="icons-nav"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
          </a>
          <a
            href="https://www.behance.net/rosariogorosito"
            className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center text-background hover:scale-110 transition-transform font-bold text-lg"
            aria-label="Behance"
            id="icons-nav"
          >
            <FontAwesomeIcon icon={faBehance} className="text-xl" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
