import React, { useState, type JSX } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string; // caminho relativo em /public ou src/assets
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Estúdio Lumina",
    description: "Website institucional para estúdio criativo — foco em imagens e tipografia.",
    image: "/portfolio1.png",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Fotografia Áurea",
    description: "Portfólio de fotógrafo com galerias e carregamento dinâmico das imagens.",
    image: "/portfolio2.png",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Designer NovaForm",
    description: "Site de apresentação minimalista com interação micro-animada.",
    image: "/portfolio3.png",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Brand Aurora",
    description: "Landing para marca com foco em storytelling visual e seções long-scrolling.",
    image: "/portfolio4.png",
    liveUrl: "#",
  },
  {
    id: 5,
    title: "Galeria Pixel",
    description: "Galeria online com filtro por categorias e visual em tela cheia.",
    image: "/portfolio5.png",
    liveUrl: "#",
  },
  {
    id: 6,
    title: "Coleção Mono",
    description: "Portfólio monocromático com tipografia experimental e grid modular.",
    image: "/portfolio6.png",
    liveUrl: "#",
  },
];

export default function PortfolioModel(): JSX.Element {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#010217] to-[#02042A] text-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 py-20 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
          >
            Portfólio Criativo <br />
            <span className="text-blue-400">Minimalista</span>
          </motion.h1>
          <p className="mt-6 text-gray-300 max-w-2xl">
            Modelos pensados para destacar trabalhos visuais — grids limpos, tipografia forte e foco na imagem.
            Perfeito para designers, fotógrafos e estúdios criativos.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="inline-block bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-semibold shadow-lg transition"
            >
              Ver projetos
            </a>
            <a
              href="https://wa.me/5577981465931?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20o%20Portfólio%20Criativo"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border border-blue-700 rounded-lg hover:bg-blue-900/30 transition"
            >
              Solicitar personalização
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          {/* Imagem / mockup do modelo */}
          <img
            src="/portfolio-hero-mockup.png"
            alt="Mockup Portfólio"
            className="w-[320px] md:w-[420px] lg:w-[520px] drop-shadow-[0_0_40px_rgba(59,130,246,0.25)] rounded-2xl"
          />
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section id="projects" className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold text-blue-400 mb-8">Projetos em destaque</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <motion.article
                key={p.id}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden shadow-md"
              >
                <button
                  onClick={() => setSelected(p)}
                  className="w-full text-left"
                >
                  <div className="relative">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-48 object-cover transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 hover:opacity-100 transition-opacity"></div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-2 text-blue-200">
                      {p.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{p.description}</p>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-gray-400">Design • UI • UX</span>
                      <div className="flex items-center gap-3">
                        {p.liveUrl && (
                          <a
                            href={p.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition text-sm inline-flex items-center gap-1"
                          >
                            Ver projeto <FaExternalLinkAlt />
                          </a>
                        )}
                        <button
                          className="text-xs px-3 py-1 bg-blue-700/30 rounded-md text-blue-200 hover:bg-blue-700/50 transition"
                          onClick={() => setSelected(p)}
                        >
                          Visualizar
                        </button>
                      </div>
                    </div>
                  </div>
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT + CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4">Sobre o modelo</h3>
            <p className="text-gray-300">
              Este template foca na apresentação limpa e direta do portfólio. Tipografia marcante,
              espaçamento generoso e grids que priorizam o conteúdo visual. Ótimo para mostrar trabalhos
              sem distrações e com performance.
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 max-w-md">
              <h4 className="font-semibold text-lg mb-2">Inclui</h4>
              <ul className="text-gray-400 list-disc list-inside space-y-2">
                <li>Home com hero minimal</li>
                <li>Galeria de projetos em grid</li>
                <li>Páginas internas (projeto + contato)</li>
                <li>SEO básico e carregamento otimizado</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOOT CTA */}
      <section className="py-16 bg-gradient-to-t from-black/10 to-transparent">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 text-center">
          <h4 className="text-xl font-semibold mb-4">Quer este layout para seu negócio?</h4>
          <a
            href="https://wa.me/5577981465931?text=Olá,%20quero%20o%20modelo%20Portfólio%20Criativo%20Minimalista"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg shadow-lg transition"
          >
            Solicitar agora
          </a>
        </div>
      </section>

      {/* MODAL SIMPLES */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="max-w-3xl w-full bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-200 mb-3">{selected.title}</h3>
              <p className="text-gray-300 mb-4">{selected.description}</p>
              <div className="flex justify-end gap-3">
                {selected.liveUrl && (
                  <a
                    href={selected.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Abrir projeto
                  </a>
                )}
                <button
                  className="bg-blue-600 px-4 py-2 rounded-md text-white"
                  onClick={() => setSelected(null)}
                >
                  Fechar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}
