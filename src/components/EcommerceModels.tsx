import React from "react";
import { Link } from "react-router-dom";

interface EcommerceModel {
  id: number;
  title: string;
  image: string;
  description: string;
}

const ecommerceModels: EcommerceModel[] = [
  {
    id: 1,
    title: "Loja Moderna",
    image: "/webv-1.avif",
    description: "Design dinâmico e moderno, ideal para marcas que querem impacto visual.",
  },
  {
    id: 2,
    title: "Loja Minimalista",
    image: "/webv-2.avif",
    description: "Estilo limpo e elegante, com foco total nos produtos.",
  },
  {
    id: 3,
    title: "Loja Premium",
    image: "/webv-4.avif",
    description: "Visual sofisticado, perfeito para marcas que valorizam exclusividade.",
  },
   {
    id: 1,
    title: "Loja Moderna",
    image: "/webv-5.avif",
    description: "Design dinâmico e moderno, ideal para marcas que querem impacto visual.",
  },
  {
    id: 2,
    title: "Loja Minimalista",
    image: "/webv-6.avif",
    description: "Estilo limpo e elegante, com foco total nos produtos.",
  },
  {
    id: 3,
    title: "Loja Premium",
    image: "/webv-7.avif",
    description: "Visual sofisticado, perfeito para marcas que valorizam exclusividade.",
  },

   {
    id: 1,
    title: "Loja Moderna",
    image: "/webv-8.avif",
    description: "Design dinâmico e moderno, ideal para marcas que querem impacto visual.",
  },
  {
    id: 2,
    title: "Loja Minimalista",
    image: "/webv-10.avif",
    description: "Estilo limpo e elegante, com foco total nos produtos.",
  },
  {
    id: 3,
    title: "Loja Premium",
    image: "/webv-11.avif",
    description: "Visual sofisticado, perfeito para marcas que valorizam exclusividade.",
  },

   {
    id: 1,
    title: "Loja Moderna",
    image: "/webv-12.avif",
    description: "Design dinâmico e moderno, ideal para marcas que querem impacto visual.",
  },
  {
    id: 2,
    title: "Loja Minimalista",
    image: "/webv.avif",
    description: "Estilo limpo e elegante, com foco total nos produtos.",
  },
  {
    id: 3,
    title: "Loja Premium",
    image: "/webv-13.avif",
    description: "Visual sofisticado, perfeito para marcas que valorizam exclusividade.",
  },

   {
    id: 1,
    title: "Loja Moderna",
    image: "/webv-14.avif",
    description: "Design dinâmico e moderno, ideal para marcas que querem impacto visual.",
  },
  {
    id: 2,
    title: "Loja Minimalista",
    image: "/webv-15.avif",
    description: "Estilo limpo e elegante, com foco total nos produtos.",
  },
  {
    id: 3,
    title: "Loja Premium",
    image: "/webv-16.avif",
    description: "Visual sofisticado, perfeito para marcas que valorizam exclusividade.",
  },
];

export default function EcommerceModels() {
  return (
    <section
      id="modelos-ecommerce"
      className="bg-gradient-to-b from-[#020024] to-[#030014] text-white py-20 px-8 lg:px-20"
    >
      <div className="max-w-6xl mx-auto text-center">
           <Link
  to="/"
  className="inline-block mb-6 text-blue-400 hover:text-blue-300 transition"
>
  ← Voltar à Home
</Link>
        <h2 className="text-4xl font-bold mb-12 text-blue-400">Modelos de E-commerce</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {ecommerceModels.map((model) => (
            <div
              key={model.id}
              className="bg-gray-900/60 hover:bg-gray-800/80 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2"
            >
              <img
                src={model.image}
                alt={model.title}
                className="w-full h-48 object-cover rounded-xl mb-5 border border-gray-700"
              />
              <h3 className="text-xl font-semibold text-blue-300 mb-3">{model.title}</h3>
              <p className="text-gray-400">{model.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
