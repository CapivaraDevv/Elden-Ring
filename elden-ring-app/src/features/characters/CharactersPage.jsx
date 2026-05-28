import { motion } from "framer-motion";

const characters = [
  {
    name: "Melina",
    role: "A Guia dos Maculados",
    description:
      "Filha de Marika e guia misteriosa que encontra o Maculado em sua jornada. Oferece seu dedo como lenha para a Chama Ruinante, sacrificando a própria existência para que o Maculado possa ascender.",
  },
  {
    name: "Ranni, a Bruxa",
    role: "A Lua Cheia",
    description:
      "Semideusa que rejeitou o destino da Ordem Dourada. Orquestrou a Noite da Maré Negra, matando seu próprio corpo divino para escapar do controle da Grande Vontade. Busca escrever um destino de liberdade para as Terras Intermédias.",
  },
  {
    name: "Radahn",
    role: "Geral dos Escarlates",
    description:
      "O maior guerreiro das Terras Intermédias, domador de cavalos e estudante de gravitação com Ranni. Prendeu as estrelas no céu para proteger o destino de sua irmã. Agora consumido pela Podridão Escarlate após o conflito com Malenia.",
  },
  {
    name: "Malenia",
    role: "A Lâmina de Miquella",
    description:
      "Nasceu maldita pela Podridão Escarlate, ainda assim se tornou a guerreira mais temida das Terras Intermédias. Nunca foi derrotada. Seu encontro com Radahn devastou Caelid inteira e ela floresceu pela primeira vez.",
  },
  {
    name: "Messmer",
    role: "O Portador da Chama Proibida",
    description:
      "Filho apagado da história de Marika, exilado na Terra da Sombra. Empunha uma chama de serpente que não conhece misericórdia — devora inimigos e sua própria carne com igual fervor. Guardião implacável dos segredos mais obscuros da deusa.",
  },
  {
    name: "Marika, a Eterna",
    role: "Deusa e Rainha",
    description:
      "Portadora do Elden Ring e rainha imortal das Terras Intermédias. Destruiu o próprio Anel para iniciar a Era das Estrelas — ou foi forçada a fazê-lo. Seu verdadeiro motivo e a extensão de seu sofrimento permanecem entre os maiores mistérios do jogo.",
  },
  {
    name: "Godfrey",
    role: "O Primeiro Lorde Elden",
    description:
      "O primeiro humano a se tornar Lorde Elden, companheiro de guerra de Marika. Foi exilado após ser despojado da Graça ao completar todas as conquistas. Retorna como Hoarah Loux para reivindicar o que um dia foi seu.",
  },
  {
    name: "Miquella",
    role: "O Empático",
    description:
      "Filho de Marika, irmão gêmeo de Malenia. Nasceu maldito pela eterna infância e dedicou sua vida a curar a irmã. De intelecto divino, criou o Árvore de Haligtree — um substituto para a Térvore livre da influência de Marika.",
  },
];

export default function CharactersPage() {
  return (
    <main className="w-full min-h-screen bg-bg-deep px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <p className="hero-text text-[10px] text-gold-dim tracking-[0.5em] uppercase mb-4 opacity-60">
            Figuras das Terras Intermédias
          </p>
          <h1
            className="hero-title text-4xl md:text-5xl text-gold-light mb-6"
            style={{ animation: "none" }}
          >
            Personagens
          </h1>
          <div className="w-16 h-px bg-gold/30 mx-auto" />
        </motion.div>

        <div className="flex flex-col gap-5">
          {characters.map((char, i) => (
            <motion.article
              key={char.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className="flex gap-6 p-7 border border-border bg-bg-card hover:border-gold/40 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-px bg-gold/25 self-stretch" />
              <div>
                <span className="hero-text text-[9px] text-gold-dim tracking-[0.4em] uppercase opacity-60">
                  {char.role}
                </span>
                <h2
                  className="hero-title text-xl text-gold mt-2 mb-3"
                  style={{ animation: "none" }}
                >
                  {char.name}
                </h2>
                <p className="text-sm text-text-dim leading-relaxed">{char.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
