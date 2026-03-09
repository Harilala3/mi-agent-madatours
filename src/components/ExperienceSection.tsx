import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Award, Clock, Heart, Users, Star } from "lucide-react";

const guarantees = [
  {
    icon: Shield,
    title: "Sécurité Garantie",
    description: "Véhicules récents et entretenus, assurance voyage complète et protocoles de sécurité rigoureux sur chaque circuit.",
  },
  {
    icon: Award,
    title: "Guide Certifié",
    description: "Guide touristique diplômé et expérimenté, parlant français, anglais et malgache. Connaissance intime de chaque région.",
  },
  {
    icon: Clock,
    title: "Flexibilité Totale",
    description: "Circuits 100% personnalisables selon vos envies, votre rythme et votre budget. Aucun groupe imposé.",
  },
  {
    icon: Heart,
    title: "Tourisme Responsable",
    description: "Nous soutenons les communautés locales. Hébergements chez l'habitant, artisanat local et respect de l'environnement.",
  },
  {
    icon: Users,
    title: "Accompagnement 24/7",
    description: "Un interlocuteur unique du premier contact jusqu'à votre retour. Assistance permanente pendant tout votre séjour.",
  },
  {
    icon: Star,
    title: "Expériences Exclusives",
    description: "Accès à des lieux hors des sentiers battus, rencontres avec les villageois et cérémonies traditionnelles authentiques.",
  },
];

const ExperienceSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Story */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs font-body mb-4">
            Votre Guide de Confiance
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gradient-gold mb-8">
            Plus qu'un Guide, un Ami
          </h2>
          <div className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed">
            <p>
              Passionné par mon île depuis toujours, j'ai parcouru chacune des 23 régions de Madagascar
              à pied, en pirogue et en 4×4. <span className="text-foreground font-medium">Avec plus de 8 ans d'expérience</span> en tant que
              guide touristique professionnel, j'ai accompagné des centaines de voyageurs du monde entier
              dans la découverte de cette terre unique.
            </p>
            <p>
              Chaque circuit que je propose est le fruit de mon expérience sur le terrain.
              Je connais les meilleurs points de vue pour le coucher de soleil sur les baobabs,
              les villages les plus accueillants pour un repas traditionnel, et les sentiers secrets
              où observer les lémuriens dans leur habitat naturel.
            </p>
            <p>
              <span className="text-primary font-medium">Mi-Agent-MadaTours</span>, c'est la promesse
              d'un voyage authentique, sécurisé et inoubliable. Je m'engage personnellement à faire
              de votre séjour à Madagascar le voyage de votre vie.
            </p>
          </div>
        </motion.div>

        {/* Guarantees grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {guarantees.map((item, i) => (
            <motion.div
              key={item.title}
              className="glass-card rounded-2xl p-6 group hover:border-primary/30 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-foreground font-display text-2xl md:text-3xl mb-6">
            Prêt à vivre votre rêve malgache ?
          </p>
          <p className="text-muted-foreground font-body mb-8 max-w-lg mx-auto">
            Contactez-moi directement pour un devis gratuit et personnalisé.
            Réponse garantie sous 24h.
          </p>
          <a
            href="https://wa.me/261345469278?text=Bonjour%2C%20je%20souhaite%20organiser%20un%20voyage%20à%20Madagascar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body text-sm uppercase tracking-wider hover:opacity-90 transition-opacity glow-gold"
          >
            Contactez-moi sur WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
