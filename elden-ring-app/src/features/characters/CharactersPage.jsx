import { useRef, useState, useMemo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import PageTransition from "../../components/layout/PageTransition";

const characters = [
  { name: "Melina",           role: "A Guia dos Maculados",         epithet: "Cinzas & Promessa",   color: "#e8884c", description: "Filha de Marika e guia misteriosa que encontra o Maculado em sua jornada. Oferece seu dedo como lenha para a Chama Ruinante, sacrificando a própria existência para que o Maculado possa ascender." },
  { name: "Ranni, a Bruxa",   role: "A Lua Cheia",                  epithet: "Noite & Liberdade",   color: "#6ab4d4", description: "Semideusa que rejeitou o destino da Ordem Dourada. Orquestrou a Noite das Facas Negras, matando seu próprio corpo divino para escapar do controle da Grande Vontade. Busca escrever um destino de liberdade para as Terras Intermédias." },
  { name: "Radahn",           role: "O General",         epithet: "Gravidade & Glória",  color: "#c45050", description: "O maior guerreiro das Terras Intermédias, domador de cavalos e estudante de gravitação com Ranni. Prendeu as estrelas no céu para proteger o destino de sua irmã. Agora consumido pela Podridão Escarlate após o conflito com Malenia." },
  { name: "Malenia",          role: "A Lâmina de Miquella",         epithet: "Florescer & Ruína",   color: "#c87a60", description: "Nasceu maldita pela Podridão Escarlate, ainda assim se tornou a guerreira mais temida das Terras Intermédias. Nunca foi derrotada. Seu encontro com Radahn devastou Caelid inteira e ela floresceu pela primeira vez." },
  { name: "Messmer",          role: "O Portador da Chama Proibida", epithet: "Serpente & Silêncio", color: "#d45020", description: "Filho apagado da história de Marika, exilado na Terra da Sombra. Empunha uma chama de serpente que não conhece misericórdia — devora inimigos e sua própria carne com igual fervor. Guardião implacável dos segredos mais obscuros da deusa." },
  { name: "Marika, a Eterna", role: "Deusa e Rainha",               epithet: "Anel & Fratura",      color: "#f0d455", description: "Portadora do Elden Ring e rainha imortal das Terras Intermédias. Destruiu o próprio Anel para iniciar a Era das Estrelas — ou foi forçada a fazê-lo. Seu verdadeiro motivo e a extensão de seu sofrimento permanecem entre os maiores mistérios do jogo." },
  { name: "Godfrey",          role: "O Primeiro Lorde Elden",       epithet: "Punho & Exílio",      color: "#c88a38", description: "O primeiro humano a se tornar Lorde Elden, companheiro de guerra de Marika. Foi exilado após ser despojado da Graça ao completar todas as conquistas. Retorna como Hoarah Loux para reivindicar o que um dia foi seu." },
  { name: "Miquella",         role: "O Empático",                   epithet: "Sonho & Cura",        color: "#a8c898", description: "Filho de Marika, irmão gêmeo de Malenia. Nasceu maldito pela eterna infância e dedicou sua vida a curar a irmã. De intelecto divino, criou o Árvore de Haligtree — um substituto para a Térvore livre da influência de Marika." },
];

export default function CharactersPage() {
  const containerRef = useRef(null);  
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: containerRef });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 20, mass: 0.3 });

  return (
    <PageTransition>
      <main
        ref={containerRef}
        className="relative w-full min-h-screen overflow-hidden bg-[#0a0806] text-[#e8d9b0]"
      >
        {/* GRAIN + VIGNETTE */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[60] mix-blend-overlay opacity-[0.08]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.7'/></svg>\")",
          }}
        />
        <div className="pointer-events-none fixed inset-0 z-[55] bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.85)_100%)]" />

        {/* SCROLL PROGRESS BAR */}
        <motion.div
          aria-hidden
          style={{ scaleX: progress, transformOrigin: "0% 50%" }}
          className="fixed top-0 left-0 right-0 z-[70] h-[2px] bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"
        />

        {/* HERO */}
        <Hero reduce={reduce} />

        {/* ROSTER */}
        <section className="relative z-10 px-6 md:px-12 lg:px-20 pb-40">
          <div className="mx-auto max-w-[1400px] grid grid-cols-12 gap-6">
            {/* Sticky index */}
            <aside className="hidden lg:block col-span-3 sticky top-24 self-start">
              <div className="text-[20px] tracking-[0.4em] uppercase text-[#c9a84c]/60 mb-6">
                Índice · {String(characters.length).padStart(2, "0")}
              </div>
              <ul className="space-y-3">
                {characters.map((c, i) => (
                  <IndexItem key={c.name} char={c} index={i} />
                ))}
              </ul>
            </aside>

            {/* Cards */}
            <div className="col-span-12 lg:col-span-9 flex flex-col gap-24 md:gap-32">
              {characters.map((c, i) => (
                <CharacterRow key={c.name} char={c} index={i} reduce={reduce} />
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER MARK */}
        <div className="relative z-10 border-t border-[#c9a84c]/15 py-10 text-center">
          <p className="text-[10px] tracking-[0.5em] uppercase text-[#c9a84c]/40">
            Elden Ring · Compêndio das Terras Intermédias
          </p>
        </div>
      </main>
    </PageTransition>
  );
}

