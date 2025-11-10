import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-[#030617] text-white py-6 px-8 flex justify-between items-center shadow-lg">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src="/logo2.png" // troque pelo caminho do seu logo
          alt="LionTech Logo"
          className="w-10 h-10"
        />
        <h1 className="text-2xl font-bold tracking-wide">LionTech</h1>
      </div>

      {/* Menu */}
      <nav>
        <ul className="flex space-x-10 text-sm font-medium">
          <li className="hover:text-blue-400 transition-colors cursor-pointer">Início</li>
          <li className="hover:text-blue-400 transition-colors cursor-pointer">Serviços</li>
          <li className="hover:text-blue-400 transition-colors cursor-pointer">Sobre</li>
          <li className="hover:text-blue-400 transition-colors cursor-pointer">Contato</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
