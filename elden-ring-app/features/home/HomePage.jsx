import HomeHero from "./HomeHero";
import HomeCards from "./HomeCards";
import HeroMessmer from "./HeroMessmer";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen transition-all duration-500">
      <HomeHero />
      <HomeCards />
      <div className="absolute w-full h-[1px] bg-[linear-gradient(90deg,transparent,#8b1a1a,transparent,#8b1a1a,transparent)] transition-all duration-300" />
      <div className="w-full max-w-6xl py-10">
        <HeroMessmer />
      </div>
    </div>
  );
}
