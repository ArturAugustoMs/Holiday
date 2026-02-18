import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import logo from "@/assets/holiday-logo.png";
import heroImg1 from "@/assets/hero-birthday.jpg";
import heroImg2 from "@/assets/hero-birthday-2.jpg";
import heroImg3 from "@/assets/hero-birthday-3.jpg";

const heroImages = [
  { src: heroImg1, alt: "Festa de aniversário infantil" },
  { src: heroImg2, alt: "Crianças celebrando aniversário" },
  { src: heroImg3, alt: "Festa com bolo e confete" },
];

const HeroSection = () => {
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

    const autoplay = setInterval(() => emblaApi.scrollNext(), 4000);
    return () => clearInterval(autoplay);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-secondary/15 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.img
              src={logo}
              alt="Holiday Logo"
              className="w-48 h-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
            <h1 className="text-5xl md:text-7xl font-heading font-black leading-tight">
              Holiday{" "}
              <span className="text-gradient">Birthday</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-lg">
              Transformamos aniversários em experiências mágicas e inesquecíveis para os seus pequenos.
            </p>
            <motion.a
              href="#contato"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Agende sua Festa
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20">
              <div ref={emblaRef} className="overflow-hidden">
                <div className="flex">
                  {heroImages.map((img, i) => (
                    <div key={i} className="flex-[0_0_100%] min-w-0">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {heroImages.map((_, i) => (
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
            <motion.div
              className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-6 py-3 rounded-2xl shadow-lg font-bold text-sm"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              🎉 +500 Festas Realizadas
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
