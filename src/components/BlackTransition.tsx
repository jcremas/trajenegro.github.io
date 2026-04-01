import { motion } from "framer-motion";

const BlackTransition = () => {
  return (
    <section className="relative h-[50dvh] bg-background overflow-hidden flex items-center justify-center">
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--gold) / 0.15) 0%, transparent 70%)`,
        }}
      />
    </section>
  );
};

export default BlackTransition;
