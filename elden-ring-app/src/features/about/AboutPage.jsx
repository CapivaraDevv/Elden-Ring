import { motion } from "framer-motion";

const stack = [
  "React 19",
  "React Router 7",
  "Framer Motion 12",
  "Tailwind CSS 3",
  "Vite 8",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: "easeOut", delay },
});

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-bg-deep flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-2xl w-full flex flex-col gap-10">
        <motion.div {...fadeUp(0)} className="text-center">
          <p className="hero-text text-[10px] text-gold-dim tracking-[0.5em] uppercase mb-4 opacity-60">
            Este projeto
          </p>
          <h1
            className="hero-title text-4xl md:text-5xl text-gold-light mb-6"
            style={{ animation: "none" }}
          >
            Sobre
          </h1>
          <div className="w-16 h-px bg-gold/30 mx-auto" />
        </motion.div>

        <motion.p
          {...fadeUp(0.2)}
          className="hero-text text-sm text-text-main leading-relaxed text-center opacity-80"
        >
          Um site de fã dedicado ao universo de{" "}
          <span className="text-gold">Elden Ring</span>, desenvolvido com o objetivo
          de explorar e homenagear a riqueza narrativa das Terras Intermédias.
          Todo o conteúdo é de caráter educativo e sem fins lucrativos.
        </motion.p>

        <motion.div
          {...fadeUp(0.35)}
          className="border border-border bg-bg-card p-8 flex flex-col gap-5"
        >
          <h2
            className="hero-title text-lg text-gold"
            style={{ animation: "none" }}
          >
            Stack
          </h2>
          {stack.map((tech) => (
            <div key={tech} className="flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-gold/50" />
              <span className="hero-text text-xs text-text-dim tracking-widest">{tech}</span>
            </div>
          ))}
        </motion.div>

        <motion.p
          {...fadeUp(0.5)}
          className="hero-text text-[9px] text-gold-dim tracking-[0.3em] uppercase text-center opacity-35"
        >
          Elden Ring © 2022 FromSoftware · Bandai Namco — Fan site não oficial
        </motion.p>
      </div>
    </main>
  );
}
