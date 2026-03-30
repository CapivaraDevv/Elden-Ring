  

export default function Cards() {
  return (
    <div className="grid grid-cols-2 p-8 w-[900px] gap-8 mb-12 perspective">
      <div
        className="p-8 cursor-pointer border border-border bg-bg-card hover:border-gold-dim duration-300 hover:-translate-y-1 hover:bg-[linear-gradient(135deg,rgba(201,168,76,0.04),transparent)] transition-all"
      >
        <h1 className="hero-title font-bold text-gold py-4">
          A árvore sagrada
        </h1>
        <p className="leading-tight text-sm text-text-dim">
          Fonte da Graça Dourada, a Árvore ilumina as Terras Entre. Sua luz guia
          os Maculados e sustenta o ciclo da vida e morte eternas.
        </p>
      </div>
      <div 
        className="p-8 cursor-pointer border border-border bg-bg-card hover:border-gold-dim duration-300 transition-all hover:-translate-y-1 hover:bg-[linear-gradient(135deg,rgba(201,168,76,0.04),transparent)]"
      >
        <h1 className="hero-title font-bold text-gold py-4">Os maculados</h1>
        <p className="leading-tight text-sm text-text-dim">
          Exilados e esquecidos pela Graça, retornam das terras distantes
          convocados por um chamado misterioso. São mortos que não encontram
          descanso.
        </p>
      </div>
      <div className="p-8 cursor-pointer border border-border bg-bg-card hover:border-gold-dim duration-300 transition-all hover:-translate-y-1 hover:bg-[linear-gradient(135deg,rgba(201,168,76,0.04),transparent)]">
        <h1 className="hero-title font-bold text-gold py-4">
          A guerra dos semideuses
        </h1>
        <p className="leading-tight text-sm text-text-dim">
          Quando o Anel foi quebrado, os filhos da Rainha se voltaram uns contra
          os outros. O poder corrompeu até os mais divinos.
        </p>
      </div>
      <div className="p-8 cursor-pointer border border-border bg-bg-card hover:border-gold-dim duration-300 transition-all hover:-translate-y-1 hover:bg-[linear-gradient(135deg,rgba(201,168,76,0.04),transparent)]">
        <h1 className="hero-title font-bold text-gold py-4">
          A queda da ordem dourada
        </h1>
        <p className="leading-tight text-sm text-text-dim">
          Aquilo que parecia eterno começou a ruir. A graça já não protege
          apenas observa enquanto o mundo entra em colapso.
        </p>
      </div>
      
    </div>
  );
}
