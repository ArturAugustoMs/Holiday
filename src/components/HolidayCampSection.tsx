import AnimatedSection from "./AnimatedSection";
import campImg from "@/assets/holiday-camp.jpg";
import { Star, Users, Sun, Music } from "lucide-react";

const benefits = [
  { icon: Star, text: "Atividades exclusivas e temáticas" },
  { icon: Users, text: "Equipe especializada em recreação" },
  { icon: Sun, text: "Espaço ao ar livre e coberto" },
  { icon: Music, text: "Música, dança e muita diversão" },
];

const HolidayCampSection = () => {
  return (
    <section id="camp" className="py-24 md:py-32 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src={campImg}
                alt="Holiday Camp"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-8">
              <div>
                <span className="text-secondary font-bold text-sm uppercase tracking-widest">
                  Conheça
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-black mt-2">
                  Holiday <span className="text-primary">Camp</span>
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Nosso Holiday Camp oferece uma experiência completa de lazer e aprendizado. 
                As crianças participam de atividades criativas, esportivas e artísticas 
                em um ambiente seguro e acolhedor.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contato"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-bold shadow-lg shadow-secondary/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Saiba Mais
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HolidayCampSection;
