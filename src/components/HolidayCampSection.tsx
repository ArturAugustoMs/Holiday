import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AnimatedSection from "./AnimatedSection";
import campImg1 from "@/assets/holiday-camp.jpg";
import campImg2 from "@/assets/holiday-camp-2.jpg";
import campImg3 from "@/assets/holiday-camp-3.jpg";
import { Star, Users, Sun, Music } from "lucide-react";

const campImages = [
  { src: campImg1, alt: "Holiday Camp - atividades" },
  { src: campImg2, alt: "Holiday Camp - ao ar livre" },
  { src: campImg3, alt: "Holiday Camp - artes" },
];

const benefits = [
  { icon: Star, text: "Atividades exclusivas e temáticas" },
  { icon: Users, text: "Equipe especializada em recreação" },
  { icon: Sun, text: "Espaço ao ar livre e coberto" },
  { icon: Music, text: "Música, dança e muita diversão" },
];

const HolidayCampSection = () => {
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
    <section id="camp" className="py-24 md:py-32 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <div ref={emblaRef} className="overflow-hidden">
                <div className="flex">
                  {campImages.map((img, i) => (
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
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {campImages.map((_, i) => (
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
