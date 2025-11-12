import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Home from "./pages/Home";
import SiteModels from "./components/SiteModels";
import { FaWhatsapp } from "react-icons/fa";
import ScrollToTop from "./components/ScrollToTop";
import EcommerceModels from "./components/EcommerceModels";
import DropshippingModels from "./components/DropshippingModels";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/modelos-sites"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <SiteModels />
            </motion.div>
          }
        />

        <Route
  path="/modelos-ecommerce"
  element={
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <EcommerceModels />
    </motion.div>
  }
/>

<Route
  path="/modelos-dropshipping"
  element={
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <DropshippingModels />
    </motion.div>
  }
/>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="bg-gray-950 text-white min-h-screen flex flex-col scroll-smooth ">
        <Header />
        <AnimatedRoutes />

        {/* 💬 Botão Flutuante WhatsApp */}
        <a
          href="https://wa.me/5577981465931?text=Olá,%20quero%20um%20site%20com%20a%20LionTech!"
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition transform hover:scale-110 animate-pulse-glow z-50"
        >
          <FaWhatsapp size={28} />
        </a>
      </div>
       
  
  


 </Router> 
  );
}
