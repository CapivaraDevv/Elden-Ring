import { useRef } from "react";
import { motion } from "framer-motion";
import PageTransition from "../../components/layout/PageTransition";

const locations = [
  {
    name: "Limgrave",
    detail: "Região inicial",
    description:
      "A terra de chegada dos Maculados. Campos dourados, ruínas antigas e o Castelo Tempestoso dominam a paisagem. É aqui que a jornada começa sob a luz tênue da Graça.",
  },
  {
    name: "Liurnia dos Lagos",
    detail: "Domínio dos magos",
    description:
      "Um vasto lago encoberto por névoa mágica, lar da Academia de Raya Lucaria e de bruxas que estudam as estrelas. O domínio da semideusa Rennala, Rainha da Lua Cheia.",
  },
  {
    name: "Caelid",
    detail: "Terra corrompida",
    description:
      "Devastada pela Podridão Escarlate liberada no conflito entre Malenia e Radahn. Um wasteland de vermelho e cinza onde criaturas deformadas vagam sem fim.",
  },
  {
    name: "Planalto de Altus",
    detail: "Caminho para a capital",
    description:
      "Os planaltos dourados que conduzem à capital Leyndell. Terra fértil sob a benção da Térvore, guardada por legiões reais e antigos cavaleiros.",
  },
  {
    name: "Leyndell",
    detail: "Capital real",
    description:
      "A capital das Terras Intermédias, construída ao redor de uma asa de dragão fossilizada. Sede do poder da Ordem Dourada, cercada por muralhas eternas e guardiões imortais.",
  },
  {
    name: "Cumes dos Gigantes",
    detail: "Topo do mundo",
    description:
      "Os picos gelados onde os Gigantes foram subjugados por Godfrey, o Primeiro Lorde. Um cemitério de titãs varrido por ventos eternos e neve que nunca descansa.",
  },
  {
    name: "Farum Azula em Ruínas",
    detail: "Cidade suspensa no tempo",
    description:
      "Uma cidade flutuante suspensa entre tempestades eternas, onde o tempo não avança. Lar de Maliketh, o Cão Negro, guardião da Runa da Morte.",
  },
  {
    name: "Terra da Sombra",
    detail: "Além do Véu — DLC",
    description:
      "Um reino oculto além do véu de Marika, onde os segredos mais obscuros da deusa foram enterrados. Governado por Messmer e suas legiões da chama de serpente.",
  },
];

function LocationCard({ loc, index }) {
  const cardRef = useRef(null);
  const overlayRef = useRef(null);
  const rafRef = useRef(null);

  const handleMouseMove = (e) => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      if (!cardRef.current || !overlayRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const gradient = `radial-gradient(circle at ${x}px ${y}px, transparent 0px, rgba(8,6,4,0.97) 130px)`;
      overlayRef.current.style.maskImage = gradient;
      overlayRef.current.style.webkitMaskImage = gradient;
    });
  };

  const handleMouseLeave = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    if (overlayRef.current) {
      overlayRef.current.style.maskImage = "none";
      overlayRef.current.style.webkitMaskImage = "none";
    }
  };

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.06 }}
      className="relative p-8 border border-border bg-bg-card hover:border-gold/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-crosshair"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span className="hero-text text-[9px] text-gold-dim tracking-[0.4em] uppercase opacity-60">
        {loc.detail}
      </span>
      <h2
        className="hero-title text-xl text-gold mt-2 mb-4"
        style={{ animation: "none" }}
      >
        {loc.name}
      </h2>
      <p className="text-sm text-text-dim leading-relaxed">{loc.description}</p>

      {/* Overlay escuro — esconde o conteúdo; mask-image abre o círculo no cursor */}
      <div
        ref={overlayRef}
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(8,6,4,0.97)" }}
      />
    </motion.article>
  );
}

export default function LocationsPage() {
  return (
    <PageTransition>
      <main className="w-full min-h-screen bg-bg-deep px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center mb-16"
          >
            <div className="mx-auto w-fit">
              <h1
                className="hero-title text-3xl md:text-4xl text-gold-light mb-6"
                style={{ animation: "none" }}
              >
                Terras Intermédias
              </h1>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ transformOrigin: "center" }}
                className="w-full h-px bg-gold/20 mx-auto mt-4"
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {locations.map((loc, i) => (
              <LocationCard key={loc.name} loc={loc} index={i} />
            ))}
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
