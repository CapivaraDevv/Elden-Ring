import useScrollProgress from "../../hooks/useScrollProgress";

export default function HomeHero() {
  const corruption = useScrollProgress();

  return (
    <div className="flex flex-col items-center pt-8 pb-10">
      <div className="relative flex flex-col items-center justify-center mb-6 max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold text-gold-light mb-4 hero-title transition-all">
          Bem-vindo às terras intermédias
        </h1>
        <p className="text-lg mb-8 hero-text text-center text-gold-dim">
          Explore o mundo de Elden Ring e descubra seus segredos
        </p>
        <div className="relative w-full h-[1px] bg-[linear-gradient(90deg,transparent,#fef08a,transparent)] transition-all duration-300" />
      </div>

      <button className="relative px-6 py-3 tracking-widest border border-solid border-yellow-200 font-bold text-gold-light rounded group overflow-hidden">
        <span className="absolute inset-0 bg-yellow-200 w-0 group-hover:w-full transition-all duration-500 ease-out" />
        <span className="relative z-10 group-hover:text-bg-deep transition-colors duration-300">
          Explorar
        </span>
      </button>

      {/* <div className="mt-8 w-full max-w-xl">
        <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
          <div
            className="h-full bg-gold-light transition-all duration-300"
            style={{ width: `${corruption}%` }}
          />
        </div>
        <p className="mt-3 text-sm text-text-dim text-center">
          Corrupção: {Math.round(corruption)}%
        </p>
      </div> */}
    </div>
  );
}
