export default function HomeCards() {
  const cards = [
    {
      title: "A árvore sagrada",
      body: "Fonte da Graça Dourada, a Árvore ilumina as Terras Entre. Sua luz guia os Maculados e sustenta o ciclo da vida e morte eternas.",
    },
    {
      title: "Os maculados",
      body: "Exilados e esquecidos pela Graça, retornam das terras distantes convocados por um chamado misterioso. São mortos que não encontram descanso.",
    },
    {
      title: "A guerra dos semideuses",
      body: "Quando o Anel foi quebrado, os filhos da Rainha se voltaram uns contra os outros. O poder corrompeu até os mais divinos.",
    },
    {
      title: "A queda da ordem dourada",
      body: "Aquilo que parecia eterno começou a ruir. A graça já não protege apenas observa enquanto o mundo entra em colapso.",
    },
  ];

  return (
    <div className="grid grid-cols-2 p-8 w-[900px] gap-8 mb-12 perspective">
      {cards.map((card) => (
        <article
          key={card.title}
          className="p-8 cursor-pointer border border-border bg-bg-card hover:border-gold-dim duration-300 hover:-translate-y-1 hover:bg-[linear-gradient(135deg,rgba(201,168,76,0.04),transparent)] transition-all"
        >
          <h2 className="hero-title font-bold text-gold py-4">{card.title}</h2>
          <p className="leading-tight text-sm text-text-dim">{card.body}</p>
        </article>
      ))}
    </div>
  );
}
