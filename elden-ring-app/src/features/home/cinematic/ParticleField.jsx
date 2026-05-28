import { motion } from "framer-motion";
import { useMemo } from "react";

const COUNT = 16;

export default function ParticleField() {
  const particles = useMemo(
    () =>
      Array.from({ length: COUNT }, (_, i) => ({
        id: i,
        x: 5 + Math.random() * 90,
        baseY: 25 + Math.random() * 65,
        size: 1 + Math.random() * 2.5,
        duration: 5 + Math.random() * 6,
        delay: Math.random() * 8,
        drift: (Math.random() - 0.5) * 50,
      })),
    []
  );

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.baseY}%`,
            width: p.size,
            height: p.size,
            background:
              "radial-gradient(circle, #e8c96a 0%, #c9a84c 60%, transparent 100%)",
          }}
          animate={{
            y: [0, -90],
            x: [0, p.drift],
            opacity: [0, 0.65, 0],
            scale: [0.4, 1.2, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
