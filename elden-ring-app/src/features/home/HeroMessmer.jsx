import { useRef, useMemo } from "react";
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import MessmerFundo from "../../assets/MessmerFundo.png";
import MessmerCorpo from "../../assets/MessmerSemFundo.png";
import MessmerFogo from "../../assets/MessmerLançaCobra.png";

const PARTICLE_COUNT = 14;



export default function HeroMessmer() {
  const sectionRef = useRef(null);
  const rafRef = useRef(null);
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const smoothX = useSpring(rawX, { stiffness: 55, damping: 22 });
  const smoothY = useSpring(rawY, { stiffness: 55, damping: 22 });

  // 3 camadas com velocidades diferentes — cria profundidade
  // const bgX    = useTransform(smoothX, [-1, 1], [-8,  8]);
  // const bgY    = useTransform(smoothY, [-1, 1], [-5,  5]);
  const bodyX  = useTransform(smoothX, [-1, 1], [-20, 20]);
  const bodyY  = useTransform(smoothY, [-1, 1], [-9,  9]);
  const fireX  = useTransform(smoothX, [-1, 1], [-30, 30]);
  const fireY  = useTransform(smoothY, [-1, 1], [-14, 14]);
  const scrollShift = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  const handleMouseMove = (e) => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      rawX.set(((e.clientX - rect.left) / rect.width  - 0.5) * 2);
      rawY.set(((e.clientY - rect.top)  / rect.height - 0.5) * 2);
    });
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full relative overflow-hidden py-16"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Coluna esquerda: texto */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col gap-6 z-10"
        >
          <p className="hero-text text-[9px] tracking-[0.5em] uppercase opacity-50"
             style={{ color: "rgb(var(--red-rune))" }}>
            Shadow of the Erdtree · Personagem
          </p>

          <h2 className="messmer-text text-6xl md:text-7xl leading-none"
              style={{ color: "rgb(var(--red-rune))" }}>
            Messmer
          </h2>

          <p className="goth-text text-xl md:text-2xl leading-tight opacity-80"
             style={{ color: "rgb(var(--red-rune))" }}>
            O Portador da Chama Proibida
          </p>

          <div className="w-12 h-px opacity-30" style={{ background: "rgb(var(--red-rune))" }} />

          <p className="hero-text text-sm text-text-dim leading-relaxed max-w-sm">
            Filho apagado da história de Marika, exilado na Terra da Sombra.
            Empunha uma chama de serpente que devora tudo o que toca — inimigos,
            memórias e sua própria carne. Guardião implacável dos segredos mais
            obscuros da deusa.
          </p>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/personagens")}
            className="self-start mt-2 px-8 py-3 hero-text text-[10px] tracking-[0.4em] uppercase transition-colors duration-300"
            style={{
              color: "rgb(var(--red-rune))",
              border: "1px solid rgba(var(--red-rune), 0.3)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(139,26,26,0.07)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            Ver Personagens
          </motion.button>
        </motion.div>

        {/* Coluna direita: imagem com 2 camadas de parallax */}
        <div
          className="relative h-[480px] md:h-[580px]"
          style={{
            maskImage:
              "radial-gradient(ellipse 82% 90% at 50% 42%, black 35%, transparent 75%), linear-gradient(to top, transparent 0%, black 35%)",
            maskComposite: "intersect",
            WebkitMaskImage:
              "radial-gradient(ellipse 82% 90% at 50% 42%, black 35%, transparent 75%), linear-gradient(to top, transparent 0%, black 35%)",
            WebkitMaskComposite: "source-in",
          }}
        >

          {/* Camada 1 — corpo */}
          <motion.img
            src={MessmerFundo}
            alt="Messmer"
            className="absolute inset-0 blur-sm w-full h-full object-contain will-change-transform"
            style={{ x: bodyX, y: bodyY, translateY: scrollShift }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.15 }}
          />

          {/* Camada 1 — corpo */}
          <motion.img
            src={MessmerCorpo}
            alt="Messmer"
            className="absolute inset-0 blur-md w-full h-full object-contain will-change-transform"
            style={{ x: bodyX, y: bodyY, translateY: scrollShift }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.15 }}
          />

          {/* Camada 2 — fogo (mais rápido) */}
          <motion.img
            src={MessmerFogo}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-contain will-change-transform"
            style={{ x: fireX, y: fireY, translateY: scrollShift }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
          />

        </div>
      </div>
    </section>
  );
}
