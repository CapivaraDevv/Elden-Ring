import { NavLink } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { label: "Lore", to: "/lore" },
  { label: "Locais", to: "/locais" },
  { label: "Personagens", to: "/personagens" },
  { label: "Sobre", to: "/sobre" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full px-6 py-5 border-b border-yellow-800/30 bg-bg-deep/90 backdrop-blur-sm">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <NavLink to="/" className="text-2xl tracking-wider text-gold logo hover:text-gold-light transition-colors">
          Elden Ring
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-12">
          {navItems.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative nav-links transition-colors group ${
                  isActive ? "text-gold-light" : "text-text-dim hover:text-gold-light"
                }`
              }
            >
              {label}
              <div className="absolute left-0 -bottom-1 w-0 h-px bg-yellow-300 transition-all duration-300 group-hover:w-full" />
            </NavLink>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label="Menu"
        >
          <span
            className={`block w-5 h-px bg-gold transition-transform duration-200 origin-center ${
              menuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-gold transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-gold transition-transform duration-200 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-5 pt-6 pb-2 px-2">
          {navItems.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `nav-links text-sm transition-colors ${
                  isActive ? "text-gold-light" : "text-text-dim hover:text-gold-light"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