/* ────────────────────────────── HERO ────────────────────────────── */
function Hero({ reduce }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={ref}
      className="relative h-[100vh] flex items-end overflow-hidden px-6 md:px-12 lg:px-20 pb-20"
    >
      {/* halo */}
      <motion.div
        aria-hidden
        style={{ scale, opacity }}
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(201,168,76,0.18),transparent_70%)]"
      />
      {/* horizon line */}
      <motion.div
        aria-hidden
        style={{ y }}
        className="absolute inset-x-0 top-1/2 -z-10 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent"
      />

      <motion.div style={{ y, opacity }} className="relative w-full max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="block w-12 h-px bg-[#c9a84c]/60" />
          <p className="text-[16px] tracking-[0.5em] uppercase text-[#c9a84c]/80">
            Figuras das Terras Intermédias
          </p>
        </div>

        <h1 className="font-serif italic font-light leading-[0.85] tracking-[-0.02em] text-[clamp(4rem,15vw,16rem)] text-[#e8d9b0]">
          Person
          <span className="text-[#c9a84c]">a</span>
          gens
        </h1>

        <div className="mt-10 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5 md:col-start-7">
            <p className="text-base md:text-lg leading-relaxed text-[#e8d9b0]/70 font-light">
              Oito vontades que dobraram o destino. Cada uma um fragmento do
              Elden Ring
            </p>
            <div className="mt-8 flex items-center gap-4 text-[10px] tracking-[0.4em] uppercase text-[#c9a84c]/60">
              <span>↓ Role para descer</span>
              <span className="block w-16 h-px bg-[#c9a84c]/40" />
              <span>{String(characters.length).padStart(2, "0")} entradas</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ──────────────────────────── INDEX ITEM ──────────────────────────── */
function IndexItem({ char, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <li>
      <a
        href={`#char-${index}`}
        className="group flex items-baseline gap-3 text-[#e8d9b0]/50 hover:text-[#e8d9b0] transition-colors duration-500"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span
          className="text-[20px] tabular-nums transition-colors duration-500"
          style={{ color: hovered ? char.color : `${char.color}66` }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-sm font-light tracking-wide">{char.name}</span>
        <span className="flex-1 h-px bg-current opacity-20 translate-y-[-3px]" />
      </a>
    </li>
  );
}

/* ──────────────────────────── ROW CARD ──────────────────────────── */
function CharacterRow({ char, index, reduce }) {
  const ref = useRef(null);
  const [hover, setHover] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const numY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [60, -60]);
  const lineScale = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

  const flipped = index % 2 === 1;

  return (
    <motion.article
      id={`char-${index}`}
      ref={ref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="relative group"
    >
      <div
        className={`relative grid grid-cols-12 gap-4 md:gap-8 items-start ${
          flipped ? "md:[direction:rtl]" : ""
        }`}
      >
        {/* GIANT NUMERAL */}
        <motion.div
          style={{ y: numY }}
          className="col-span-12 md:col-span-3 [direction:ltr]"
        >
          <div className="relative">
            <span
              className="block font-serif italic font-extralight text-[clamp(6rem,14vw,12rem)] leading-none text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(to bottom, ${char.color}b3, ${char.color}33, transparent)`,
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <motion.span
              aria-hidden
              style={{ scaleX: lineScale, transformOrigin: "0% 50%", backgroundColor: `${char.color}99` }}
              className="block h-px w-full mt-2"
            />
            <span
              className="block mt-4 text-[10px] tracking-[0.5em] uppercase"
              style={{ color: `${char.color}80` }}
            >
              {char.epithet}
            </span>
          </div>
        </motion.div>

        {/* CONTENT */}
        <div className="col-span-12 md:col-span-9 [direction:ltr]">
          <p
            className="text-[10px] tracking-[0.5em] uppercase mb-4"
            style={{ color: `${char.color}b3` }}
          >
            {char.role}
          </p>

          <h2 className="font-serif italic font-light leading-[0.9] tracking-[-0.015em] text-[clamp(2.5rem,7vw,6rem)] text-[#e8d9b0]">
            <SplitName name={char.name} hover={hover} color={char.color} />
          </h2>

          <div className="mt-8 grid grid-cols-12 gap-6">
            <div className="hidden md:block col-span-1">
              <motion.span
                aria-hidden
                animate={{ height: hover ? "100%" : "30%" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="block w-px"
                style={{ background: `linear-gradient(to bottom, ${char.color}b3, transparent)` }}
              />
            </div>
            <p className="col-span-12 md:col-span-9 text-base md:text-lg leading-[1.7] font-light text-[#e8d9b0]/70 max-w-[58ch]">
              {char.description}
            </p>
          </div>

          {/* meta footer */}
          <div
            className="mt-10 flex items-center gap-6 text-[10px] tracking-[0.4em] uppercase"
            style={{ color: `${char.color}66` }}
          >
            <span>Entrada {String(index + 1).padStart(2, "0")}</span>
            <span className="flex-1 h-px" style={{ background: `${char.color}26` }} />
            <button
              className="inline-flex items-center gap-3 transition-colors duration-300"
              style={{ color: hover ? char.color : "rgba(232,217,176,0.6)" }}
            >
              Ler crônica
              <span className="block w-6 h-px bg-current transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* split each letter for staggered hover lift */
function SplitName({ name, hover, color }) {
  const letters = useMemo(() => Array.from(name), [name]);
  return (
    <span className="inline-block whitespace-pre">
      {letters.map((l, i) => (
        <motion.span
          key={i}
          animate={{ y: hover ? -6 : 0, color: hover ? color : "#e8d9b0" }}
          transition={{ duration: 0.5, delay: i * 0.015, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
        >
          {l === " " ? " " : l}
        </motion.span>
      ))}
    </span>
  );
}
