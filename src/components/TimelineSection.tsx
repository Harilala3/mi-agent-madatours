import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";

const stops = [
  {
    city: "Antananarivo",
    subtitle: "La Capitale",
    description: "Point de départ de votre aventure. Visitez le Rova et les marchés animés.",
    day: "Jour 1-2",
  },
  {
    city: "Antsirabe",
    subtitle: "Ville d'Eau",
    description: "Sources thermales, ateliers de pierres précieuses et paysages volcaniques.",
    day: "Jour 3-4",
  },
  {
    city: "Ranomafana",
    subtitle: "Parc National",
    description: "Forêt tropicale humide, lémuriens dorés et sources chaudes naturelles.",
    day: "Jour 5-6",
  },
  {
    city: "Morondava",
    subtitle: "Côte Ouest",
    description: "L'iconique Allée des Baobabs et les Tsingy de Bemaraha.",
    day: "Jour 7-9",
  },
];

const TimelineSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-night-gradient" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs font-body mb-4">
            Itinéraire
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-gradient-gold">
            Carnet de Route
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-2xl mx-auto">
          {/* Animated line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border">
            <motion.div
              className="w-full bg-primary origin-top"
              initial={{ height: "0%" }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
            />
          </div>

          {stops.map((stop, i) => (
            <motion.div
              key={stop.city}
              className={`relative flex items-start gap-6 md:gap-0 mb-16 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow-gold z-10" />

              {/* Content */}
              <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="glass-card rounded-xl p-5">
                  <span className="text-primary text-xs font-body tracking-wider">{stop.day}</span>
                  <div className="flex items-center gap-2 mt-2 ${i % 2 === 0 ? 'md:justify-end' : ''}">
                    <MapPin className="w-4 h-4 text-primary" />
                    <h3 className="font-display text-xl text-foreground">{stop.city}</h3>
                  </div>
                  <p className="text-ocre text-xs font-body mt-1">{stop.subtitle}</p>
                  <p className="text-muted-foreground text-sm font-body mt-2">{stop.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
