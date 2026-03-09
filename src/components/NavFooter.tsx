import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Shield } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 glass-card"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-xl text-primary tracking-wide">
          Mi-Agent-<span className="text-foreground">MadaTours</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Destinations", href: "#destinations" },
            { label: "Régions", href: "#regions" },
            { label: "Itinéraire", href: "#itineraire" },
            { label: "Notre Expertise", href: "#experience" },
            { label: "À propos", href: "#about" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="glass-card px-5 py-2 rounded-full font-body text-xs text-primary uppercase tracking-wider hover:bg-primary/10 transition-colors"
        >
          Contact
        </a>
      </div>
    </motion.nav>
  );
};

const Footer = () => (
  <footer id="about" className="border-t border-border py-16 bg-night-gradient">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-display text-2xl text-gradient-gold mb-4">Mi-Agent-MadaTours</h3>
          <p className="text-muted-foreground text-sm font-body leading-relaxed">
            Votre guide touristique de confiance à Madagascar. Plus de 8 ans d'expérience
            pour vous faire découvrir les trésors cachés de la Grande Île.
            Circuits sur mesure, sécurité garantie, aventure assurée.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg text-foreground mb-4">Contact Direct</h4>
          <div className="space-y-3">
            {[
              { icon: MapPin, text: "Antananarivo, Madagascar" },
              { icon: Mail, text: "lalaharilalarak@gmail.com", href: "mailto:lalaharilalarak@gmail.com" },
              { icon: Phone, text: "+261 34 546 9278", href: "tel:+261345469278" },
              { icon: Shield, text: "Guide certifié & assuré" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3 text-muted-foreground text-sm font-body">
                <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                {item.href ? (
                  <a href={item.href} className="hover:text-primary transition-colors">{item.text}</a>
                ) : (
                  item.text
                )}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg text-foreground mb-4">Newsletter</h4>
          <p className="text-muted-foreground text-sm font-body mb-4">
            Recevez nos offres et inspirations de voyage.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 bg-secondary rounded-lg px-4 py-2 text-sm font-body text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none transition-colors"
            />
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-body hover:opacity-90 transition-opacity">
              OK
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-border text-center">
        <p className="text-muted-foreground text-xs font-body">
          © 2026 Mi-Agent-MadaTours — Tous droits réservés • Mora Mora 🌿
        </p>
      </div>
    </div>
  </footer>
);

export { Navbar, Footer };
