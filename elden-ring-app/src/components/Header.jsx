export default function Header() {
  return (
    <>
      <div className="min-w-screen justify-center grid grid-cols-2 grid-flow-row p-6 border-b-2 border-solid border-yellow-800/30 mb-6">
        <div className="px-8 flex">
          <h1 className="text-2xl tracking-wider text-gold logo transition-all cursor-pointer">
            Elden Ring
          </h1>
        </div>
        <div className="text-text-dim logo flex gap-12">
          <div className="relative group">
            <h2 className="nav-links hover:text-gold-light cursor-pointer transition-all">
              Lore
            </h2>
            <div className="absolute left-0 -bottom-1  w-0 h-[1px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></div>
          </div>
          <div className="relative group">
            <h2 className="nav-links hover:text-gold-light cursor-pointer transition-all">
              Locais
            </h2>
            <div className="absolute left-0 -bottom-[1px] w-0 h-[1px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></div>
          </div>
          <div className="relative group">
            <h2 className="nav-links hover:text-gold-light cursor-pointer transition-all">
              Personagens
            </h2>
            <div className="absolute left-0 -bottom-1 w-0 h-[1px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></div>
          </div>
          <div className="relative group">
            <h2 className="nav-links hover:text-gold-light cursor-pointer transition-all">
              Sobre
            </h2>
            <div className="absolute left-0 -bottom-1 w-0 h-[1px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></div>
          </div>
        </div>
      </div>
    </>
  );
}
