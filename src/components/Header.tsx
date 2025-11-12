

import { useEffect, useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "servicos", "sobre", "contato"];
      let current = "inicio";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 120;
          if (window.scrollY >= top) current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-950/60 backdrop-blur-md border-b border-gray-800">
      <div className="flex justify-between items-center px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32
 py-2">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo2.png" alt="Logo LionTech" className="w-8 h-8" />
          <span className="font-semibold text-xl text-white">LionTech</span>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex space-x-10 text-gray-300 font-medium">
          {[
            { id: "inicio", label: "Início" },
            { id: "servicos", label: "Serviços" },
            { id: "sobre", label: "Sobre" },
            { id: "contato", label: "Contato" },
          ].map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative transition-all duration-300 ease-in-out 
                hover:text-blue-400 
                ${activeSection === link.id ? "text-blue-400" : "text-gray-300"}
              `}
            >
              {link.label}
              {/* underline animado */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 shadow-[0_0_10px_#3b82f6] transition-all duration-500 ease-in-out 
                ${activeSection === link.id ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"}
                `}
              ></span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
