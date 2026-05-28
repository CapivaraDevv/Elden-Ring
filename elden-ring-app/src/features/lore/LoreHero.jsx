import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: "easeOut", delay },
});

export default function LoreHero() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-bg-deep px-6 py-20 gap-6">
      <motion.p
        className="hero-title text-xl text-gold-dim italic text-center max-w-2xl"
        style={{ animation: "none" }}
        {...fadeUp(0)}
      >
        No princípio, houve a Vontade. E da Vontade, nasceu a Ordem.
      </motion.p>

      <motion.div
        className="w-16 h-px bg-gold opacity-40"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      />

      <motion.h1
        className="hero-title text-3xl text-gold font-bold text-center"
        style={{ animation: "none" }}
        {...fadeUp(0.3)}
      >
        A Era da Térvore
      </motion.h1>

      <motion.p
        className="hero-text text-gold text-center leading-relaxed max-w-2xl"
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
    </section>
  );
}
