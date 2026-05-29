import { useRef, useMemo } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useNavigate } from "react-router-dom";
import MessmerFundo from "../../assets/MessmerFundo.png";
import MessmerCorpo from "../../assets/MessmerSemFundo.png";
import MessmerFogo from "../../assets/MessmerLançaCobra.png";

const PARTICLE_COUNT = 14;

export default function HeroMessmer() {
  const sectionRef = useRef(null);
  const rafRef = useRef(null);
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const smoothX = useSpring(rawX, { stiffness: 55, damping: 22 });
  const smoothY = useSpring(rawY, { stiffness: 55, damping: 22 });

  const auraX = useTransform(smoothX, [-1, 1], [-6, 6]);
  const auraY = useTransform(smoothY, [-1, 1], [-4, 4]);
  const bodyX = useTransform(smoothX, [-1, 1], [-20, 20]);
  const bodyY = useTransform(smoothY, [-1, 1], [-9, 9]);
  const fireX = useTransform(smoothX, [-1, 1], [-34, 34]);
  const fireY = useTransform(smoothY, [-1, 1], [-16, 16]);
  const fireRot = useTransform(smoothX, [-1, 1], [-2.5, 2.5]);

  const scrollShift = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0.4]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.98]);

  const embers = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 1 + Math.random() * 2.5,
        delay: Math.random() * 6,
        duration: 6 + Math.random() * 6,
        drift: (Math.random() - 0.5) * 60,
      })),
    []
  );

  const handleMouseMove = (e) => {
    if (prefersReducedMotion) return;
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      const nx = (e.clientX - rect.left) / rect.width;
      const ny = (e.clientY - rect.top) / rect.height;
      rawX.set((nx - 0.5) * 2);
      rawY.set((ny - 0.5) * 2);
      glowX.set(nx * 100);
      glowY.set(ny * 100);
    });
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
    glowX.set(50);
    glowY.set(50);
  };

  // const glowBackground = useTransform(
  //   [glowX, glowY],
  //   ([x, y]) =>
  //     `radial-gradient(420px circle at ${x}% ${y}%, rgba(180,30,30,0.28), transparent 60%)`
  // );

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full relative py-20 overflow-hidden"
      aria-labelledby="messmer-title"
    >
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 z-0 blur-3xl w-72 h-72 rounded-full bg-red-700/40"
      />
      {/* <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: glowBackground }}
      /> */}

      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col gap-6 z-10"
        >
          <p
            className="hero-text text-[10px] tracking-[0.55em] uppercase opacity-60"
            style={{ color: "rgb(var(--red-rune))" }}
          >
            Shadow of the Erdtree · Personagem
          </p>

          <h2
            id="messmer-title"
            className="messmer-text text-7xl md:text-8xl leading-[0.85] tracking-tight mix-blend-screen"
            style={{ color: "rgb(var(--red-rune))" }}
          >
            Messmer
          </h2>

          <p
            className="goth-text text-xl md:text-2xl leading-tight opacity-80"
            style={{ color: "rgb(var(--red-rune))" }}
          >
            O Portador da Chama Proibida
          </p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="w-16 h-px origin-left opacity-40"
            style={{ background: "rgb(var(--red-rune))" }}
          />

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
            className="group relative self-start mt-2 px-9 py-3 hero-text text-[10px] tracking-[0.4em] uppercase overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-red-700/50"
            style={{
              color: "rgb(var(--red-rune))",
              border: "1px solid rgba(var(--red-rune), 0.3)",
            }}
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-red-900/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
            <span className="relative">Ver Personagens</span>
          </motion.button>
        </motion.div>

        <div className="relative h-[480px] md:h-[600px]">
          <div
            className="absolute inset-0"
            style={{
              maskImage:
                "radial-gradient(ellipse 85% 92% at 50% 45%, black 40%, transparent 78%), linear-gradient(to top, transparent 2%, black 30%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 85% 92% at 50% 45%, black 40%, transparent 78%), linear-gradient(to top, transparent 2%, black 30%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
            }}
          >
            <motion.img
              src={MessmerFundo}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-contain blur-2xl opacity-70 will-change-transform pointer-events-none"
              style={{ x: auraX, y: auraY, translateY: scrollShift }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.7 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: "easeOut" }}
            />

            <motion.img
              src={MessmerCorpo}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-contain blur-lg will-change-transform pointer-events-none"
              style={{ x: bodyX, y: bodyY, translateY: scrollShift }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.85 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut", delay: 0.15 }}
            />

            <motion.img
              src={MessmerCorpo}
              alt="Messmer, portador da chama proibida"
              className="absolute inset-0 w-full h-full object-contain will-change-transform"
              style={{ x: bodyX, y: bodyY, translateY: scrollShift }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
            />

            <motion.img
              src={MessmerFogo}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-contain will-change-transform mix-blend-screen pointer-events-none"
              style={{ x: fireX, y: fireY, rotate: fireRot, translateY: scrollShift }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeOut", delay: 0.35 }}
            />

            {!prefersReducedMotion &&
              embers.map((e) => (
                <motion.span
                  key={e.id}
                  aria-hidden="true"
                  className="absolute bottom-0 rounded-full bg-red-500/80 blur-[1px] pointer-events-none"
                  style={{
                    left: `${e.left}%`,
                    width: e.size,
                    height: e.size,
                    boxShadow: "0 0 8px rgba(220,40,40,0.8)",
                  }}
                  initial={{ y: 0, opacity: 0 }}
                  animate={{
                    y: -460,
                    x: e.drift,
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: e.duration,
                    delay: e.delay,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
