import { motion } from "framer-motion";
import { MapPin, Globe, Shield } from "lucide-react";

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
          Mada<span className="text-foreground">Tours</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Destinations", href: "#destinations" },
            { label: "Itinéraire", href: "#itineraire" },
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
          <h3 className="font-display text-2xl text-gradient-gold mb-4">MadaTours</h3>
          <p className="text-muted-foreground text-sm font-body leading-relaxed">
            Votre partenaire de confiance pour découvrir les trésors cachés de Madagascar.
            Circuits sur mesure depuis 2015.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg text-foreground mb-4">Informations</h4>
          <div className="space-y-3">
            {[
              { icon: MapPin, text: "Antananarivo, Madagascar" },
              { icon: Globe, text: "www.madatours.mg" },
              { icon: Shield, text: "Licence tourisme N°432" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3 text-muted-foreground text-sm font-body">
                <item.icon className="w-4 h-4 text-primary" />
                {item.text}
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
          © 2026 MadaTours — Tous droits réservés • Mora Mora 🌿
        </p>
      </div>
    </div>
  </footer>
);

export { Navbar, Footer };
