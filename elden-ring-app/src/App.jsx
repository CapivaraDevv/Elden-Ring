import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import HomePage from "./features/home/HomePage";
import LorePage from "./features/lore/LorePage";
import LocationsPage from "./features/locations/LocationsPage";
import CharactersPage from "./features/characters/CharactersPage";
import AboutPage from "./features/about/AboutPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lore" element={<LorePage />} />
        <Route path="/locais" element={<LocationsPage />} />
        <Route path="/personagens" element={<CharactersPage />} />
        <Route path="/sobre" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
