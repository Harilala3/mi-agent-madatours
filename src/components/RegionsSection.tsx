import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

import regionTana from "@/assets/region-antananarivo.jpg";
import regionDiana from "@/assets/region-diana.jpg";
import regionIsalo from "@/assets/region-isalo.jpg";
import regionRanomafana from "@/assets/region-ranomafana.jpg";
import regionMenabe from "@/assets/region-menabe.jpg";
import regionMelaky from "@/assets/region-melaky.jpg";
import regionAnosy from "@/assets/region-anosy.jpg";
import regionVakinankaratra from "@/assets/region-vakinankaratra.jpg";
import nosyBeImg from "@/assets/nosy-be.jpg";
import sainteMarieImg from "@/assets/sainte-marie.jpg";
import baobabsImg from "@/assets/baobabs-avenue.jpg";
import tsingyImg from "@/assets/tsingy-hero.jpg";

const regions = [
  {
    name: "Analamanga",
    capital: "Antananarivo",
    image: regionTana,
    description: "La capitale perchée sur ses 12 collines sacrées. Découvrez le Rova, les marchés artisanaux d'Analakely et la gastronomie malgache authentique. Point de départ idéal pour toutes vos aventures.",
  },
  {
    name: "DIANA",
    capital: "Antsiranana",
    image: regionDiana,
    description: "Le joyau du Nord : la baie de Diego Suarez, les Tsingy Rouges, la Montagne d'Ambre et ses lémuriens. Plages paradisiaques et plongée sous-marine exceptionnelle à Nosy Be.",
  },
  {
    name: "Ihorombe",
    capital: "Ihosy",
    image: regionIsalo,
    description: "Le Parc National de l'Isalo, véritable 'Colorado malgache'. Canyons sculptés, piscines naturelles turquoises et couchers de soleil à couper le souffle sur les formations rocheuses.",
  },
  {
    name: "Vatovavy-Fitovinany",
    capital: "Mananjary",
    image: regionRanomafana,
    description: "Forêts tropicales humides de Ranomafana, sources thermales naturelles et le rarissime lémurien doré. Une immersion totale dans la biodiversité la plus riche de l'île.",
  },
  {
    name: "Menabe",
    capital: "Morondava",
    image: regionMenabe,
    description: "L'iconique Allée des Baobabs au coucher du soleil — un spectacle inoubliable. La réserve de Kirindy et ses fossas, les pirogues traditionnelles sur le canal du Mozambique.",
  },
  {
    name: "Melaky",
    capital: "Maintirano",
    image: regionMelaky,
    description: "Les Tsingy de Bemaraha, classés UNESCO : un labyrinthe de cathédrales de calcaire. Ponts suspendus vertigineux et grottes secrètes. L'aventure à l'état pur.",
  },
  {
    name: "Anosy",
    capital: "Tolagnaro",
    image: regionAnosy,
    description: "Fort Dauphin et ses côtes sauvages battues par les vagues. La réserve de Berenty, royaume des lémuriens Catta. Forêts épineuses du Sud, uniques au monde.",
  },
  {
    name: "Vakinankaratra",
    capital: "Antsirabe",
    image: regionVakinankaratra,
    description: "La 'Ville d'Eau' et ses pousse-pousse colorés. Lacs volcaniques, ateliers de pierres précieuses et rizières en terrasses des hautes terres. Un voyage hors du temps.",
  },
  {
    name: "Analanjirofo",
    capital: "Sainte-Marie",
    image: sainteMarieImg,
    description: "L'île aux pirates et sanctuaire des baleines à bosse (juillet-septembre). Plages de sable blanc, cocotiers et récifs coralliens préservés. Romance et aventure marine.",
  },
  {
    name: "Boeny",
    capital: "Mahajanga",
    image: baobabsImg,
    description: "Le baobab sacré de Mahajanga, les grottes d'Anjohibe et le parc Ankarafantsika. Couchers de soleil légendaires sur le canal du Mozambique et cuisine créole exquise.",
  },
  {
    name: "SAVA",
    capital: "Antsirabe Nord",
    image: nosyBeImg,
    description: "La capitale mondiale de la vanille ! Plantations parfumées, le parc de Marojejy classé UNESCO et les plages immaculées de la côte nord-est. Un paradis sensoriel.",
  },
  {
    name: "Betsiboka",
    capital: "Maevatanana",
    image: tsingyImg,
    description: "Le delta rouge spectaculaire visible depuis l'espace. Rivières serpentant dans les latérites, orpaillage traditionnel et paysages lunaires d'une beauté brute et sauvage.",
  },
];

const RegionsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? regions : regions.slice(0, 8);

  return (
    <section id="regions" className="py-24 md:py-32 bg-night-gradient" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs font-body mb-4">
            23 Régions à Explorer
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gradient-gold">
            Un Pays, Mille Visages
          </h2>
        </motion.div>

        <motion.p
          className="text-muted-foreground font-body text-center max-w-2xl mx-auto mb-16 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Madagascar, c'est 587 000 km² de merveilles réparties en 23 régions uniques.
          Des hautes terres aux côtes tropicales, chaque région est un monde à part entière.
          Laissez-nous vous guider à travers les plus belles d'entre elles.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <AnimatePresence>
            {displayed.map((region, i) => (
              <motion.div
                key={region.name}
                className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[3/4]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <img
                  src={region.image}
                  alt={region.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-primary text-xs tracking-[0.2em] uppercase font-body mb-1">
                    {region.capital}
                  </p>
                  <h3 className="font-display text-xl text-foreground mb-2">{region.name}</h3>
                  <p className="text-muted-foreground text-xs font-body leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-h-0 group-hover:max-h-40 overflow-hidden">
                    {region.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {regions.length > 8 && (
          <motion.div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="glass-card px-8 py-3 rounded-full font-body text-primary hover:bg-primary/10 transition-colors duration-300 tracking-wide text-sm uppercase inline-flex items-center gap-2"
            >
              {showAll ? (
                <>Voir moins <ChevronUp className="w-4 h-4" /></>
              ) : (
                <>Découvrir plus de régions <ChevronDown className="w-4 h-4" /></>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default RegionsSection;
