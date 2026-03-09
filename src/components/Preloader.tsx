import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 600);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {progress <= 100 && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
          exit={{
            clipPath: "inset(0 50% 0 50%)",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Ravinala SVG */}
          <motion.svg
            viewBox="0 0 200 300"
            className="w-32 h-48 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Trunk */}
            <motion.path
              d="M95 290 L95 150 Q95 140 100 140 Q105 140 105 150 L105 290"
              fill="none"
              stroke="hsl(38, 55%, 55%)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: progress / 100 }}
              transition={{ duration: 0.1 }}
            />
            {/* Fan leaves */}
            {[-60, -40, -20, 0, 20, 40, 60].map((angle, i) => (
              <motion.path
                key={i}
                d={`M100 145 Q${100 + angle * 1.5} ${80 - Math.abs(angle) * 0.3} ${100 + angle * 2} ${50 - Math.abs(angle) * 0.2}`}
                fill="none"
                stroke="hsl(38, 55%, 55%)"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: Math.max(0, (progress - 40) / 60),
                  opacity: progress > 40 ? 1 : 0,
                }}
                transition={{ duration: 0.1 }}
              />
            ))}
          </motion.svg>

          {/* Progress text */}
          <motion.p
            className="font-display text-primary text-lg tracking-[0.3em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Madagascar
          </motion.p>

          {/* Progress bar */}
          <div className="w-48 h-px bg-border mt-4 overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
