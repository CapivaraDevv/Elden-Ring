import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TITLE = "Elden Ring";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay },
});

const titleContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};

const letterVariant = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] } },
};

function GoldDivider() {
  return (
    <svg
      width="260"
      height="24"
      viewBox="0 0 260 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="dLeft" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="100%" stopColor="rgba(201,168,76,0.8)" />
        </linearGradient>
        <linearGradient id="dRight" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(201,168,76,0.8)" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <line x1="0" y1="12" x2="113" y2="12" stroke="url(#dLeft)" strokeWidth="0.6" />
      <rect x="118" y="6" width="12" height="12" fill="rgba(201,168,76,0.5)" transform="rotate(45 124 12)" />
      <rect x="122" y="9" width="6" height="6" fill="rgba(201,168,76,0.3)" transform="rotate(45 125 12)" />
      <line x1="137" y1="12" x2="260" y2="12" stroke="url(#dRight)" strokeWidth="0.6" />
    </svg>
  );
}

export default function HeroContent() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center text-center px-6 py-16 max-w-4xl mx-auto">

      <motion.span
        {...fadeUp(0.1)}
        className="hero-text text-[10px] text-gold-dim tracking-[0.5em] uppercase mb-8 opacity-80"
      >
        FromSoftware · Bandai Namco · 2022
      </motion.span>

      <motion.h1
        className="hero-title text-gold-light mb-6 select-none whitespace-nowrap"
        style={{
          animation: "none",
          fontSize: "clamp(2.8rem, 8vw, 7rem)",
          textShadow:
            "0 0 20px rgba(232,201,106,0.5), 0 0 60px rgba(201,168,76,0.25), 0 0 120px rgba(201,168,76,0.12)",
        }}
        variants={titleContainer}
        initial="hidden"
        animate="visible"
      >
        {TITLE.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={letterVariant}
            style={{ display: char === " " ? "inline" : "inline-block" }}
          >
            {char === " " ? " " : char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        {...fadeUp(1.0)}
        className="hero-text text-sm md:text-base text-text-main max-w-3xl leading-[1.9] mb-12 opacity-65"
      >
        Nas Terras Intermédias, onde a Graça Dourada se fragmentou, o destino de
        um Maculado começa. Reúna os fragmentos. Ascenda ao trono. Torne-se o
        Lorde Prístino.
      </motion.p>

      <motion.button
        {...fadeUp(1.2)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => navigate("/lore")}
        className="relative px-14 py-4 hero-text text-[11px] tracking-[0.4em] uppercase text-gold border border-gold/30 overflow-hidden group"
      >
        <span
          className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"
          style={{ background: "rgba(201,168,76,0.07)" }}
        />
        <span
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{ boxShadow: "inset 0 0 24px rgba(201,168,76,0.08)" }}
        />
        <span className="relative z-10 text-lg">Iniciar Jornada</span>
      </motion.button>

    </div>
  );
}
