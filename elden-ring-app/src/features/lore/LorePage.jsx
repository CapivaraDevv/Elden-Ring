import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, scale } from "framer-motion";
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

const THRESHOLDS = chapters.map((_, i) => i / chapters.length);

export default function LorePage() {
  const sectionRef = useRef(null);
  const [revealed, setRevealed] = useState(chapters.map(() => false));

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setRevealed((prev) => {
      const next = chapters.map((_, i) => prev[i] || latest >= THRESHOLDS[i]);
      if (next.every((v, i) => v === prev[i])) return prev;
      return next;
    });
  });

  return (
    <PageTransition>
      <main>
        <LoreHero />

        <section ref={sectionRef} className="w-full bg-bg-deep px-6 py-24">
          <div className="max-w-3xl mx-auto flex flex-col gap-16">

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <p className="hero-text text-[20px] text-gold tracking-[0.5em] uppercase ">
                Fragmentos da história
              </p>
              <motion.div 
                initial={{ scaleX: 0}}
                whileInView={{ scaleX: 1}}
                viewport={{ once: true }} 
                transition={{
                  duration: 2,
                  ease: [0.22, 1, 0.36, 1],
                }} 
                style={{ transformOrigin: "center"}}
                className="w-[310px] h-px bg-gold/20 mx-auto mt-4" 
              />
            </motion.div>

            <div className="flex gap-10">

              {/* Timeline: track + checkpoints + connectors */}
              <div className="flex-shrink-0 flex flex-col items-center" style={{ width: 20 }}>
                {chapters.map((_, i) => (
                  <div key={i} className="flex flex-col items-center" style={{ flex: 1 }}>
                    {/* Checkpoint diamond */}
                    <motion.div
                      className="flex-shrink-0"
                      style={{ width: 11, height: 11, rotate: 45, border: "1px solid" }}
                      animate={{
                        backgroundColor: revealed[i]
                          ? "rgba(201,168,76,0.75)"
                          : "rgba(8,6,4,1)",
                        borderColor: revealed[i]
                          ? "rgba(201,168,76,1)"
                          : "rgba(201,168,76,0.2)",
                        boxShadow: revealed[i]
                          ? "0 0 10px rgba(201,168,76,0.5)"
                          : "none",
                      }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Connector line between checkpoints */}
                    {i < chapters.length - 1 && (
                      <div className="relative flex-1 my-2" style={{ width: 1, background: "rgba(201,168,76,0.1)" }}>
                        <motion.div
                          className="absolute top-0 left-0 w-full origin-top"
                          style={{ background: "rgba(201,168,76,0.55)" }}
                          animate={{ scaleY: revealed[i + 1] ? 1 : 0 }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Chapters */}
              <div className="flex flex-col gap-16 flex-1">
                {chapters.map((chapter, i) => (
                  <motion.article
                    key={chapter.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={revealed[i] ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="min-h-[100px]"
                  >
                    <h2
                      className="hero-title text-xl text-gold mb-4"
                      style={{ animation: "none" }}
                    >
                      {chapter.title}
                    </h2>
                    <p className="hero-text text-sm text-text-main leading-relaxed opacity-80">
                      {chapter.text}
                    </p>
                  </motion.article>
                ))}
              </div>

            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
