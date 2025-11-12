import React from "react";
import { Link } from "react-router-dom";

interface DropModel {
  id: number;
  title: string;
  image: string;
  description: string;
}

const dropModels: DropModel[] = [
  {
    id: 1,
    title: "Loja Automática",
    image: "/drop1.png",
    description:
      "Sistema de dropshipping completo, com integração automática com fornecedores e atualizações em tempo real.",
  },
  {
    id: 2,
    title: "Loja Internacional",
    image: "/drop2.png",
    description:
      "Modelo voltado para vendas internacionais, com suporte a múltiplas moedas e idiomas.",
  },
  {
    id: 3,
    title: "Loja de Nicho",
    image: "/drop3.png",
    description:
      "Ideal para quem quer focar em produtos de um segmento específico e aumentar a conversão.",
  },
];

export default function DropshippingModels() {
  return (

    
    <section className="bg-gradient-to-b from-[#020024] to-[#030014] text-white py-20 px-8 lg:px-20 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
   <Link
  to="/"
  className="inline-block mb-6 text-blue-400 hover:text-blue-300 transition"
>
  ← Voltar à Home
</Link>

        <h2 className="text-4xl font-bold mb-12 text-blue-400">
          Modelos de Dropshipping
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {dropModels.map((model) => (
            <div
              key={model.id}
              className="bg-gray-900/60 hover:bg-gray-800/80 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2"
            >
              <img
                src={model.image}
                alt={model.title}
                className="w-full h-48 object-cover rounded-xl mb-5 border border-gray-700"
              />
              <h3 className="text-xl font-semibold text-blue-300 mb-3">
                {model.title}
              </h3>
              <p className="text-gray-400">{model.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <a
            href="https://wa.me/5577981465931?text=Olá,%20quero%20um%20modelo%20de%20dropshipping%20com%20a%20LionTech!"
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium px-8 py-3 rounded-xl shadow-lg hover:opacity-90 transition"
          >
            Solicitar um modelo personalizado
          </a>
        </div>
      </div>
    </section>
  );
}
