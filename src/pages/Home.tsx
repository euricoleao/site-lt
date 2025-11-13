import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* 🏠 Seção Início */}
     <section id="inicio" className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-8 lg:px-40 py-20 bg-gradient-to-b from-[#030014] to-[#020024] text-white">
        <div className="flex-1 max-w-xl text-center lg:text-left ">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight max-w-7xl mx-auto w-full">
            Transforme sua <br /> presença digital <br /> com a{" "}
            <span className="text-blue-500">LionTech</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Desenvolvemos sites, lojas virtuais e sistemas personalizados que impulsionam o seu negócio.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32
            rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/40">
            Solicite seu site agora
          </button>
        </div>

        <div className="flex-1 mt-12 lg:mt-0 flex justify-center">
          <img
            src="/cpu.png"
            alt="Computador e celular representando tecnologia"
            className="w-[400px] lg:w-[400px] drop-shadow-[0_0_40px_rgba(0,115,255,0.5)] mt-9"
          />
        </div>
      </section>

      {/* 💼 Seção Serviços */}
      <section id="servicos" className="py-20 text-center max-w-6xl w-full mx-auto">
        <h2 className="text-3xl font-bold text-blue-400 mb-10 mt-20">Nossos Serviços</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto w-full px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32">
          {/* Criação de Sites */}
          <Link to="/modelos-sites" className="block">
            <div className="bg-gray-900 hover:bg-gray-800 p-6 rounded-2xl shadow-md transition transform hover:-translate-y-2 max-w-7xl mx-auto w-full">
              <img src="/site.png" alt="Sites" className="mx-auto mb-1 w-20 h-20" />
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Criação de Sites  de reinaldo</h3>
              <p className="text-gray-400">
                Sites modernos e rápidos com design responsivo.
              </p>
            </div>
          </Link>

          {/* E-commerce */}
            <Link to="/modelos-ecommerce" className="block">
          <div className="bg-gray-900 hover:bg-gray-800 p-6 rounded-2xl shadow-md transition transform hover:-translate-y-2">
            <img src="/e-commerce.png" alt="E-commerce" className="mx-auto mb-4 w-20 h-20" />
            <h3 className="text-xl font-semibold mb-3 text-blue-300">E-commerce</h3>
            <p className="text-gray-400">
              Lojas virtuais integradas com métodos de pagamento.
            </p>
          </div>
          </Link>
          {/* Dropshipping */}
            <Link to="/modelos-dropshipping" className="block">
          <div className="bg-gray-900 hover:bg-gray-800 p-6 rounded-2xl shadow-md transition transform hover:-translate-y-2">
            <img src="/drops.png" alt="Dropshipping" className="mx-auto mb-4 w-20 h-20" />
            <h3 className="text-xl font-semibold mb-3 text-blue-300">Dropshipping</h3>
            <p className="text-gray-400">
              Soluções completas para seu negócio online sem estoque.
            </p>
          </div>
          </Link>
        </div>
      </section>

      {/* 🧑‍💻 Seção Sobre / Nossos Cases */}
      <section id="sobre" className="bg-[#020617] py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="text-white md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos cases</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Conheça alguns dos projetos que desenvolvemos para nossos clientes,
              unindo design moderno, performance e presença digital de alto impacto.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition">
              Ver portfólio
            </button>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src="/not.png"
              alt="Notebook mostrando site da LionTech"
              className="w-[400px] md:w-[480px] drop-shadow-[0_0_25px_rgba(59,130,246,0.4)] mt-20"
            />
          </div>
        </div>
      </section>

      {/* 📞 Seção Contato */}
      <section id="contato" className="bg-gray-950 py-16 text-center">
        <h2 className="text-3xl font-bold text-blue-400 mb-6">Entre em Contato</h2>
        <p className="text-gray-400 mb-8">
          Tem um projeto em mente? Fale com a gente pelo WhatsApp!
        </p>
        <a
          href="https://wa.me/5577981465931?text=Olá,%20quero%20um%20site%20com%20a%20LionTech!"
          target="_blank"
          rel="noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-full shadow-lg transition"
        >
          Chamar no WhatsApp
        </a>
      </section>

      {/* ⚙️ Footer */}
      <footer className="bg-gradient-to-r from-blue-900/40 to-blue-700/20 text-center py-10 border-t border-gray-800">
        <div className="flex justify-center items-center space-x-3 mb-2">
          <img src="/logo2.png" alt="LionTech Logo" className="w-8 h-8" />
          <span className="font-semibold text-lg">LionTech</span>
        </div>
        <p className="text-gray-400 text-sm mb-2">
          © 2025 LionTech. Todos os direitos reservados.
        </p>
        <div className="flex justify-center space-x-6 mb-1">
          <a href="#"><FaFacebook size={20} className="hover:text-blue-400" /></a>
          <a href="#"><FaInstagram size={20} className="hover:text-blue-400" /></a>
          <a href="#"><FaLinkedin size={20} className="hover:text-blue-400" /></a>
        </div>
      </footer>
    </>
  );
}
