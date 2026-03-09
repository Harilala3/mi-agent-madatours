import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Mail, Phone, X } from "lucide-react";

const contactOptions = [
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/261340000000", color: "bg-tropical" },
  { icon: Mail, label: "Email", href: "mailto:contact@madagascar-tours.mg", color: "bg-ocre" },
  { icon: Phone, label: "Appeler", href: "tel:+261340000000", color: "bg-primary" },
];

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen &&
          contactOptions.map((opt, i) => (
            <motion.a
              key={opt.label}
              href={opt.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 glass-card rounded-full px-4 py-2.5 hover:bg-secondary/50 transition-colors`}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 15,
                delay: i * 0.08,
              }}
            >
              <opt.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-body text-foreground">{opt.label}</span>
            </motion.a>
          ))}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg animate-pulse-gold"
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-primary-foreground" />
          ) : (
            <MessageCircle className="w-6 h-6 text-primary-foreground" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
};

export default FloatingContact;
