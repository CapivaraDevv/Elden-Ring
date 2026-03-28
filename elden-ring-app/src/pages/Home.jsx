import HeroMessmer from "../components/HeroMessmer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <div className="relative items-center justify-center mb-6">
          <h1 className="text-5xl font-extrabold text-gold-light mb-4 hero-title transition-all">
            Bem-vindo as terras intermédias
          </h1>
          <p className="text-lg mb-8 hero-text text-center text-gold-dim">
            Explore o mundo de Elden Ring e descubra seus segredos
          </p>
          <div className="absolute w-full h-[1px] bg-[linear-gradient(90deg,transparent,#fef08a,transparent)] transition-all duration-300"></div>
        </div>
        <button className="relative px-6 py-3 logo tracking-widest border border-solid border-yellow-200 font-bold text-gold-light rounded group">
          <span className="absolute inset-0 bg-yellow-200 w-0 group-hover:w-full hover:border-yellow-950 transition-all duration-500 ease-out"></span>
          <span className="relative z-10 group-hover:text-bg-deep transition-colors duration-300">
            Explorar
          </span>
        </button>
      </div>
      <div className="grid grid-cols-2 p-8 w-[900px] gap-8">
        <div className="p-8 cursor-pointer border border-border bg-bg-card hover:border-gold-dim transition-all hover:-translate-y-1 hover:bg-[linear-gradient(135deg,rgba(201,168,76,0.04),transparent)]">
          <h1 className="hero-title font-bold text-gold py-4">
            A árvore sagrada
          </h1>
          <p className="leading-tight text-sm text-text-dim">
            Fonte da Graça Dourada, a Árvore ilumina as Terras Entre. Sua luz
            guia os Maculados e sustenta o ciclo da vida e morte eternas.
          </p>
        </div>
        <div className="p-8 cursor-pointer border border-border bg-bg-card hover:border-gold-dim transition-all hover:-translate-y-1 hover:bg-[linear-gradient(135deg,rgba(201,168,76,0.04),transparent)]">
          <h1 className="hero-title font-bold text-gold py-4">Os maculados</h1>
          <p className="leading-tight text-sm text-text-dim">
            Exilados e esquecidos pela Graça, retornam das terras distantes
            convocados por um chamado misterioso. São mortos que não encontram
            descanso.
          </p>
        </div>
      </div>
      <HeroMessmer />
    </div>
  );
}
