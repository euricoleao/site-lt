import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SiteModels() {
  const navigate = useNavigate();
  
  const [galleryOpen, setGalleryOpen] = useState(false);



  return (

    
    <section

   
      id="modelos-sites"
      className="bg-gradient-to-b from-[#020024] to-[#030014] text-white py-13 px-8 lg:px-20 min-h-screen flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/bgservice.jpg')" }}
   >

       <Link
  to="/"
  className="inline-block mb-6 text-blue-400 hover:text-blue-300 transition"
>
  ← Voltar à Home
</Link>

      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-12 text-blue-400 text-center"
      >
        Modelos de Sites
      </motion.h2>

      {/* Grade de modelos */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="grid md:grid-cols-3 gap-10 max-w-6xl w-full"
      >
        {/* Modelo 1 */}
      {/* <div
  onClick={() => setSelectedModel("portfolio")}
  className="cursor-pointer bg-gray-900/60 hover:bg-gray-800/80 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2"
>
  <img
    src="/web.jpg"
    alt="Portfólio Criativo"
    className="w-full h-48 object-cover rounded-xl mb-5 border border-gray-700"
  />
  <h3 className="text-xl font-semibold text-blue-300 mb-3">
    Portfólio Criativo
  </h3>
  <p className="text-gray-400">
    Perfeito para designers e fotógrafos mostrarem seu trabalho.
  </p>
</div> */}

{/* Modal 1*/}
<div
  onClick={() => setGalleryOpen(true)}
  className="cursor-pointer bg-gray-900/60 hover:bg-gray-800/80 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2"
>
  <img
    src="/web-5.jpg"
    className="w-full h-48 object-cover rounded-xl mb-5 border border-gray-700"
  />
  <h3 className="text-xl font-semibold text-blue-300 mb-3">Portfólio Criativo</h3>
  <p className="text-gray-400">Perfeito para designers e fotógrafos mostrarem seu trabalho.</p>
</div>

{galleryOpen && (
  <div
    className="fixed inset-0 bg-black/90 z-50 overflow-y-scroll p-6"
    onClick={() => setGalleryOpen(false)}
  >
    <div
      className="max-w-3xl mx-auto space-y-6"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-2xl font-semibold text-blue-400 mb-4 text-center">
        Portfólio Criativo – Prévia Completa
      </h2>

      {/* Imagem 1 */}
      <div className="overflow-hidden rounded-xl border border-gray-700">
        <img
          src="/templ-3.jpg"
          className="w-full h-auto object-cover hover:scale-110 transition-transform duration-300 cursor-zoom-in"
        />
      </div>

      {/* Imagem 2 */}
      <div className="overflow-hidden rounded-xl border border-gray-700">
        <img
          src="/templ-31.jpg"
          className="w-full h-auto object-cover hover:scale-110 transition-transform duration-300 cursor-zoom-in"
        />
      </div>

      {/* Imagem 3 */}
      <div className="overflow-hidden rounded-xl border border-gray-700">
        <img
          src="/templ-32.jpg"
          className="w-full h-auto object-cover hover:scale-110 transition-transform duration-300 cursor-zoom-in"
        />
      </div>

      <button
        onClick={() => setGalleryOpen(false)}
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold mt-6 transition"
      >
        Fechar
      </button>
    </div>
  </div>
)}

{/* Modal 2*/}
<div
  onClick={() => setGalleryOpen(true)}
  className="cursor-pointer bg-gray-900/60 hover:bg-gray-800/80 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2"
>
  <img
    src="/web-9.jpg"
    className="w-full h-48 object-cover rounded-xl mb-5 border border-gray-700"
  />
  <h3 className="text-xl font-semibold text-blue-300 mb-3">Portfólio Criativo</h3>
  <p className="text-gray-400">Perfeito para designers e fotógrafos mostrarem seu trabalho.</p>
</div>

{galleryOpen && (
  <div
    className="fixed inset-0 bg-black/90 z-50 overflow-y-scroll p-6"
    onClick={() => setGalleryOpen(false)}
  >
    <div
      className="max-w-3xl mx-auto space-y-6"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-2xl font-semibold text-blue-400 mb-4 text-center">
        Portfólio Criativo – Prévia Completa
      </h2>

      {/* Imagem 1 */}
      <div className="overflow-hidden rounded-xl border border-gray-700">
        <img
          src="/templ-3.jpg"
          className="w-full h-auto object-cover hover:scale-110 transition-transform duration-300 cursor-zoom-in"
        />
      </div>

      {/* Imagem 2 */}
      <div className="overflow-hidden rounded-xl border border-gray-700">
        <img
          src="/templ-31.jpg"
          className="w-full h-auto object-cover hover:scale-110 transition-transform duration-300 cursor-zoom-in"
        />
      </div>

      {/* Imagem 3 */}
      <div className="overflow-hidden rounded-xl border border-gray-700">
        <img
          src="/templ-32.jpg"
          className="w-full h-auto object-cover hover:scale-110 transition-transform duration-300 cursor-zoom-in"
        />
      </div>

      <button
        onClick={() => setGalleryOpen(false)}
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold mt-6 transition"
      >
        Fechar
      </button>
    </div>
  </div>
)}

{/* Modal 3*/}
<div
  onClick={() => setGalleryOpen(true)}
  className="cursor-pointer bg-gray-900/60 hover:bg-gray-800/80 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2"
>
  <img
    src="/web-7.jpg"
    className="w-full h-48 object-cover rounded-xl mb-5 border border-gray-700"
  />
  <h3 className="text-xl font-semibold text-blue-300 mb-3">Portfólio Criativo</h3>
  <p className="text-gray-400">Perfeito para designers e fotógrafos mostrarem seu trabalho.</p>
</div>

{galleryOpen && (
  <div
    className="fixed inset-0 bg-black/90 z-50 overflow-y-scroll p-6"
    onClick={() => setGalleryOpen(false)}
  >
    <div
      className="max-w-3xl mx-auto space-y-6"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-2xl font-semibold text-blue-400 mb-4 text-center">
        Portfólio Criativo – Prévia Completa
      </h2>

      {/* Imagem 1 */}
      <div className="overflow-hidden rounded-xl border border-gray-700">
        <img
          src="/web-71.jpg"
          className="w-full h-auto object-cover hover:scale-110 transition-transform duration-300 cursor-zoom-in"
        />
      </div>

      {/* Imagem 2 */}
      <div className="overflow-hidden rounded-xl border border-gray-700">
        <img
          src="/web-72.jpg"
          className="w-full h-auto object-cover hover:scale-110 transition-transform duration-300 cursor-zoom-in"
        />
      </div>

      {/* Imagem 3 */}
      <div className="overflow-hidden rounded-xl border border-gray-700">
        <img
          src="/web-73.jpg"
          className="w-full h-auto object-cover hover:scale-110 transition-transform duration-300 cursor-zoom-in"
        />
      </div>

      <button
        onClick={() => setGalleryOpen(false)}
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold mt-6 transition"
      >
        Fechar
      </button>
    </div>
  </div>
)}

{/* Modal 4*/}
<div
  onClick={() => setGalleryOpen(true)}
  className="cursor-pointer bg-gray-900/60 hover:bg-gray-800/80 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2"
>
  <img
    src="/web-6.jpg"
    className="w-full h-48 object-cover rounded-xl mb-5 border border-gray-700"
  />
  <h3 className="text-xl font-semibold text-blue-300 mb-3">Portfólio Criativo</h3>
  <p className="text-gray-400">Perfeito para designers e fotógrafos mostrarem seu trabalho.</p>
</div>

{galleryOpen && (
  <div
    className="fixed inset-0 bg-black/90 z-50 overflow-y-scroll p-6"
    onClick={() => setGalleryOpen(false)}
  >
    <div
      className="max-w-3xl mx-auto space-y-6"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-2xl font-semibold text-blue-400 mb-4 text-center">
        Portfólio Criativo – Prévia Completa
      </h2>

      {/* Imagem 1 */}
      <div className="overflow-hidden rounded-xl border border-gray-700">
        <img
          src="/templ-3.jpg"
          className="w-full h-auto object-cover hover:scale-110 transition-transform duration-300 cursor-zoom-in"
        />
      </div>

      {/* Imagem 2 */}
      <div className="overflow-hidden rounded-xl border border-gray-700">
        <img
          src="/templ-31.jpg"
          className="w-full h-auto object-cover hover:scale-110 transition-transform duration-300 cursor-zoom-in"
        />
      </div>

      {/* Imagem 3 */}
      <div className="overflow-hidden rounded-xl border border-gray-700">
        <img
          src="/templ-32.jpg"
          className="w-full h-auto object-cover hover:scale-110 transition-transform duration-300 cursor-zoom-in"
        />
      </div>

      <button
        onClick={() => setGalleryOpen(false)}
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold mt-6 transition"
      >
        Fechar
      </button>
    </div>
  </div>
)}

{/* Modal 1*/}
<div
  onClick={() => setGalleryOpen(true)}
  className="cursor-pointer bg-gray-900/60 hover:bg-gray-800/80 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2"
>
  <img
    src="/web-4.jpg"
    className="w-full h-48 object-cover rounded-xl mb-5 border border-gray-700"
  />
  <h3 className="text-xl font-semibold text-blue-300 mb-3">Portfólio Criativo</h3>
  <p className="text-gray-400">Perfeito para designers e fotógrafos mostrarem seu trabalho.</p>
</div>

{galleryOpen && (
  <div
    className="fixed inset-0 bg-black/90 z-50 overflow-y-scroll p-6"
    onClick={() => setGalleryOpen(false)}
  >
    <div
      className="max-w-3xl mx-auto space-y-6"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-2xl font-semibold text-blue-400 mb-4 text-center">
        Portfólio Criativo – Prévia Completa
      </h2>

      {/* Imagem 1 */}
      <div className="overflow-hidden rounded-xl border border-gray-700">
        <img
          src="/templ-3.jpg"
          className="w-full h-auto object-cover hover:scale-110 transition-transform duration-300 cursor-zoom-in"
        />
      </div>

      {/* Imagem 2 */}
      <div className="overflow-hidden rounded-xl border border-gray-700">
        <img
          src="/templ-31.jpg"
          className="w-full h-auto object-cover hover:scale-110 transition-transform duration-300 cursor-zoom-in"
        />
      </div>

      {/* Imagem 3 */}
      <div className="overflow-hidden rounded-xl border border-gray-700">
        <img
          src="/templ-32.jpg"
          className="w-full h-auto object-cover hover:scale-110 transition-transform duration-300 cursor-zoom-in"
        />
      </div>

      <button
        onClick={() => setGalleryOpen(false)}
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold mt-6 transition"
      >
        Fechar
      </button>
    </div>
  </div>
)}

{/* Modal 1*/}
<div
  onClick={() => setGalleryOpen(true)}
  className="cursor-pointer bg-gray-900/60 hover:bg-gray-800/80 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2"
>
  <img
    src="/web-5.jpg"
    className="w-full h-48 object-cover rounded-xl mb-5 border border-gray-700"
  />
  <h3 className="text-xl font-semibold text-blue-300 mb-3">Portfólio Criativo</h3>
  <p className="text-gray-400">Perfeito para designers e fotógrafos mostrarem seu trabalho.</p>
</div>

{galleryOpen && (
  <div
    className="fixed inset-0 bg-black/90 z-50 overflow-y-scroll p-6"
    onClick={() => setGalleryOpen(false)}
  >
    <div
      className="max-w-3xl mx-auto space-y-6"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-2xl font-semibold text-blue-400 mb-4 text-center">
        Portfólio Criativo – Prévia Completa
      </h2>

      {/* Imagem 1 */}
      <div className="overflow-hidden rounded-xl border border-gray-700">
        <img
          src="/templ-3.jpg"
          className="w-full h-auto object-cover hover:scale-110 transition-transform duration-300 cursor-zoom-in"
        />
      </div>

      {/* Imagem 2 */}
      <div className="overflow-hidden rounded-xl border border-gray-700">
        <img
          src="/templ-31.jpg"
          className="w-full h-auto object-cover hover:scale-110 transition-transform duration-300 cursor-zoom-in"
        />
      </div>

      {/* Imagem 3 */}
      <div className="overflow-hidden rounded-xl border border-gray-700">
        <img
          src="/templ-32.jpg"
          className="w-full h-auto object-cover hover:scale-110 transition-transform duration-300 cursor-zoom-in"
        />
      </div>

      <button
        onClick={() => setGalleryOpen(false)}
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold mt-6 transition"
      >
        Fechar
      </button>
    </div>
  </div>
)}


       
      </motion.div>

      {/* Botão Voltar */}
      <motion.button
        onClick={() => navigate("/")}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-16 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105"
      >
        ← Voltar para Início
      </motion.button>
    </section>
  );
}
