import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import tsingyHero from "@/assets/tsingy-hero.jpg";
import baobabSilhouette from "@/assets/baobab-silhouette.png";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const baobabY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse parallax for baobab
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      ref={ref}
      className="relative h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background layer - Tsingy image with blur */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <img
          src={tsingyHero}
          alt="Tsingy de Bemaraha"
          className="w-full h-[120%] object-cover blur-[2px] brightness-50"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
      </motion.div>

      {/* Middle layer - Text */}
      <motion.div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center"
        style={{ y: textY, opacity }}
      >
        <motion.p
          className="font-body text-primary tracking-[0.4em] uppercase text-sm mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Découvrez l'île continent
        </motion.p>
        <motion.h1
          className="font-display text-[clamp(3rem,12vw,10rem)] leading-none text-gradient-gold font-bold"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Madagascar
        </motion.h1>
        <motion.p
          className="font-body text-foreground/70 mt-6 text-lg max-w-md text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Une terre de merveilles, où la nature a écrit ses plus belles pages
        </motion.p>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <a
            href="#destinations"
            className="glass-card px-8 py-3 rounded-full font-body text-primary hover:bg-primary/10 transition-colors duration-300 tracking-wide text-sm uppercase"
          >
            Explorer
          </a>
        </motion.div>
      </motion.div>

      {/* Foreground - Baobab with mouse parallax */}
      <motion.div
        className="absolute bottom-0 right-[5%] z-20 w-[250px] md:w-[350px] lg:w-[400px] pointer-events-none"
        style={{
          y: baobabY,
          x: springX,
          rotateY: springX,
        }}
      >
        <motion.img
          src={baobabSilhouette}
          alt="Baobab"
          className="w-full h-auto drop-shadow-[0_0_30px_rgba(212,168,67,0.2)]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2 }}
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-primary/50 text-xs tracking-[0.3em] uppercase font-body">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
