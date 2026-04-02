import HeroMessmer from "../components/HeroMessmer";
import Cards from "../components/Cards";
import { useState, useEffect } from "react";

export default function Home() {
  const [corruption, setCorruption] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;

      const value = (scrollY / maxScroll) * 100;
      setCorruption(value);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen transition-all duration-500">
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
      <Cards />
      <div className="absolute w-full h-[1px] bg-[linear-gradient(90deg,transparent,#8b1a1a,transparent,#8b1a1a,transparent)] transition-all duration-300"></div>
      <div
        className="w-full max-w-6xl py-10"
      >
        <HeroMessmer />
      </div>
    </div>
  );
}
