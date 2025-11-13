import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SiteModels() {
  const navigate = useNavigate();

  return (

    
    <section

   
      id="modelos-sites"
      className="bg-gradient-to-b from-[#020024] to-[#030014] text-white py-13 px-8 lg:px-20 min-h-screen flex flex-col items-center justify-center"
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
        <div className="bg-gray-900/60 hover:bg-gray-800/80 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2">
          <img
            src="/web-4.webp"
            alt="Site Profissional"
            className="w-full h-48 object-cover rounded-xl mb-5 border border-gray-700"
          />
          <h3 className="text-xl font-semibold text-blue-300 mb-3">Site Profissional</h3>
          <p className="text-gray-400">
            Modelo ideal para empresas com design institucional moderno.
          </p>
        </div>

        {/* Modelo 2 */}
        <div className="bg-gray-900/60 hover:bg-gray-800/80 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2">
          <img
            src="/web-6.jpg"
            alt="Landing Page"
            className="w-full h-48 object-cover rounded-xl mb-5 border border-gray-700"
          />
          <h3 className="text-xl font-semibold text-blue-300 mb-3">Landing Page</h3>
          <p className="text-gray-400">
            Focada em conversão e campanhas de marketing.
          </p>
        </div>

        {/* Modelo 3 */}
        <div className="bg-gray-900/60 hover:bg-gray-800/80 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2">
          <img
            src="/web.jpg"
            alt="Portfólio Criativo"
            className="w-full h-48 object-cover rounded-xl mb-5 border border-gray-700"
          />
          <h3 className="text-xl font-semibold text-blue-300 mb-3">Portfólio Criativo</h3>
          <p className="text-gray-400">
            Perfeito para designers e fotógrafos mostrarem seu trabalho.
          </p>
        </div>

          {/* Modelo 1 */}
        <div className="bg-gray-900/60 hover:bg-gray-800/80 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2">
          <img
            src="/web.jpg"
            alt="Site Profissional"
            className="w-full h-48 object-cover rounded-xl mb-5 border border-gray-700"
          />
          <h3 className="text-xl font-semibold text-blue-300 mb-3">Site Profissional</h3>
          <p className="text-gray-400">
            Modelo ideal para empresas com design institucional moderno.
          </p>
        </div>

        {/* Modelo 2 */}
        <div className="bg-gray-900/60 hover:bg-gray-800/80 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2">
          <img
            src="/web-9.jpg"
            alt="Landing Page"
            className="w-full h-48 object-cover rounded-xl mb-5 border border-gray-700"
          />
          <h3 className="text-xl font-semibold text-blue-300 mb-3">Landing Page</h3>
          <p className="text-gray-400">
            Focada em conversão e campanhas de marketing.
          </p>
        </div>

        {/* Modelo 3 */}
        <div className="bg-gray-900/60 hover:bg-gray-800/80 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2">
          <img
            src="/web-7.jpg"
            alt="Portfólio Criativo"
            className="w-full h-48 object-cover rounded-xl mb-5 border border-gray-700"
          />
          <h3 className="text-xl font-semibold text-blue-300 mb-3">Portfólio Criativo</h3>
          <p className="text-gray-400">
            Perfeito para designers e fotógrafos mostrarem seu trabalho.
          </p>
        </div>

          {/* Modelo 1 */}
        <div className="bg-gray-900/60 hover:bg-gray-800/80 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2">
        <img
  src="/web.jpg"
  alt="Portfólio Criativo Minimalista"
  className="w-full h-56 object-contain rounded-xl mb-5 border border-gray-700 shadow-lg transition-transform duration-300 hover:scale-105"
/>

          <h3 className="text-xl font-semibold text-blue-300 mb-3">Site Profissional</h3>
          <p className="text-gray-400">
            Modelo ideal para empresas com design institucional moderno.
          </p>
        </div>

        {/* Modelo 2 */}
        <div className="bg-gray-900/60 hover:bg-gray-800/80 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2">
          <img
            src="/web-5.jpg"
            alt="Landing Page"
            className="w-full h-48 object-cover rounded-xl mb-5 border border-gray-700"
          />
          <h3 className="text-xl font-semibold text-blue-300 mb-3">Landing Page</h3>
          <p className="text-gray-400">
            Focada em conversão e campanhas de marketing.
          </p>
        </div>

        {/* Modelo 3 */}
        <div className="bg-gray-900/60 hover:bg-gray-800/80 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2">
          <img
            src="/web-5.jpg"
            alt="Portfólio Criativo"
            className="w-full h-48 object-cover rounded-xl mb-5 border border-gray-700"
          />
          <h3 className="text-xl font-semibold text-blue-300 mb-3">Portfólio Criativo</h3>
          <p className="text-gray-400">
            Perfeito para designers e fotógrafos mostrarem seu trabalho.
          </p>
        </div>
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
