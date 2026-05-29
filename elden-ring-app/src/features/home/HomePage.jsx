import { motion } from "framer-motion";
import HomeCards from "./HomeCards";
import HeroMessmer from "./HeroMessmer";
import CinematicHero from "./cinematic/CinematicHero";
import PageTransition from "../../components/layout/PageTransition";

export default function HomePage() {
  return (
    <PageTransition>
    <div className="flex flex-col items-center">
      <CinematicHero />

      <section className="w-full px-6 py-20">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-center"
          >
            <p className="hero-text text-[10px] text-gold-dim tracking-[0.5em] uppercase opacity-60 mb-3">
              O Universo
            </p>
            <h2
              className="hero-title text-3xl text-gold-light"
              style={{ animation: "none" }}
            >
              Fragmentos das Terras Intermédias
            </h2>
          </motion.div>

          <HomeCards />
        </div>
      </section>

      <div className="w-full h-px bg-[linear-gradient(90deg,transparent,#8b1a1a,transparent)]" />

      <div className="w-full max-w-6xl py-16 px-6">
        <HeroMessmer />
      </div>

      <div className="w-full h-px bg-[linear-gradient(90deg,transparent,#8b1a1a,transparent)]" />
    </div>
    </PageTransition>
  );
}
