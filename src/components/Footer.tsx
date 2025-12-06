const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-display text-2xl">
            Rosario<span className="text-orange">.</span>
          </span>

          <p className="font-body text-sm text-background/60">
            © {currentYear} Rosario Gorosito. Made with ♡ 
          </p>

          <a
            href="#hero"
            className="font-body text-sm text-background/60 hover:text-orange transition-colors flex items-center gap-2"
          >
            Volver arriba ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
