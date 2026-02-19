import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AnimatedSection from "./AnimatedSection";
import ScrollParallax from "./ScrollParallax";
import moveImg1 from "@/assets/move-it.jpg";
import moveImg2 from "@/assets/move-it-2.jpg";
import moveImg3 from "@/assets/move-it-3.jpg";
import { Zap, Heart, Trophy, Smile } from "lucide-react";

const moveImages = [
  { src: moveImg1, alt: "Move It - atividades físicas" },
  { src: moveImg2, alt: "Move It - yoga e movimento" },
  { src: moveImg3, alt: "Move It - jogos esportivos" },
];

const highlights = [
  { icon: Zap, text: "Atividades dinâmicas e energéticas" },
  { icon: Heart, text: "Desenvolvimento motor saudável" },
  { icon: Trophy, text: "Jogos cooperativos e esportivos" },
  { icon: Smile, text: "Diversão garantida para todas as idades" },
];

const MoveItSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();

    const autoplay = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(autoplay);
  }, [emblaApi, onSelect]);

  return (
    <section id="moveit" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection delay={0.2}>
            <div className="space-y-8">
              <div>
                <span className="text-accent font-bold text-sm uppercase tracking-widest">
                  Novidade
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-black mt-2">
                  Move <span className="text-secondary">It</span>
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                O Move It é o nosso programa de atividades físicas e recreativas que 
                estimula o corpo e a mente das crianças. Com brincadeiras, esportes e 
                muita energia, cada sessão é uma aventura diferente!
              </p>

              <div className="space-y-4">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contato"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-bold shadow-lg shadow-secondary/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Falar Conosco
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <ScrollParallax>
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <div ref={emblaRef} className="overflow-hidden">
                  <div className="flex">
                    {moveImages.map((img, i) => (
                      <div key={i} className="flex-[0_0_100%] min-w-0">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-[450px] object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tl from-secondary/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {moveImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => emblaApi?.scrollTo(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        i === selectedIndex
                          ? "bg-primary-foreground w-6"
                          : "bg-primary-foreground/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </ScrollParallax>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default MoveItSection;
