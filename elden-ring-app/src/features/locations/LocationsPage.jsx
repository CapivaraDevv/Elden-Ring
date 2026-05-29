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
          <p className="hero-text text-[10px] text-gold-dim tracking-[0.5em] uppercase mb-4 opacity-60">
            Terras Intermédias
          </p>
          <h1
            className="hero-title text-4xl md:text-5xl text-gold-light mb-6"
            style={{ animation: "none" }}
          >
            Locais
          </h1>
          <div className="w-16 h-px bg-gold/30 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {locations.map((loc, i) => (
            <motion.article
              key={loc.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className="p-8 border border-border bg-bg-card hover:border-gold/40 hover:-translate-y-1 transition-all duration-300"
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
            </motion.article>
          ))}
        </div>
      </div>
    </main>
    </PageTransition>
  );
}
