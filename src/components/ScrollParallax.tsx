import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollParallaxProps {
  children: React.ReactNode;
  className?: string;
  offset?: number;
}

const ScrollParallax = ({ children, className = "", offset = 60 }: ScrollParallaxProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6]);

  return (
    <motion.div ref={ref} style={{ y, opacity }} className={className}>
      {children}
    </motion.div>
  );
};

export default ScrollParallax;
