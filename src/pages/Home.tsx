import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* 🏠 Seção Início */}
    <section
  id="inicio"
  className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-8 lg:px-40 py-20 text-white overflow-hidden"
>
  {/* 🎥 Vídeo de fundo */}
  <video
    src="/bg-atraba.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover opacity-40"
  ></video>

  {/* 🔳 Sobreposição escura para melhor contraste */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* 📦 Conteúdo da Section */}
  <div className="relative flex-1 max-w-xl text-center lg:text-left z-10">
    <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
      Transforme sua <br /> presença digital <br /> com a{" "}
      <span className="text-blue-500">LionTech</span>
    </h1>

    <p className="text-gray-300 text-lg mb-8">
      Desenvolvemos sites, lojas virtuais e sistemas personalizados que impulsionam o seu negócio.
    </p>
<a 
  href="mailto:contato@liontech.com" 
     className="  hover:bg-blue-700 text-white font-semibold px-8 lg:px-20 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/40 border-2 border-blue-500 bg-blue-600 py-4 lg:py-5">
      Solicite seu site agora
    </a>
  </div>

  <div className="relative flex-1 mt-12 lg:mt-0 flex justify-center z-10">
    {/* <img
      src="/desev-2.jpeg"
      alt="Tecnologia"
      className="w-[600px] h-[300px] drop-shadow-[0_0_40px_rgba(0,115,255,0.5)] rounded-lg object-cover"
    /> */}
  </div>
</section>

      {/* 💼 Seção Serviços */}
      <section
  id="servicos"
  className="min-h-screen bg-cover bg-center bg-no-repeat py-20 text-center mx-auto "
  style={{ backgroundImage: "url('/bgservice.jpg')" }}
>
      {/* <section id="servicos" className="py-20 text-center max-w-6xl w-full mx-auto"> */}
        <h2 className="text-3xl font-bold text-blue-400  mt-2">Nossos Serviços</h2>
        <p className="mb-8">Click aqui para explorar nossos serviços</p>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto w-full px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32">
          {/* Criação de Sites */}
          <Link to="/modelos-sites" className="block">
          <img src="/site.png" alt="sites" className="mx-auto mb-4 w-30 h-20 rounded-b-2xl" />
  <div className="relative overflow-hidden p-6 rounded-2xl shadow-md max-w-7xl mx-auto w-full h-60 group">

    {/* Vídeo de fundo */}
    <video
      src="/videocases.mp4"  
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
    />

    {/* Overlay escuro (opcional) */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* Conteúdo acima do vídeo */}
    <div className="relative z-10 text-center">
      {/* <img src="/site.png" alt="Sites" className="mx-auto mb-5 w-15 h-15 rounded-3xl" /> */}
      <h3 className="text-3xl font-extrabold  text-blue-300 mb-[-6px] pt-4  mt-22">Criar  Sites
       
      </h3>
      <p className="text-gray-300">Sites modernos e rápidos com design responsivo.</p>
    </div>

  </div>
</Link>

          {/* E-commerce */}
           <Link to="/modelos-ecommerce" className="block">
           <img src="/e-commerce.png" alt="E-commerce" className="mx-auto mb-4 w-30 h-20 rounded-b-2xl" />
  <div className="relative overflow-hidden p-6 rounded-2xl shadow-md max-w-7xl mx-auto w-full h-60 group">

    {/* Vídeo de fundo */}
    <video
      src="/videocases.mp4"  
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
    />

    {/* Overlay escuro (opcional) */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* Conteúdo acima do vídeo */}
    <div className="relative z-10 text-center">
      {/* <img src="/site.png" alt="Sites" className="mx-auto mb-5 w-15 h-15 rounded-3xl" /> */}
      <h3 className="text-3xl font-extrabold  text-blue-300 mb-[-6px] pt-4  mt-22">E-commerce
       
      </h3>
      <p className="text-gray-300"> Lojas virtuais integradas com métodos de pagamento.</p>
    </div>

  </div>
</Link>

          
          {/* Dropshipping */}
<Link to="/modelos-dropshipping" className="block">
 <img src="/drops.png" alt="Dropshippinbg" className="mx-auto mb-4 w-30 h-20 rounded-b-2xl" />
  <div className="relative overflow-hidden p-6 rounded-2xl shadow-md max-w-7xl mx-auto w-full h-60 group">

    {/* Vídeo de fundo */}
    <video
      src="/videocases.mp4"  
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
    />

    {/* Overlay escuro (opcional) */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* Conteúdo acima do vídeo */}
    <div className="relative z-10 text-center">
      {/* <img src="/site.png" alt="Sites" className="mx-auto mb-5 w-15 h-15 rounded-3xl" /> */}
      <h3 className="text-3xl font-extrabold  text-blue-300 mb-[-6px] pt-4  mt-22">Dropshipping
       
      </h3>
      <p className="text-gray-300">  completas para seu negócio online sem estoque.</p>
    </div>

  </div>
</Link>

  
        </div>
      </section>

      {/* 🧑‍💻 Seção Sobre / Nossos Cases */}
     <section
  id="sobre"
  className="
    bg-[#020617]
    py-20
    min-h-screen
    grid
    place-items-center
    bg-cover bg-center bg-no-repeat
    bg-[url('/bgservice.jpg')]
  "
>
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-10">
    
    {/* Texto */}
    <div className="text-white md:w-1/2 "  >
      <h2 className="text-4xl font-bold mb-4">Nossos cases</h2>
      <p className="text-gray-300 leading-relaxed mb-6 w-[300px]">
        Conheça algumas soluções dos projetos que desenvolvemos para nossos clientes,
        unindo design moderno, performance e presença digital de alto impacto.
      </p>

      <button className="
        bg-gradient-to-r from-blue-600 to-blue-400
        text-white font-medium px-6 py-3 rounded-lg
        shadow-lg hover:opacity-90 transition
      ">
        Ver portfólio
      </button>
    </div>

    {/* Imagem */}
    <div className="md:w-1/2 flex justify-center relative">
      <img
        src="/tra.jpg"
        alt="Notebook mostrando site da LionTech"
        className="
          w-[420px] md:w-[480px]
          drop-shadow-[0_0_25px_rgba(59,130,246,0.4)]
          rounded-2xl
        "
      />
     <p className="absolute top-5 left-1/2 transform -translate-x-1/3 text-white text-xl font-semibold drop-shadow-lg w-[300px] ">
    Aqui seu projeto ganha vida.
  </p>
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
        <div className="flex justify-center items-center mb-2">
          <img src="/lion.png" alt="Logo LionTech"className="w-15 h-15 scale-150"/>
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
