import { motion } from "framer-motion";
import LoreHero from "./LoreHero";
import PageTransition from "../../components/layout/PageTransition";

const chapters = [
  {
    title: "A Grande Ruína",
    text: "Quando Marika destruiu o Elden Ring, a Ordem Dourada começou a desmoronar. Os fragmentos do anel — as Grandes Runas — foram espalhados pelos semideuses, cada um reivindicando um pedaço do poder divino para si.",
  },
  {
    title: "A Guerra dos Semideuses",
    text: "O conflito entre os filhos de Marika dividiu as Terras Intermédias em regiões de guerra. Radahn bloqueou as estrelas no céu para proteger o destino de Ranni. Mohg busca erguer uma nova dinastia no sangue. Malenia e Radahn se destruíram mutuamente em Caelid.",
  },
  {
    title: "A Ranni e a Lua Cheia",
    text: "A bruxa Ranni traiu a Ordem Dourada ao orquestrar a Noite da Maré Negra — matou seu próprio corpo divino e fugiu para as estrelas. Seu objetivo: libertar as Terras Intermédias do controle da Grande Vontade e escrever um destino próprio.",
  },
  {
    title: "O Retorno dos Maculados",
    text: "Convocados pela Graça Dourada, os Maculados retornam das terras do exílio. São guerreiros caídos, destinados a se tornar o novo Senhor do Elden Ring — ou a se perder para sempre nas Terras Intermédias.",
  },
  {
    title: "A Terra da Sombra",
    text: "Além do Véu, existe um reino oculto onde os segredos mais antigos de Marika foram enterrados. Messmer, o filho apagado da história, guarda essa terra com uma chama de serpente que devora tudo — inimigos e sua própria carne.",
  },
];

export default function LorePage() {
  return (
    <PageTransition>
    <main>
      <LoreHero />

      <section className="w-full bg-bg-deep px-6 py-24">
        <div className="max-w-3xl mx-auto flex flex-col gap-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="hero-text text-[9px] text-gold-dim tracking-[0.5em] uppercase opacity-50">
              Fragmentos da história
            </p>
            <div className="w-16 h-px bg-gold/20 mx-auto mt-4" />
          </motion.div>

          {chapters.map((chapter, i) => (
            <motion.article
              key={chapter.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.07 }}
              className="border-l border-gold/20 pl-8"
            >
              <h2 className="hero-title text-xl text-gold mb-4" style={{ animation: "none" }}>
                {chapter.title}
              </h2>
              <p className="hero-text text-sm text-text-main leading-relaxed opacity-80">
                {chapter.text}
              </p>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
    </PageTransition>
  );
}
