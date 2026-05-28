import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";
import FogLayer from "./FogLayer";
import ParticleField from "./ParticleField";
import HeroContent from "./HeroContent";
import GrainOverlay from "./GrainOverlay";

export default function CinematicHero() {
  const sectionRef = useRef(null);
  const rafPendingRef = useRef(false);

  // Scroll: conteúdo some ao rolar
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  // Mouse parallax — valores normalizados -1 a 1
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const smoothX = useSpring(rawX, { stiffness: 55, damping: 22 });
  const smoothY = useSpring(rawY, { stiffness: 55, damping: 22 });

  // Camadas em velocidades diferentes criam ilusão de profundidade
  const glowX = useTransform(smoothX, [-1, 1], [-55, 55]);
  const glowY = useTransform(smoothY, [-1, 1], [-35, 35]);
  const fogOffsetX = useTransform(smoothX, [-1, 1], [-18, 18]);
  const contentX = useTransform(smoothX, [-1, 1], [-10, 10]);
  const contentY = useTransform(smoothY, [-1, 1], [-7, 7]);

  const handleMouseMove = (e) => {
    if (rafPendingRef.current) return;
    rafPendingRef.current = true;
    const cx = e.clientX;
    const cy = e.clientY;
    requestAnimationFrame(() => {
      rafPendingRef.current = false;
      const { innerWidth, innerHeight } = window;
      rawX.set((cx / innerWidth - 0.5) * 2);
      rawY.set((cy / innerHeight - 0.5) * 2);
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-bg-deep"
      onMouseMove={handleMouseMove}
    >
      {/* Gradiente vertical */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-deep via-transparent to-bg-deep pointer-events-none" />

      {/* Vignette radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 75% at 50% 50%, transparent 25%, rgba(8,6,4,0.9) 100%)",
        }}
      />

      {/* Glow central — camada mais "lenta" no parallax */}
      <motion.div
        className="absolute top-1/2 left-1/2 pointer-events-none"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          width: 820,
          height: 520,
          background:
            "radial-gradient(ellipse, rgba(201,168,76,0.3) 0%, transparent 68%)",
          opacity: 0.2,
        }}
      />

      {/* Névoa com leve offset de mouse */}
      <motion.div className="absolute inset-0" style={{ x: fogOffsetX }}>
        <FogLayer />
      </motion.div>

      <ParticleField />
      <GrainOverlay />

      {/* Conteúdo — some no scroll + leve parallax de mouse */}
      <motion.div
        className="relative z-10 w-full"
        style={{ opacity: contentOpacity, x: contentX, y: contentY }}
      >
        <HeroContent />
      </motion.div>

      {/* Fade na base para a próxima seção */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg-deep to-transparent pointer-events-none" />

    </section>
  );
}
