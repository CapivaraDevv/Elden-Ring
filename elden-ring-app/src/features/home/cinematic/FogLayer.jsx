import { motion } from "framer-motion";

const FOG_LAYERS = [
  {
    id: 1,
    style: {
      bottom: 0,
      left: 0,
      right: 0,
      height: "400px",
      background:
        "linear-gradient(to top, rgba(201,168,76,0.06) 0%, transparent 100%)",
      opacity: 0.55,
    },
    xRange: [-15, 15],
    duration: 20,
    delay: 0,
  },
  {
    id: 2,
    style: {
      bottom: 0,
      left: "-15%",
      width: "75%",
      height: "360px",
      background:
        "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(201,168,76,0.09) 0%, transparent 70%)",
      opacity: 0.4,
    },
    xRange: [0, 45],
    duration: 26,
    delay: 4,
  },
  {
    id: 3,
    style: {
      bottom: "8%",
      right: "-12%",
      width: "55%",
      height: "250px",
      background:
        "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
      opacity: 0.3,
    },
    xRange: [0, -40],
    duration: 32,
    delay: 8,
  },
  {
    id: 4,
    style: {
      top: "10%",
      left: 0,
      right: 0,
      height: "200px",
      background:
        "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(8,6,4,0.5) 0%, transparent 100%)",
      opacity: 0.6,
    },
    xRange: [-8, 8],
    duration: 18,
    delay: 2,
  },
];

export default function FogLayer() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {FOG_LAYERS.map(({ id, style, xRange, duration, delay }) => (
        <motion.div
          key={id}
          className="absolute pointer-events-none"
          style={style}
          animate={{ x: [xRange[0], xRange[1], xRange[0]] }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
