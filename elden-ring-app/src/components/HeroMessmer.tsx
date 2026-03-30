import { useEffect, useRef, useState } from "react";
import MessmerFundo from "../assets/MessmerFundo.png";
import MessmerCorpo from "../assets/MessmerSemFundo.png";
import MessmerComFundo from "../assets/MessmerComfundo.png";
import MessmerFogo from "../assets/MessmerLançaCobra.png";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
}

export default function HeroMessmer() {
  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const scrollRef = useRef(0);

  // Entrada animada
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Partículas de fogo
  useEffect(() => {
    const generated = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: 30 + Math.random() * 40, // concentra no centro
      y: 60 + Math.random() * 30, // nasce na parte baixa
      size: 4 + Math.random() * 8,
      duration: 1.5 + Math.random() * 2,
      delay: Math.random() * 3,
      drift: (Math.random() - 0.5) * 60,
    }));
    setParticles(generated);
  }, []);

  // Scroll suavizado com RAF
  useEffect(() => {
    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const tick = () => {
      setScrollY((prev) => {
        const next = prev + (scrollRef.current - prev) * 0.08;
        return Math.abs(next - scrollRef.current) < 0.1
          ? scrollRef.current
          : next;
      });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Mouse parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 a 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMouse({ x, y });
  };

  const handleMouseLeave = () => {
    setMouse({ x: 0, y: 0 });
  };

  // Transforms combinados: scroll + mouse
  const layer = (scrollFactor: number, mouseFactor: number) => ({
    transform: `
      translateY(${scrollY * scrollFactor}px)
      translateX(${mouse.x * mouseFactor}px)
      translateY(${mouse.y * mouseFactor * 0.5}px)
    `,
    transition: "transform 0.12s ease-out",
  });

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative h-[100vh] max-h-[500px] w-full overflow-hidden"
        style={{ cursor: "none" }}
      >
        
        {/* <img
        src={MessmerFundo}
        alt="Fundo Messmer"
        className="absolute inset-0 w-full h-full object-contain will-change-transform"
        style={{
          ...layer(0.20, 4),
          opacity: mounted ? 1 : 0,
          transition: "opacity 1.2s ease, transform 0.12s ease-out",
        }}
        /> */}

        <div className="px-6 pt-10 text-center">
          <h1 className="messmer-text text-red-rune whitespace-pre-line text-center text-3xl md:text-4xl lg:text-8xl">
            Messmer
          </h1>
          <h2 className="text-red-rune goth-text whitespace-pre-line tracking-tight text-center text-3xl md:text-2xl lg:text-4xl drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
            O Portador da Chama Proibida.
          </h2>
        </div>

        {/* Fundo — movimento mais lento */}
        

        {/* Corpo — velocidade média */}
        <img
          src={MessmerCorpo}
          alt="Corpo Messmer"
          className="absolute inset-0 w-full h-full object-contain will-change-transform scale-95"
          style={{
            ...layer(0.20, 10),
            opacity: mounted ? 1 : 0,
            transition: "opacity 1.6s ease 0.3s, transform 0.12s ease-out",
          }}
        />

        {/* Fogo — mais rápido, mais "na frente" */}
        <img
          src={MessmerFogo}
          alt="Fogo Messmer"
          className="absolute inset-0 w-full h-full object-contain will-change-transform scale-95"
          style={{
            ...layer(0.25, 18),
            opacity: mounted ? 1 : 0,
            transition: "opacity 2s ease 0.6s, transform 0.12s ease-out",
          }}
        />

        {/* Overlay de iluminação suave (pode remover se não quiser escurecer) */}
        {/* <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: "rgba(0,0,0,0.45)" }}
      /> */}

        {/* Particulas */}
        {/* {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={
            {
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              background: `radial-gradient(circle, #ffdd57, #ff6b00, transparent)`,
              opacity: mounted ? 0.8 : 0,
              animation: `fireParticle ${p.duration}s ease-in ${p.delay}s infinite`,
              "--drift": `${p.drift}px`,
              zIndex: 30,
            } as React.CSSProperties
          }
        />
      ))} */}

        {/* Overlay gradiente no rodapé */}
        <div
        className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none"
        style={{
          height: "40%",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
        }}
        />

        <style>{`
                @keyframes fireParticle {
                    0%   { transform: translate(0, 0) scale(1); opacity: 0.8; }
                    100% { transform: translate(var(--drift), -120px) scale(0); opacity: 0; }
                }
            `}</style>
      </div>
    </div>
  );
}
