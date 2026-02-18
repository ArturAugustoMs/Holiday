import AnimatedSection from "./AnimatedSection";
import { Heart, Eye, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Missão",
    description: "Proporcionar momentos de alegria e conexão através de festas e eventos únicos para crianças e famílias.",
  },
  {
    icon: Eye,
    title: "Visão",
    description: "Ser referência em celebrações infantis, reconhecida pela criatividade, qualidade e carinho em cada detalhe.",
  },
  {
    icon: Sparkles,
    title: "Valores",
    description: "Alegria, segurança, criatividade, respeito e compromisso com a felicidade de cada criança.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold text-sm uppercase tracking-widest">
              Sobre nós
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-black mt-2 mb-6">
              Quem <span className="text-primary">Somos</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos apaixonados por criar experiências memoráveis. Com anos de dedicação 
              ao universo infantil, a Holiday nasceu do sonho de transformar cada 
              celebração em um momento especial e cheio de magia.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="bg-card rounded-3xl p-8 shadow-lg shadow-foreground/5 border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
