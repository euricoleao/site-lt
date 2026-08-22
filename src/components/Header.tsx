import { useEffect, useState } from 'react';

export default function Header() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'servicos', 'sobre', 'contato'];
      let current = 'inicio';

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 120;
          if (window.scrollY >= top) current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-950/60 backdrop-blur-md border-b border-gray-800">
      <div
        className="flex justify-between items-center px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32
 py-2"
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/lion.png"
            alt="Logo LionTech"
            className="w-15 h-10 scale-150"
          />
          <span className="font-semibold text-xl text-white">
            LionTech_Create
          </span>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex space-x-10 text-gray-300 font-medium">
          {/* 🔵 Início */}
          <a
            href="#inicio"
            className={`relative group transition-all duration-300 
      hover:text-blue-400 
      ${activeSection === 'inicio' ? 'text-blue-400' : 'text-gray-300'}
    `}
          >
            Início
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 shadow-[0_0_10px_#3b82f6]
        transition-all duration-500 
        ${activeSection === 'inicio' ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}
      `}
            ></span>
          </a>

          {/* 🟣 Serviços + Dropdown */}
          <div className="relative group">
            <a
              href="#servicos"
              className={`relative group transition-all duration-300 cursor-pointer
        hover:text-blue-400 
        ${activeSection === 'servicos' ? 'text-blue-400' : 'text-gray-300'}
      `}
            >
              Serviços
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 shadow-[0_0_10px_#3b82f6]
          transition-all duration-500 
          ${activeSection === 'servicos' ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}
        `}
              ></span>
            </a>

            {/* Dropdown */}
            <div
              className="
        absolute left-0 mt-3 w-40 bg-[#0a0a14] border border-gray-700 rounded-xl shadow-xl 
        opacity-0 invisible group-hover:opacity-100 group-hover:visible 
        transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 z-50
      "
            >
              <a
                href="/modelos-sites"
                className="block px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-blue-400 rounded-t-xl transition"
              >
                Criação de Sites
              </a>

              <a
                href="/modelos-ecommerce"
                className="block px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-blue-400 transition"
              >
                E-commerce
              </a>

              <a
                href="/modelos-dropshipping"
                className="block px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-blue-400 rounded-b-xl transition"
              >
                Dropshipping
              </a>
            </div>
          </div>

          {/* 🟠 Sobre */}
          <a
            href="#sobre"
            className={`relative group transition-all duration-300 
      hover:text-blue-400 
      ${activeSection === 'sobre' ? 'text-blue-400' : 'text-gray-300'}
    `}
          >
            Sobre
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 shadow-[0_0_10px_#3b82f6]
        transition-all duration-500 
        ${activeSection === 'sobre' ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}
      `}
            ></span>
          </a>

          {/* 🟡 Contato */}
          <a
            href="#contato"
            className={`relative group transition-all duration-300 
      hover:text-blue-400 
      ${activeSection === 'contato' ? 'text-blue-400' : 'text-gray-300'}
    `}
          >
            Contato
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 shadow-[0_0_10px_#3b82f6]
        transition-all duration-500 
        ${activeSection === 'contato' ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}
      `}
            ></span>
          </a>
        </nav>
      </div>
    </header>
  );
}
