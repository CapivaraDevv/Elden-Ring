import { useParams, Link } from "react-router-dom";
import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import PageTransition from "../../components/layout/PageTransition";
import { characters } from "./charactersData";

export default function CharacterDetailPage() {
  const { slug } = useParams();
  const char = characters.find((c) => c.slug === slug);

  if (!char) {
    return (
      <PageTransition>
        <main className="min-h-screen bg-[#0a0806] text-[#e8d9b0] flex flex-col items-center justify-center gap-6">
          <p className="text-[#c9a84c]/60 tracking-[0.4em] uppercase text-sm">
            Personagem não encontrado
          </p>
          <Link
            to="/personagens"
            className="text-[10px] tracking-[0.4em] uppercase text-[#e8d9b0]/50 hover:text-[#c9a84c] transition-colors duration-300"
          >
            Voltar ao compêndio
          </Link>
        </main>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <main className="relative min-h-screen bg-[#0a0806] text-[#e8d9b0] overflow-hidden">
        {/* Grain */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[60] mix-blend-overlay opacity-[0.08]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.7'/></svg>\")",
          }}
        />
        <div>
          <div></div>
          <img
            src={char.img}
            alt=""
            className="absolute right-0 w-[650px] h-[650px]"
          />
        </div>
        <div className="pointer-events-none fixed inset-0 z-[55] bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.85)_100%)]" />

        <HeroSection char={char} />
        <ChronicleSection char={char} />
        <FooterNav char={char} />
      </main>
    </PageTransition>
  );
}

/* ─── HERO ─── */
function HeroSection({ char }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[85vh] flex flex-col justify-end px-6 md:px-16 lg:px-24 pb-20 overflow-hidden"
    >
      {/* colour halo */}
      <motion.div
        aria-hidden
        style={{ opacity }}
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 70% 60% at 50% 70%, ${char.color}22, transparent 70%)`,
          }}
        />
      </motion.div>

      {/* horizon line */}
      <motion.div
        aria-hidden
        style={{ y }}
        className="absolute inset-x-0 top-1/2 -z-10 h-px"
        style={{
          background: `linear-gradient(to right, transparent, ${char.color}55, transparent)`,
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative max-w-[1200px] mx-auto w-full"
      >
        {/* back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-12"
        >
          <Link
            to="/personagens"
            className="inline-flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-[#e8d9b0]/40 hover:text-[#c9a84c] transition-colors duration-300"
          >
            <span className="block w-8 h-px bg-current" />
            Compêndio
          </Link>
        </motion.div>

        {/* epithet */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[10px] tracking-[0.5em] uppercase mb-6"
          style={{ color: `${char.color}b3` }}
        >
          {char.epithet}
        </motion.p>

        {/* name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif italic font-light leading-[0.85] tracking-[-0.02em] text-[clamp(3.5rem,12vw,11rem)] text-[#e8d9b0]"
        >
          {char.name}
        </motion.h1>

        {/* role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 text-base md:text-lg font-light"
          style={{ color: `${char.color}99` }}
        >
          {char.role}
        </motion.p>
      </motion.div>
    </section>
  );
}

/* ─── CHRONICLE ─── */
function ChronicleSection({ char }) {
  return (
    <section className="relative z-10 px-6 md:px-16 lg:px-24 pb-40 pt-4">
      <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-8">
        {/* decorative numeral */}
        <div className="hidden lg:flex col-span-3 flex-col items-start pt-2">
          <span
            className="font-serif italic font-extralight text-[clamp(5rem,10vw,9rem)] leading-none text-transparent bg-clip-text select-none"
            style={{
              backgroundImage: `linear-gradient(to bottom, ${char.color}99, ${char.color}22, transparent)`,
            }}
          >
            §
          </span>
          <span
            className="mt-4 text-[10px] tracking-[0.5em] uppercase"
            style={{ color: `${char.color}55` }}
          >
            Crônica
          </span>
        </div>

        {/* text */}
        <motion.div
          className="col-span-12 lg:col-span-9"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              transformOrigin: "0% 50%",
              background: `linear-gradient(to right, ${char.color}99, transparent)`,
            }}
            className="h-px w-full mb-12"
          />

          {/* short description */}
          <p className="text-lg md:text-xl leading-[1.7] font-light text-[#e8d9b0]/80 mb-12 max-w-[65ch]">
            {char.description}
          </p>

          {/* full chronicle */}
          <div className="space-y-6">
            {char.chronicle.split("\n\n").map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-base md:text-lg leading-[1.85] font-light text-[#e8d9b0]/60 max-w-[65ch]"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── FOOTER NAV ─── */
function FooterNav({ char }) {
  const currentIndex = characters.findIndex((c) => c.slug === char.slug);
  const prev = characters[currentIndex - 1];
  const next = characters[currentIndex + 1];
  const [hoveredPrev, setHoveredPrev] = useState(false);
  const [hoveredNext, setHoveredNext] = useState(false);

  return (
    <footer className="relative z-10 border-t border-[#c9a84c]/15 px-6 md:px-16 lg:px-24 py-14">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        {prev ? (
          <Link
            to={`/personagens/${prev.slug}`}
            className="group flex items-center gap-4 text-[20px] tracking-[0.4em] uppercase transition-colors duration-300"
            style={{
              color: hoveredPrev ? prev.color : "rgba(232,217,176,0.4)",
            }}
            onMouseEnter={() => setHoveredPrev(true)}
            onMouseLeave={() => setHoveredPrev(false)}
          >
            <span className="block w-8 h-px bg-current transition-all duration-300 group-hover:w-14" />
            <span>{prev.name}</span>
          </Link>
        ) : (
          <div />
        )}

        <Link
          to="/personagens"
          className="text-[20px] tracking-[0.4em] uppercase text-[#c9a84c]/50 hover:text-[#c9a84c] transition-colors duration-300"
        >
          Índice
        </Link>

        {next ? (
          <Link
            to={`/personagens/${next.slug}`}
            className="group flex items-center gap-4 text-[20px] tracking-[0.4em] uppercase transition-colors duration-300"
            style={{
              color: hoveredNext ? next.color : "rgba(232,217,176,0.4)",
            }}
            onMouseEnter={() => setHoveredNext(true)}
            onMouseLeave={() => setHoveredNext(false)}
          >
            <span>{next.name}</span>
            <span className="block w-8 h-px bg-current transition-all duration-300 group-hover:w-14" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </footer>
  );
}
