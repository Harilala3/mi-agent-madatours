import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import lemurImg from "@/assets/lemur-watercolor.png";
import chameleonImg from "@/assets/chameleon-watercolor.png";

const BiodiversitySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Lemur - left side */}
      <motion.div
        className="absolute left-0 top-20 w-40 md:w-64 opacity-80 pointer-events-none"
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 0.7, x: -20 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img src={lemurImg} alt="Lémurien Catta" className="w-full h-auto" loading="lazy" />
      </motion.div>

      {/* Chameleon - right side */}
      <motion.div
        className="absolute right-0 bottom-20 w-36 md:w-56 opacity-80 pointer-events-none"
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 0.7, x: 20 } : {}}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      >
        <img src={chameleonImg} alt="Caméléon de Parson" className="w-full h-auto" loading="lazy" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs font-body mb-4">
            Biodiversité unique
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gradient-gold mb-6">
            Le Sanctuaire du Vivant
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed">
            Madagascar abrite 5% de la biodiversité mondiale. Plus de 90% de sa faune et de sa flore
            sont endémiques — des espèces que l'on ne trouve nulle part ailleurs sur Terre.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { number: "112", label: "Espèces de lémuriens" },
            { number: "300+", label: "Espèces de grenouilles" },
            { number: "12 000", label: "Plantes endémiques" },
            { number: "90%", label: "Faune endémique" },
          ].map((stat, i) => (
            <div key={i} className="glass-card rounded-xl p-5 text-center">
              <p className="font-display text-3xl md:text-4xl text-primary">{stat.number}</p>
              <p className="text-muted-foreground text-xs mt-1 font-body">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BiodiversitySection;
