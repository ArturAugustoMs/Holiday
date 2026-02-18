import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contato" className="py-24 md:py-32 bg-muted/50">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold text-sm uppercase tracking-widest">
              Contato
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-black mt-2 mb-6">
              Fale <span className="text-primary">Conosco</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tem alguma dúvida ou quer agendar sua festa? Envie uma mensagem!
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto bg-card rounded-3xl p-8 md:p-12 shadow-xl shadow-foreground/5 border border-border/50 space-y-6"
          >
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">Nome</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">Mensagem</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-5 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Como podemos ajudar?"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Enviar Mensagem
              <Send className="w-5 h-5" />
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
