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
          const top = section.offsetTop - 100;
          if (window.scrollY >= top) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="flex justify-between items-center px-8 lg:px-20 py-6 bg-gray-950/60 fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-gray-800">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo2.png" alt="Logo LionTech" className="w-8 h-8" />
        <span className="font-semibold text-xl text-white">LionTech</span>
      </div>

      {/* Menu */}
      <nav className="space-x-8 text-gray-300 hidden md:flex">
        {[
          { id: "inicio", label: "Início" },
          { id: "servicos", label: "Serviços" },
          { id: "sobre", label: "Sobre" },
          { id: "contato", label: "Contato" },
        ].map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`relative transition duration-300 ${
              activeSection === link.id
                ? "text-blue-400 font-semibold after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-500 after:shadow-[0_0_10px_#3b82f6]"
                : "hover:text-blue-400"
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
