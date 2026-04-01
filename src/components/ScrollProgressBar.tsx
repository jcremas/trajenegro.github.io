import { motion, useScroll } from "framer-motion";
import { RefObject } from "react";

interface ScrollProgressBarProps {
  containerRef: RefObject<HTMLElement>;
}

const ScrollProgressBar = ({ containerRef }: ScrollProgressBarProps) => {
  const { scrollYProgress } = useScroll({ container: containerRef });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gold z-50 origin-left"
      style={{
        scaleX: scrollYProgress,
        boxShadow: "0 0 8px hsl(var(--gold) / 0.6)",
      }}
    />
  );
};

export default ScrollProgressBar;
