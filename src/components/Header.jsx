import { NavLink, Link } from "react-router-dom";

import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="flex flex-row items-center justify-between py-4 px-6 md:px-12 bg-gray-100 sticky top-0 z-10">
      <Link to="/">
        <h1 className="text-xl md:text-3xl font-title font-bold tracking-tighter">
          EDUARDO RIBEIRO
        </h1>
      </Link>

      {/* Menu desktop */}
      <nav className="hidden md:flex gap-12 tracking-tighter">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-black font-bold border-b-2 border-black"
              : "text-gray-500 hover:text-black transition-colors font-bold"
          }
        >
          Início
        </NavLink>
        <NavLink
          to="/collection"
          className={({ isActive }) =>
            isActive
              ? "text-black font-bold border-b-2 border-black"
              : "text-gray-500 hover:text-black transition-colors font-bold"
          }
        >
          Coleção
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-black font-bold border-b-2 border-black"
              : "text-gray-500 hover:text-black transition-colors font-bold"
          }
        >
          Sobre
        </NavLink>
      </nav>

      {/* botao hamburguer */}
      <button className="md:hidden flex flex-col gap-1.5" onClick={toggleMenu}>
        <span
          className={`block h-0.5 w-6 bg-black transition-transform ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-black transition-opacity ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-black transition-transform ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* menu mobile */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-gray-100 flex flex-col items-center gap-4 py-4 md:hidden shadow-lg">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-black font-bold"
          >
            Início
          </NavLink>
          <NavLink
            to="/collection"
            onClick={() => setIsOpen(false)}
            className="text-black font-bold"
          >
            Coleção
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className="text-black font-bold"
          >
            Sobre
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;
