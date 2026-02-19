import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import parallaxImg from "@/assets/parallax-hero.jpg";

const ParallaxImageSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.05, 0.85]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.5, 0.65, 1], [0.3, 1, 1, 1, 0.3]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5, 1], [48, 0, 48]);

  return (
    <section ref={containerRef} className="relative h-[80vh] md:h-screen overflow-hidden">
      <motion.div
        style={{ scale, y, opacity, borderRadius }}
        className="w-full h-full overflow-hidden"
      >
        <img
          src={parallaxImg}
          alt="Holiday - momentos especiais"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-foreground/10" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-primary-foreground text-center drop-shadow-2xl px-6">
            Momentos que ficam <br />
            <span className="text-accent">para sempre</span>
          </h2>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ParallaxImageSection;
