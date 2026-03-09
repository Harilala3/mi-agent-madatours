import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import baobabsImg from "@/assets/baobabs-avenue.jpg";
import nosyBeImg from "@/assets/nosy-be.jpg";
import sainteMarieImg from "@/assets/sainte-marie.jpg";

const BentoDestinations = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="destinations" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs font-body mb-4">
            Destinations
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gradient-gold">
            Terres d'Aventure
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto auto-rows-[250px] md:auto-rows-[280px]">
          {/* Large card - Baobabs */}
          <motion.div
            className="md:col-span-2 md:row-span-1 relative group rounded-2xl overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img
              src={baobabsImg}
              alt="Allée des Baobabs"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-primary text-xs tracking-[0.2em] uppercase font-body mb-1">Le Sud</p>
              <h3 className="font-display text-2xl md:text-3xl text-foreground">L'Allée des Baobabs</h3>
              <p className="text-muted-foreground text-sm mt-2 font-body max-w-sm">
                Un spectacle naturel unique au coucher du soleil, entre Morondava et Belon'i Tsiribihina.
              </p>
            </div>
          </motion.div>

          {/* Tall card - Nosy Be */}
          <motion.div
            className="md:row-span-2 relative group rounded-2xl overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={nosyBeImg}
              alt="Nosy Be"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            {/* Water distortion effect via CSS */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/20 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-primary text-xs tracking-[0.2em] uppercase font-body mb-1">Île Parfumée</p>
              <h3 className="font-display text-2xl text-foreground">Nosy Be & l'Océan</h3>
              <p className="text-muted-foreground text-sm mt-2 font-body">
                Eaux turquoises, plages de sable blanc et fonds marins spectaculaires.
              </p>
            </div>
          </motion.div>

          {/* Small card - Sainte Marie */}
          <motion.div
            className="md:col-span-2 relative group rounded-2xl overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img
              src={sainteMarieImg}
              alt="Sainte Marie"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <div className="flex items-center gap-3 mb-2">
                <p className="text-primary text-xs tracking-[0.2em] uppercase font-body">Sainte-Marie</p>
                {/* Seasonality indicator */}
                <span className="glass-card px-3 py-1 rounded-full text-xs font-body text-primary">
                  🐋 Juil — Sept
                </span>
              </div>
              <h3 className="font-display text-2xl text-foreground">Les Baleines à Bosse</h3>
              <p className="text-muted-foreground text-sm mt-2 font-body max-w-sm">
                Chaque année, les baleines migrent vers les eaux chaudes de l'île Sainte-Marie.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoDestinations;
