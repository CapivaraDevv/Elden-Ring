import { motion } from "framer-motion";
import FogLayer from "../home/cinematic/FogLayer";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: "easeOut", delay },
});

export default function LoreHero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-bg-deep px-6 py-20 gap-6 overflow-hidden">

      {/* Glow radial central */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 60%, rgba(201,168,76,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Vinheta superior */}
      <div
        className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(8,6,4,0.85) 0%, transparent 100%)",
        }}
      />

      <FogLayer />

      {/* Linha decorativa superior */}
      <motion.div
        className="flex items-center gap-4 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        <div className="w-12 h-px bg-gold/25" />
        <div className="w-1.5 h-1.5 rotate-45 border border-gold/40" />
        <div className="w-12 h-px bg-gold/25" />
      </motion.div>

      <motion.p
        className="hero-title text-xl text-gold-dim italic text-center max-w-2xl relative z-10"
        style={{ animation: "none" }}
        {...fadeUp(0)}
      >
        No princípio, houve a Vontade. E da Vontade, nasceu a Ordem.
      </motion.p>

      <motion.div
        className="w-16 h-px bg-gold opacity-40 relative z-10"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      />

      <motion.h1
        className="hero-title text-3xl text-gold font-bold text-center relative z-10"
        style={{ animation: "none" }}
        {...fadeUp(0.3)}
      >
        A Era da Térvore
      </motion.h1>

      <motion.p
        className="hero-text text-text-dim font-bold text-center leading-relaxed max-w-3xl relative z-10"
        {...fadeUp(0.6)}
      >
        Houve um tempo em que as Terras Intermédias eram banhadas por uma luz
        perpétua. O Elden Ring, um amálgama de runas concebido pela Grande
        Vontade, servia como a âncora da realidade. Dele, brotou a Térvore:
        uma árvore de ouro colossal que garantia vida, ordem e uma bênção que
        transcendia a própria morte. Sob o reinado da Rainha Marika, a Eterna,
        o destino era previsível e sagrado. A morte não era um fim, mas um
        retorno às raízes da árvore.
      </motion.p>

      {/* Linha decorativa inferior */}
      <motion.div
        className="flex items-center gap-4 mt-2 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <div className="w-36 h-px bg-gold/20" />
        <div className="w-1 h-1 rotate-45 bg-gold/30" />
        <div className="w-36 h-px bg-gold/20" />
      </motion.div>

      <motion.div
        className="flex items-center gap-4 mt-2 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <div className="relative w-36 h-36 left-28 rounded-full border border-gold/40" />
        <div className="relative w-36 h-36 -top-20 rounded-full border border-gold/40" />
        <div className="relative w-36 h-36 right-28 rounded-full border border-gold/40" />
      </motion.div>
    </section>
  );
}
