import logo from "@/assets/holiday-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Holiday" className="w-10 h-10 object-contain" />
            <span className="text-xl font-heading font-black">Holiday</span>
          </div>
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Holiday. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
