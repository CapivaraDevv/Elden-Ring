import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/layout/Header";
import HomePage from "./features/home/HomePage";
import LorePage from "./features/lore/LorePage";
import LocationsPage from "./features/locations/LocationsPage";
import CharactersPage from "./features/characters/CharactersPage";
import AboutPage from "./features/about/AboutPage";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/lore" element={<LorePage />} />
        <Route path="/locais" element={<LocationsPage />} />
        <Route path="/personagens" element={<CharactersPage />} />
        <Route path="/sobre" element={<AboutPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
