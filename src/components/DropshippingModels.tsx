import { Link } from 'react-router-dom';
import { useState } from 'react';

interface DropModel {
  id: number;
  title: string;
  image: string;
  description: string;
}

const dropModels: DropModel[] = [
  {
    id: 1,
    title: 'Loja Automática',
    image: '/dps-1.webp',
    description:
      'Sistema de dropshipping completo, com integração automática com fornecedores e atualizações em tempo real.',
  },
  {
    id: 2,
    title: 'Loja Internacional',
    image: '/dps-5.webp',
    description:
      'Modelo voltado para vendas internacionais, com suporte a múltiplas moedas e idiomas.',
  },
  {
    id: 3,
    title: 'Loja de Nicho',
    image: '/dps-4.webp',
    description:
      'Ideal para quem quer focar em produtos de um segmento específico e aumentar a conversão.',
  },

  {
    id: 1,
    title: 'Loja Automática',
    image: '/dps-1.webp',
    description:
      'Sistema de dropshipping completo, com integração automática com fornecedores e atualizações em tempo real.',
  },
  {
    id: 2,
    title: 'Loja Internacional',
    image: '/dps-2.webp',
    description:
      'Modelo voltado para vendas internacionais, com suporte a múltiplas moedas e idiomas.',
  },
  {
    id: 3,
    title: 'Loja de Nicho',
    image: '/dps-3.webp',
    description:
      'Ideal para quem quer focar em produtos de um segmento específico e aumentar a conversão.',
  },
];

// export default function DropshippingModels() {
//   return (
//     <section className="bg-gradient-to-b from-[#020024] to-[#030014] text-white py-20 px-8 lg:px-25 min-h-screen">
//       <div className="max-w-6xl mx-auto text-center">
//         <Link
//           to="/"
//           className="inline-block mb-6 text-blue-400 hover:text-blue-300 transition"
//         >
//           ← Voltar à Home
//         </Link>

//         <h2 className="text-4xl font-bold mb-12 text-blue-400">
//           Modelos de Dropshipping
//         </h2>

//         <div className="grid md:grid-cols-3 gap-10">
//           {dropModels.map((model) => (
//             <div
//               key={model.id}
//               className="bg-gray-900/60 hover:bg-gray-800/80 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2"
//             >
//               <img
//                 src={model.image}
//                 alt={model.title}
//                 className="w-full h-48 object-cover rounded-xl mb-5 border border-gray-700"
//               />
//               <h3 className="text-xl font-semibold text-blue-300 mb-3">
//                 {model.title}
//               </h3>
//               <p className="text-gray-400">{model.description}</p>
//             </div>
//           ))}
//         </div>

//         <div className="mt-14">
//           <a
//             href="https://wa.me/5577981465931?text=Olá,%20quero%20um%20modelo%20de%20dropshipping%20com%20a%20LionTech!"
//             target="_blank"
//             rel="noreferrer"
//             className="bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium px-8 py-3 rounded-xl shadow-lg hover:opacity-90 transition"
//           >
//             Solicitar um modelo personalizado
//           </a>
//         </div>
//       </div>
//     </section>
//   );
//

export default function DropshippingModels() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="bg-gradient-to-b from-[#020024] to-[#030014] text-white py-20 px-6 lg:px-40 min-h-screen">
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
              {/* IMAGEM */}
              <div className="overflow-hidden rounded-xl border border-gray-700 mb-5 bg-black">
                <img
                  src={model.image}
                  alt={model.title}
                  onDoubleClick={() => setSelectedImage(model.image)}
                  className="w-full aspect-video object-contain cursor-zoom-in transition-transform duration-500 hover:scale-105"
                />
              </div>

              <h3 className="text-xl font-semibold text-blue-300 mb-3">
                {model.title}
              </h3>

              <p className="text-gray-400">{model.description}</p>
            </div>
          ))}
        </div>

        {/* BOTÃO WHATSAPP */}
        <div className="mt-14">
          <a
            href="https://wa.me/5577981465931?text=Olá,%20quero%20um%20modelo%20de%20dropshipping%20com%20a%20LionTech!"
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-blue-400 to-blue-100 text-blue-950 font-medium px-8 py-3 rounded-xl shadow-lg hover:opacity-90 transition"
          >
            Solicitar um modelo personalizado
          </a>
        </div>
      </div>

      {/* MODAL FULLSCREEN */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-6"
        >
          <img
            src={selectedImage}
            alt="Imagem ampliada"
            className="max-w-[95%] max-h-[95%] rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
