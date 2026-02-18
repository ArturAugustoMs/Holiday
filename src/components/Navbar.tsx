import logo from "@/assets/holiday-logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Holiday" className="w-10 h-10 object-contain" />
          <span className="text-xl font-heading font-black text-foreground">Holiday</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#camp" className="text-muted-foreground hover:text-primary font-semibold transition-colors">
            Holiday Camp
          </a>
          <a href="#sobre" className="text-muted-foreground hover:text-primary font-semibold transition-colors">
            Quem Somos
          </a>
          <a
            href="#contato"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
