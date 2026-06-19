import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../../components/layout/PageTransition";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: "easeOut", delay },
});

export default function NotFoundPage() {
  return (
    <PageTransition>
      <main className="w-full min-h-screen bg-bg-deep flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-2xl w-full flex flex-col items-center gap-10 text-center">
          <motion.div {...fadeUp(0)}>
            <p className="hero-text text-[10px] tracking-[0.4em] uppercase text-gold-dim opacity-60 mb-4">
              Erro 404
            </p>
            <h1 className="hero-title text-5xl md:text-6xl text-gold-light">
              Perdido nas Terras Intermédias
            </h1>
            <div className="w-16 h-px bg-gold/30 mx-auto mt-6" />
          </motion.div>

          <motion.p
            {...fadeUp(0.2)}
            className="hero-text text-sm text-text-main leading-relaxed opacity-70 max-w-md"
          >
            Esta página não existe ou foi consumida pela podridão.
            Retorne à luz dourada e encontre seu caminho de volta.
          </motion.p>

          <motion.div {...fadeUp(0.4)}>
            <Link
              to="/"
              className="inline-block border border-gold/40 px-10 py-3 hero-text text-[10px] tracking-[0.3em] uppercase text-gold-dim hover:border-gold hover:text-gold transition-colors duration-300"
            >
              Retornar ao Início
            </Link>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
}
